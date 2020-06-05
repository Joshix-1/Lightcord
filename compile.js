const child_process = require("child_process")
const path = require("path")
const terser = require("terser")
const util = require("util")
var rimraf = require("rimraf");
let electron
try{
    electron = require("electron")
}catch(e){
    electron = null
}
let fs = electron ? require("original-fs") : require("fs")

console.log = (...args) => {
    process.stdout.write(Buffer.from(util.formatWithOptions({colors: true}, ...args)+"\n", "binary").toString("utf8"))
}
console.info = (...args) => {
    console.log(`\x1b[34m[INFO]\x1b[0m`, ...args)
}

async function main(){
    if(electron)await electron.app.whenReady()

    console.log(__dirname, process.cwd())
    
    console.info("Reseting existent directory...")
    child_process.execSync("node remove.js") // why can't electron remove directory ? it just doesn't work and I am required to use electron for the .jsc compilation.
    await fs.promises.mkdir(__dirname+"/distApp/dist", {"recursive": true})
    
    console.info("Executing command `tsc`")
    console.log(child_process.execSync("tsc", {encoding: "binary"}))
    
    let startDir = path.join(__dirname, "./dist")
    let newDir = path.join(__dirname, "./distApp/dist")
    console.info("No error detected. Copying files from "+startDir+".")
    await fs.promises.mkdir(startDir, {recursive: true})
    
    async function processNextDir(folder, folders, predicate, compile){
        for(let file of fs.readdirSync(folder, {withFileTypes: true})){
            if(file.isFile()){
                let filepath = path.join(folder, file.name)
                if(predicate(filepath)){
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
    }, ((filepath) => filepath.endsWith(".js")), async (filepath, newpath) => {
        console.info(`Minifying ${filepath} to ${newpath}`)
        await fs.promises.writeFile(newpath, terser.minify(await fs.promises.readFile(filepath, "utf8")).code, "utf8")
    }).then(() => {
        console.info(`Copied files and minified them from ${startDir}.`)
    }).catch(console.error)
    
    await processNextDir(path.join(__dirname, "modules"), {
        startDir: path.join(__dirname, "modules"),
        newDir: path.join(__dirname, "distApp", "modules")
    }, (filepath) => {
        if(filepath.endsWith(".js"))return true
        return false
    }, async (filepath, newpath) => {
        console.info(`Minifying ${filepath} to ${newpath}`)
        await fs.promises.writeFile(newpath, terser.minify(await fs.promises.readFile(filepath, "utf8")).code, "utf8")
    }).then(() => {
        console.info(`Copied files and minified them from ${path.join(__dirname, "modules")}.`)
    })/*
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
.then(() => {
    if(electron){
        electron.app.exit()
    }
})