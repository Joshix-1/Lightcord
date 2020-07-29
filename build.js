const child_process = require("child_process")
const path = require("path")
const terser = require("terser")
const util = require("util")

const production = true

let fs = require("fs")

console.log = (...args) => {
    process.stdout.write(Buffer.from(util.formatWithOptions({colors: true}, ...args)+"\n", "binary").toString("utf8"))
}
console.info = (...args) => {
    console.log(`\x1b[34m[INFO]\x1b[0m`, ...args)
}

async function main(){
    console.log(__dirname, process.cwd())
    
    console.info("Reseting existent directory...")
    await fs.promises.rmdir("./distApp", {"recursive": true})
    await fs.promises.mkdir(__dirname+"/distApp/dist", {"recursive": true})
    
    console.info("Executing command `npm run compile`")
    console.log(child_process.execSync("npm run compile", {encoding: "binary"}))
    
    let startDir = path.join(__dirname, "./dist")
    let newDir = path.join(__dirname, "./distApp/dist")
    console.info("No error detected. Copying files from "+startDir+".")
    await fs.promises.mkdir(startDir, {recursive: true})
    
    async function processNextDir(folder, folders, predicate, compile, ignoreModules){
        if(typeof ignoreModules === "undefined")ignoreModules = false
        let files = fs.readdirSync(folder, {withFileTypes: true})
        for(let file of files){
            if(file.isFile()){
                let isMinified = file.name.endsWith(".min.js") || file.name.endsWith(".min.css")
                let filepath = path.join(folder, file.name)
                let type = file.name.split(".").pop().toLowerCase()
                if(type === file.name)type = ""
                if([
                    "ts",
                    "md",
                    "gitignore"
                ].includes(type)){
                    console.warn(`\x1b[33mIgnored file ${path.relative(folders.startDir, filepath)} because of type ${type}\x1b[0m`)
                    continue
                }
                if([
                    "tsconfig.json",
                    "webpack.config.js"
                ].includes(file.name)){
                    console.warn(`\x1b[33mIgnored file ${path.relative(folders.startDir, filepath)} because of name ${file.name}\x1b[0m`)
                    continue
                }
                if(folders.exclude && folders.exclude.test(filepath)){
                    console.warn(`\x1b[33mIgnored file ${path.relative(folders.startDir, filepath)} because regex\x1b[0m`)
                    continue
                } 
                let hasMinifiedVersion = (type === "js" || type === "css") && !isMinified && files.find(f => {
                    return f.name === file.name.split(".").slice(0, -1).join(".")+".min."+type
                })
                if(hasMinifiedVersion){
                    console.warn(`\x1b[33mIgnored file ${path.relative(folders.startDir, filepath)} because it has a minified version.\x1b[0m`)
                    continue
                }  
                if(!isMinified && predicate(filepath) && filepath.split(/[\\/]+/).reverse()[1] !== "js"){
                    await compile(filepath, path.join(filepath.replace(folders.startDir, folders.newDir)), "..")
                }else{
                    await fs.promises.copyFile(filepath, filepath.replace(folders.startDir, folders.newDir))
                }
            }else if(file.isDirectory()){
                if(ignoreModules && file.name === "node_modules")continue
                if(folders.exclude && folders.exclude.test(path.join(folder, file.name)))continue 
                await fs.promises.mkdir(path.join(folder, file.name).replace(folders.startDir, folders.newDir), {recursive: true})
                await processNextDir(path.join(folder, file.name), ...Array.from(arguments).slice(1))
            }
        }
    }
    await processNextDir(startDir, {
        startDir,
        newDir
    }, ((filepath) => filepath.endsWith(".js") && (!production ? !filepath.includes("node_modules") : true)), async (filepath, newpath) => {
        console.info(`Minifying ${filepath} to ${newpath}`)

        if(filepath.endsWith("git.js")){
            let commit = child_process.execSync("git rev-parse HEAD").toString().split("\n")[0].trim()
            console.info(`Obtained commit ${commit} for the build`)
            await fs.promises.writeFile(newpath, terser.minify(fs.readFileSync(filepath, "utf8").replace(/"{commit}"/g, `"${commit}"`)).code, "utf8")
        }else{
            await fs.promises.writeFile(newpath, terser.minify(await fs.promises.readFile(filepath, "utf8")).code, "utf8")
        }
    }).then(() => {
        console.info(`Copied files and minified them from ${startDir}.`)
    })
    
    await processNextDir(path.join(__dirname, "modules"), {
        startDir: path.join(__dirname, "modules"),
        newDir: path.join(__dirname, "distApp", "modules")
    }, ((filepath) => filepath.endsWith(".js") && (!production ? !filepath.includes("node_modules") : true)), async (filepath, newpath) => {
        if(filepath.includes("node_modules"))return // don't minify node_modules, and don't include them at all. Installing later
        console.info(`Minifying ${filepath} to ${newpath}`)
        await fs.promises.writeFile(newpath, terser.minify(await fs.promises.readFile(filepath, "utf8")).code, "utf8")
    }, true).then(() => {
        console.info(`Copied files and minified them from ${path.join(__dirname, "modules")}.`)
    })

    await Promise.all((await fs.promises.readdir(path.join(__dirname, "distApp", "modules"))).map(async mdl => {
        let dir = path.join(__dirname, "distApp", "modules", mdl)

        if(!fs.existsSync(path.join(dir, "package.json"))){
            if(mdl === "discord_desktop_core"){
                dir = path.join(dir, "core")
            }else{
                return
            }
        }
    
        console.info(`Installing modules for ${mdl}`)
        console.log(child_process.execSync("npm install --only=prod", {
            encoding: "binary",
            cwd: dir
        }))
    }))

    await processNextDir(path.join(__dirname, "LightcordApi"), {
        startDir: path.join(__dirname, "LightcordApi"),
        newDir: path.join(__dirname, "distApp", "LightcordApi"),
        exclude: /(src|webpack\.config\.js|tsconfig\.json|dist)/g
    }, ((filepath) => filepath.endsWith(".js") && (!production ? !filepath.includes("node_modules") : true)), async (filepath, newpath) => {
        if(filepath.includes("node_modules"))return // don't minify node_modules, and don't include them at all. Installing later
        console.info(`Minifying ${filepath} to ${newpath}`)
        await fs.promises.writeFile(newpath, terser.minify(await fs.promises.readFile(filepath, "utf8")).code, "utf8")
    }, true).then(() => {
        console.info(`Copied files and minified them from ${path.join(__dirname, "LightcordApi")}.`)
    })
    
    console.log(child_process.execSync("npm install --only=prod", {
        encoding: "binary",
        cwd: path.join(__dirname, "distApp", "LightcordApi")
    }))

    function processDJS(dir){
        fs.mkdirSync(path.join(__dirname, "distApp", "DiscordJS", dir), {recursive: true})
        return processNextDir(path.join(__dirname, "DiscordJS", dir), {
            startDir: path.join(__dirname, "DiscordJS", dir),
            newDir: path.join(__dirname, "distApp", "DiscordJS", dir)
        }, ((filepath) => filepath.endsWith(".js") && (!production ? !filepath.includes("node_modules") : true)), async (filepath, newpath) => {
            if(filepath.includes("node_modules"))return // don't minify node_modules, and don't include them at all
            console.info(`Minifying ${filepath} to ${newpath}`)
            await fs.promises.writeFile(newpath, terser.minify(await fs.promises.readFile(filepath, "utf8")).code, "utf8")
        }).then(() => {
            console.info(`Copied files and minified them from ${path.join(__dirname, "DiscordJS", dir)}.`)
        })
    }
    async function copyFileDJS(file){
        await fs.promises.writeFile(path.join(__dirname, "distApp", "DiscordJS", file), await fs.promises.readFile(path.join(__dirname, "DiscordJS", file)))
    }

    await processDJS("dist")
    await copyFileDJS("package.json")
    
    console.log(child_process.execSync("npm install --only=prod", {
        encoding: "binary",
        cwd: path.join(__dirname, "distApp", "DiscordJS")
    }))
    
    fs.mkdirSync(path.join(__dirname, "distApp", "BetterDiscordApp", "dist"), {recursive: true})
    const BDPackageJSON = require("./BetterDiscordApp/package.json")
    fs.writeFileSync(path.join(__dirname, "distApp", "BetterDiscordApp", "package.json"), JSON.stringify(BDPackageJSON), "utf8")
    fs.writeFileSync(path.join(__dirname, "distApp", "BetterDiscordApp", "dist", "style.min.css"), fs.readFileSync(path.join(__dirname, "BetterDiscordApp", "dist", "style.min.css")))
    fs.writeFileSync(path.join(__dirname, "distApp", "BetterDiscordApp", "dist", "index.min.js"), fs.readFileSync(path.join(__dirname, "BetterDiscordApp", "dist", "index.min.js")))

    await fs.promises.mkdir(path.join(__dirname, "distApp", "splash", "videos"), {recursive: true})
    await processNextDir(path.join(__dirname, "splash"), {
        startDir: path.join(__dirname, "splash"),
        newDir: path.join(__dirname, "distApp", "splash")
    }, (filepath) => {
        if(filepath.endsWith(".js"))return true
        return false
    }, async (filepath, newpath) => {
        console.info(`Minifying ${filepath} to ${newpath}`)
        await fs.promises.writeFile(newpath, terser.minify(await fs.promises.readFile(filepath, "utf8")).code, "utf8")
    }).then(() => {
        console.info(`Copied files and minified them from ${path.join(__dirname, "splash")}.`)
    })
    fs.writeFileSync(path.join(__dirname, "distApp", "LICENSE"), fs.readFileSync(path.join(__dirname, "LICENSE")))
    
    let packageJSON = require("./package.json")
    packageJSON.scripts["build:electron_linux"] = packageJSON.scripts["build:electron_linux"].replace("./distApp", ".")
    packageJSON.scripts["build:electron_win"] = packageJSON.scripts["build:electron_win"].replace("./distApp", ".")
    
    fs.writeFileSync(path.join(__dirname, "distApp", "package.json"), JSON.stringify(packageJSON), "utf8")
    
    console.info(`Installing ${Object.keys(packageJSON.dependencies).length} packages...`)
    console.log(child_process.execSync("npm install --only=prod", {
        encoding: "binary",
        cwd: path.join(__dirname, "distApp")
    }))
}
main()
.catch(err => {
    console.error(err)
    process.exit(1)
})