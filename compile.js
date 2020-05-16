const child_process = require("child_process")
const path = require("path")
const bytenode = require("bytenode")
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
    }, ((filepath) => filepath.endsWith(".js") && !filepath.endsWith("launcher.js")), (filepath, newpath) => {
        console.info(`Compiling ${filepath} to ${newpath}c`)
        bytenode.compileFile(filepath, newpath+"c")
    }).then(() => {
        console.info(`Copied files and minified them from ${startDir}.`)
    }).catch(console.error)
    
    await processNextDir(path.join(__dirname, "modules"), {
        startDir: path.join(__dirname, "modules"),
        newDir: path.join(__dirname, "distApp", "modules")
    }, (filepath) => {
        if(filepath.includes("node_modules"))return false
        if(filepath.endsWith(".node"))return false
        if(filepath.endsWith(".json"))return false
        if(filepath.endsWith(".js")){
            if(filepath.endsWith("mainScreenPreload.js"))return false
            for(let file of [
                "discord_cloudsync\\index.js", 
                "discord_desktop_core\\index.js", 
                "discord_dispatch\\index.js",
                "discord_erlpack\\index.js",
                "discord_game_utils\\index.js",
                "discord_krisp\\index.js",
                "discord_media\\index.js",
                "discord_modules\\index.js",
                "discord_overlay2\\index.js",
                "discord_rpc\\index.js",
                "discord_spellcheck\\index.js",
                "discord_utils\\index.js",
                "discord_voice\\index.js",
                "discord_desktop_core\\core\\app\\index.js"
            ]){
                    if(filepath.endsWith(file))return false
                }
            return true
        }
        return false
    }, (filepath, newpath) => {
        console.info(`Compiling ${filepath} to ${newpath}c`)
        bytenode.compileFile(filepath, newpath+"c")
    }).then(() => {
        console.info(`Copied files and minified them from ${path.join(__dirname, "modules")}.`)
    })
    await processNextDir(startDir, {
        startDir,
        newDir
    }, ((filepath) => false), ()=>{}).then(() => {
        console.info(`Copied files and minified them from ${startDir}.`)
    }).catch(console.error)
    
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