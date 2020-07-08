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
            return await processNextDir(path, zip, bpath)
        }else if(file.isFile()){
            console.log(file.name)
            if((file.name.endsWith("_linux.node") && platform === "win") || (file.name.endsWith(".node") && !file.name.endsWith("_linux.node") && platform === "lin")){
                return
            }
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