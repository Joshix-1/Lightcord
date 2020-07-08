const child_process = require("child_process")
const path = require("path")
const terser = require("terser")
const util = require("util")

/** Super noisy if production is on. */
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
    //console.log(child_process.execSync("npm run compile", {encoding: "binary"}))
    
    let startDir = path.join(__dirname, "./dist")
    let newDir = path.join(__dirname, "./distApp/dist")
    console.info("No error detected. Copying files from "+startDir+".")
    await fs.promises.mkdir(startDir, {recursive: true})
    
    async function processNextDir(folder, folders, predicate, compile){
        for(let file of fs.readdirSync(folder, {withFileTypes: true})){
            if(file.isFile()){
                let filepath = path.join(folder, file.name)
                if(predicate(filepath) && filepath.split(/[\\/]+/).reverse()[1] !== "js"){
                    await compile(filepath, path.join(filepath.replace(folders.startDir, folders.newDir)), "..")
                }else{
                    await fs.promises.copyFile(filepath, filepath.replace(folders.startDir, folders.newDir))
                }
            }else if(file.isDirectory()){
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
    }).catch(console.error)
    
    await processNextDir(path.join(__dirname, "modules"), {
        startDir: path.join(__dirname, "modules"),
        newDir: path.join(__dirname, "distApp", "modules")
    }, ((filepath) => filepath.endsWith(".js") && (!production ? !filepath.includes("node_modules") : true)), async (filepath, newpath) => {
        console.info(`Minifying ${filepath} to ${newpath}`)
        await fs.promises.writeFile(newpath, terser.minify(await fs.promises.readFile(filepath, "utf8")).code, "utf8")
    }).then(() => {
        console.info(`Copied files and minified them from ${path.join(__dirname, "modules")}.`)
    })

    await processNextDir(path.join(__dirname, "LightcordApi"), {
        startDir: path.join(__dirname, "LightcordApi"),
        newDir: path.join(__dirname, "distApp", "LightcordApi")
    }, ((filepath) => filepath.endsWith(".js") && (!production ? !filepath.includes("node_modules") : true)), async (filepath, newpath) => {
        console.info(`Minifying ${filepath} to ${newpath}`)
        await fs.promises.writeFile(newpath, terser.minify(await fs.promises.readFile(filepath, "utf8")).code, "utf8")
    }).then(() => {
        console.info(`Copied files and minified them from ${path.join(__dirname, "LightcordApi")}.`)
    })

    await fs.promises.rmdir(path.join(__dirname, "distApp", "LightcordApi", "src"), {"recursive": true})
    await fs.promises.unlink(path.join(__dirname, "distApp", "LightcordApi", "webpack.config.js"))
    await fs.promises.unlink(path.join(__dirname, "distApp", "LightcordApi", "tsconfig.json"))

    await processNextDir(path.join(__dirname, "DiscordJS"), {
        startDir: path.join(__dirname, "DiscordJS"),
        newDir: path.join(__dirname, "distApp", "DiscordJS")
    }, ((filepath) => filepath.endsWith(".js") && (!production ? !filepath.includes("node_modules") : true)), async (filepath, newpath) => {
        console.info(`Minifying ${filepath} to ${newpath}`)
        await fs.promises.writeFile(newpath, terser.minify(await fs.promises.readFile(filepath, "utf8")).code, "utf8")
    }).then(() => {
        console.info(`Copied files and minified them from ${path.join(__dirname, "DiscordJS")}.`)
    })

    await fs.promises.rmdir(path.join(__dirname, "distApp", "DiscordJS", "src"), {"recursive": true})
    await fs.promises.unlink(path.join(__dirname, "distApp", "DiscordJS", "webpack.config.js"))
    await fs.promises.unlink(path.join(__dirname, "distApp", "DiscordJS", "tsconfig.json"))
    
    fs.mkdirSync(path.join(__dirname, "distApp", "BetterDiscordApp", "js"), {recursive: true})
    fs.mkdirSync(path.join(__dirname, "distApp", "BetterDiscordApp", "css"), {recursive: true})
    const BDPackageJSON = require("./BetterDiscordApp/package.json")
    fs.writeFileSync(path.join(__dirname, "distApp", "BetterDiscordApp", "package.json"), JSON.stringify(BDPackageJSON), "utf8")
    fs.writeFileSync(path.join(__dirname, "distApp", "BetterDiscordApp", "css", "main.css"), fs.readFileSync(path.join(__dirname, "BetterDiscordApp", "css", "main.css")))
    fs.writeFileSync(path.join(__dirname, "distApp", "BetterDiscordApp", "css", "main.min.css"), fs.readFileSync(path.join(__dirname, "BetterDiscordApp", "css", "main.min.css")))
    fs.writeFileSync(path.join(__dirname, "distApp", "BetterDiscordApp", "js", "main.js"), fs.readFileSync(path.join(__dirname, "BetterDiscordApp", "js", "main.js")))
    fs.writeFileSync(path.join(__dirname, "distApp", "BetterDiscordApp", "js", "main.min.js"), fs.readFileSync(path.join(__dirname, "BetterDiscordApp", "js", "main.min.js")))

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

    /*
    await processNextDir(startDir, {
        startDir,
        newDir
    }, ((filepath) => false), ()=>{}).then(() => {
        console.info(`Copied files and minified them from ${startDir}.`)
    }).catch(console.error)*/
    
    let packageJSON = require("./package.json")
    packageJSON.scripts.build = packageJSON.scripts.build.replace("./distApp", ".")
    
    fs.writeFileSync(path.join(__dirname, "distApp", "package.json"), JSON.stringify(packageJSON), "utf8")
    
    console.info(`Installing ${Object.keys(packageJSON.dependencies).length + Object.keys(packageJSON.devDependencies).length} packages...`)
    console.log(child_process.execSync("npm i", {
        encoding: "binary",
        cwd: path.join(__dirname, "distApp")
    }))
}
main()