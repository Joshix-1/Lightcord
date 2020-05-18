const child_process = require("child_process")
const fs = require("fs")
const path = require("path")

const MODULES_DIRNAME = path.join(__dirname, "modules")

fs.readdirSync(MODULES_DIRNAME, {withFileTypes: true})
.forEach(e => {
    if(!e.isDirectory())return
    const MODULE_DIRNAME = path.join(MODULES_DIRNAME, e.name)
    if(!fs.existsSync(path.join(MODULE_DIRNAME, "package.json")))return
    if(e.name === "discord_spellcheck")return
    
    console.log(`Installing modules in ${e.name}.`)

    child_process.exec("npm i", {
        cwd: MODULE_DIRNAME,
        env: process.env
    }, () => {})
})


const MODULE_DIRNAME = path.join(__dirname, "modules", "discord_desktop_core", "core")
const BETTERDISCORD_DIRNAME = path.join(__dirname, "BetterDiscordApp")

child_process.spawn((process.platform === "win32" ? "npm.cmd" : "npm"), ["i"], {
    cwd: MODULE_DIRNAME,
    env: process.env,
    stdio: "inherit"
}).on("error", (err) => {
    console.error(err)
    process.exit(1)
})

child_process.spawn((process.platform === "win32" ? "npm.cmd" : "npm"), ["i"], {
    cwd: BETTERDISCORD_DIRNAME,
    env: process.env,
    stdio: "inherit"
}).on("error", (err) => {
    console.error(err)
    process.exit(1)
})
