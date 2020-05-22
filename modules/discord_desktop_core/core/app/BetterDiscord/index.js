const ModuleLoader = require("./loaders/modules")
const { EventEmitter } = require("events")
const Logger = require("./Logger")
const fs = require("fs")
const path = require("path")
const electron = require("electron")

const events = exports.events = new EventEmitter()
const logger = exports.logger = new Logger("LightCord")

let hasInit = false
let tries = 0

exports.init = function(){
    if(hasInit == true){
        console.warn(new Error("LightCord has already inited."))
        return
    }
    hasInit = true
    let readyInterval = setInterval(()=>{
        events.emit("debug", `[INIT] try ${tries++} loading LightCord`)
        try{
            if(!global.webpackJsonp)return
            if(!ModuleLoader.get(4))return
            clearInterval(readyInterval)
            privateInit()
            .then(() => {
                console.log("Finished loading Lightcord.")
            })
        }catch(e){
            console.error(e)
        } 
    }, 100)
}

let hasPrivateInit = false

async function privateInit(){
    if(!hasInit)return
    if(hasPrivateInit)return
    hasPrivateInit = true

    //disabling sentry
    BDModules.get(e => e.getCurrentHub)[0].getCurrentHub().getClient().getOptions().enabled = false
    
    let original = BDModules.get((e) =>  e.createSound)[0].createSound
    BDModules.get((e) =>  e.createSound)[0].createSound = function(sound){
        let isCalling = sound === "call_ringing_beat" || sound === "call_ringing"
        if(isCalling){
            let returned = original(...arguments)
            Object.defineProperty(returned, "name", {
                get(){
                    return window.Lightcord.Settings.callRingingBeat ? "call_ringing_beat" : "call_ringing"
                },
                set(data){
                    console.log("Attempting to set call_ringing value. Canceling "+data)
                }
            })
            console.log(returned)
            return returned
        }else{
            return original(...arguments)
        }
    }

    let constants = ModuleLoader.get(m=>m.API_HOST)[0]
    let dispatcher = ModuleLoader.get(m=>m.Dispatcher&&m.default&&m.default.dispatch)[0].default
    require("../../../../../BetterDiscordApp/css/main.css")
    require("./lightcord.css")

    
    window.$ = window.jQuery = require("./jquery.min.js")
    require("./ace.js")

    if(!fs.existsSync(BetterDiscordConfig.dataPath))fs.mkdirSync(BetterDiscordConfig.dataPath, {recursive: true})
    let pluginPath = path.join(BetterDiscordConfig.dataPath, "plugins")
    let themePath = path.join(BetterDiscordConfig.dataPath, "themes")
    console.log(`Plugins: ${pluginPath}\nThemes: ${themePath}`)
    if(!fs.existsSync(pluginPath))fs.mkdirSync(pluginPath, {recursive: true})
    if(!fs.existsSync(themePath))fs.mkdirSync(themePath, {recursive: true})
    
    // setting Discord Internal Developer Mode for developement and test purposes.
    Object.defineProperty(ModuleLoader.get(e => e.default && typeof e.default === "object" && ("isDeveloper" in e.default))[0].default, "isDeveloper", {
        get(){return !!window.Lightcord.Settings.devMode},
        set(data){return !!window.Lightcord.Settings.devMode}
    })

    /**
     * @type {typeof import("../../../../../DiscordJS").default}
     */
    let DiscordJS
    try{
        DiscordJS = require("../../../../../DiscordJS").default
    }catch(err){
        console.error(err)
        DiscordJS = null
    }

    window.Lightcord = {
        DiscordModules: {
            dispatcher,
            constants
        },
        Settings: {
            devMode: false,
            callRingingBeat: true
        }
    }

    await ensureGuildClasses()

    const BetterDiscord = window.BetterDiscord = window.mainCore = new(require("../../../../../BetterDiscordApp/js/main").default)(BetterDiscordConfig)
    BetterDiscord.init()

    events.emit("ready")
    
    if(DiscordJS)DiscordJS.client.emit("ready")
}

require.extensions[".css"] = (m, filename) => {
    let content = fs.readFileSync(filename, "binary")
    let style = document.createElement("style")
    style.id = btoa(filename)
    style.innerText = content
    document.head.appendChild(style)
    m.exports = {
        id: style.id,
        remove(){
            return style.remove()
        }
    }
    return m.exports
}

const LightcordBDFolder = path.join(electron.remote.app.getPath("appData"), "Lightcord_BD")

const BetterDiscordConfig = window.BetterDiscordConfig = {
	"branch": "lightcord",
    dataPath: LightcordBDFolder,
    os: process.platform,
    latestVersion: "0.3.4",
    version: "0.3.4"
}

function ensureGuildClasses(){
    return new Promise((resolve) => {
        let classs = getGuildClasses()
        if(classs && classs.wrapper)return resolve()

        let intergay = setInterval(() => {
            classs = getGuildClasses()
            if(classs && classs.wrapper){
                clearInterval(intergay)
                resolve()
                return
            }
        }, 200);
    })
}

function getGuildClasses() {
    const guildsWrapper = BDModules.get(e => e.wrapper && e.unreadMentionsBar)[0];
    const guilds = BDModules.get(e => e.guildsError && e.selected)[0]
    const pill = BDModules.get(e => e.blobContainer)[0]
    return Object.assign({}, guildsWrapper, guilds, pill);
}

const originalResolve = path.resolve
const originalJoin = path.join

const BetterDiscordFolder = function() {
    if (process.env.injDir) return path.resolve(process.env.injDir);
    switch (process.platform) {
        case "win32":
            return path.resolve(process.env.appdata, "BetterDiscord/");
        case "darwin":
            return path.resolve(process.env.HOME, "Library/Preferences/", "BetterDiscord/");
        default:
            return path.resolve(process.env.XDG_CONFIG_HOME ? process.env.XDG_CONFIG_HOME : process.env.HOME + "/.config", "BetterDiscord/");
    }
}()

path.resolve = (...args) => { // Patching BetterDiscord folder by Lightcord's BetterDiscord folder
    let resp = originalResolve.call(path, ...args)
    if(resp.startsWith(BetterDiscordFolder))resp = resp.replace(BetterDiscordFolder, LightcordBDFolder)
    return resp
}
path.join = (...args) => { // Patching BetterDiscord folder by Lightcord's BetterDiscord folder
    let resp = originalJoin.call(path, ...args)
    if(resp.startsWith(BetterDiscordFolder))resp = resp.replace(BetterDiscordFolder, LightcordBDFolder)
    return resp
}

path.originalResolve = originalResolve






















window.ohgodohfuck = function(){
    let style=document.createElement("style");style.innerHTML=`html:after{content:"";position:absolute;top:0;left:0 ;width:100vw;height:100vh;background-image:url("https://media.giphy.com/media/l378vg4Pm9LGnmD6M/giphy.gif");background-size:cover;background-position:center;background-color:transparent !important;opacity:0.9;mix-blend-mode:hue;z-index:999999999999;pointer-events:none}@keyframes ohgodohfuck{from{transform:rotateZ(0deg)}to{transform:rotateZ(360deg)}}#app-mount{animation:ohgodohfuck 5s infinite alternate}`;document.body.append(style);setTimeout(()=>document.body.removeChild(style),5000); 
}