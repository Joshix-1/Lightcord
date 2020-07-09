const fs = require("fs")
const fsAsync = fs.promises
const yazl = require("yazl")
const __path = require("path")

fs.unlinkSync(__path.join(__dirname, "builds", "lightcord-win32-ia32.zip"))
fs.unlinkSync(__path.join(__dirname, "builds", "lightcord-linux-x64.zip"))

const winZip = new yazl.ZipFile()
winZip.outputStream.pipe(fs.createWriteStream(__path.join(__dirname, "builds", "lightcord-win32-ia32.zip")))

const linuxZip = new yazl.ZipFile()
linuxZip.outputStream.pipe(fs.createWriteStream(__path.join(__dirname, "builds", "lightcord-linux-x64.zip")))

async function processNextDir(dir, zip, bpath, platform){
    if(!bpath)bpath = dir
    if(dir.replace(bpath, ""))zip.addEmptyDirectory(dir.replace(bpath, "").slice(1))
    await Promise.all(fs.readdirSync(dir, {withFileTypes: true})
    .map(async file => {
        let path = __path.join(dir, file.name)
        if(file.isDirectory()){
            return await processNextDir(path, zip, bpath, platform)
        }else if(file.isFile()){
            if(!path.includes("node_modules")){
                if(platform === "win"){
                    if(file.name.endsWith("_linux.node"))return
                }else if(platform === "lin"){
                    if(file.name.endsWith(".node")){
                        if(!file.name.endsWith("_linux.node"))return
                    }
                    if(file.name.endsWith(".dll"))return
                }
            }
            console.log("Adding "+file.name+" to "+platform)
            let stat = fs.statSync(path)
            zip.addBuffer(await fsAsync.readFile(path), __path.relative(bpath, path), {
                mode: stat.mode,
                mtime: stat.mtime
            })
        }
    }))
}

processNextDir(__path.join(__dirname, "builds", "lightcord-win32-ia32"), winZip, undefined, "win")
.then(() => {
    console.log(`Zipped win32.`)
    winZip.end()
})

processNextDir(__path.join(__dirname, "builds", "lightcord-linux-x64"), linuxZip, undefined, "lin")
.then(() => {
    console.log(`Zipped linux.`)
    linuxZip.end()
})