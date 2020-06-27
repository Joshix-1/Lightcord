const spawn = require("cross-spawn")
const { join } = require("path")

/** Main Project */
spawnSync("tsc")
/** BetterDiscord */
spawnSync("npm run build-prod", join(__dirname, "BetterDiscordApp"))
spawnSync("npm run build", join(__dirname, "BetterDiscordApp"))
spawnSync("npm run minify-css", join(__dirname, "BetterDiscordApp"))
/** DiscordJS */
spawnSync("npm run build", join(__dirname, "DiscordJS"))
/** LightcordApi */
spawnSync("npm run build", join(__dirname, "LightcordApi"))
spawnSync("npm run build-prod", join(__dirname, "LightcordApi"))
spawnSync("tsc", join(__dirname, "LightcordApi"))


function spawnSync(args, cwd){
    args = args.split(" ")
    let command = args.shift()
    return spawn(command, args, {
        cwd: cwd || process.cwd(),
        env: process.env,
        stdio: "inherit"
    })
}

process.on("beforeExit", () => {
    console.log(`Exiting compilation`)
})