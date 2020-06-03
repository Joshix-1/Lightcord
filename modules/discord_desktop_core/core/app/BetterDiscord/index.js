const options = {
    loadCompressed: true
}

const ModuleLoader = require("./loaders/modules")
const { EventEmitter } = require("events")
const Logger = require("./Logger")
const fs = require("fs")
const path = require("path")
const electron = require("electron")
const fetch = require("node-fetch").default

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
    ModuleLoader.get(e => e.getCurrentHub)[0].getCurrentHub().getClient().getOptions().enabled = false

    // setting react in require cache
    try{
        window.React = require("react")
    }catch(e){
        const React = ModuleLoader.get(e => !["Component", "PureComponent", "Children", "createElement", "cloneElement"].map(c => !!e[c]).includes(false))[0]
        window.React = React
        require.cache["react"] = React
    }
    try{
        window.ReactDOM = require("react-dom")
    }catch(e){
        const ReactDOM = ModuleLoader.get(e => e.findDOMNode)[0]
        window.ReactDOM = ReactDOM
        require.cache["react-dom"] = ReactDOM
    }
    
    let original = ModuleLoader.get((e) =>  e.createSound)[0].createSound
    ModuleLoader.get((e) =>  e.createSound)[0].createSound = function(sound){
        let isCalling = sound === "call_ringing_beat" || sound === "call_ringing"
        if(isCalling){
            let returned = original(...arguments)
            Object.defineProperty(returned, "name", {
                get(){
                    return window.Lightcord.Settings.callRingingBeat ? "call_ringing_beat" : "call_ringing"
                },
                set(data){
                    console.log("Attempting to set call_ringing value. Canceling "+data)
                },
                configurable: false
            })
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
    if(!fs.existsSync(pluginPath)){
        fs.mkdirSync(pluginPath, {recursive: true})

        /** Downloads Util Plugins So the user don't have to install it manually */

        /** ZeresPluginLibrary */
        const ZeresPluginLibraryPath = path.join(pluginPath, "0PluginLibrary.plugin.js")
        fetch("https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js")
        .then(async res => {
            if(res.status !== 200)return
            const content = await res.buffer()
            fs.writeFileSync(ZeresPluginLibraryPath, content)
        })

        // Should we download 1XenoLib and BDFDB too ?

        BetterDiscordConfig.haveInstalledDefault = true // Inform User about what we just did
    }
    if(!fs.existsSync(themePath)){
        fs.mkdirSync(themePath, {recursive: true})

        /** Downloads Basic Themes to guide user and showcase features */

        /** Discord Dark */
        const DiscordDarkPath = path.join(themePath, "DiscordDark.theme.css")
        const themeContent = fs.readFileSync(path.join(__dirname, "assets", "DiscordDark.theme.css"), "utf8")
        fs.writeFileSync(DiscordDarkPath, themeContent, "utf8")

        /** Glasscord Example */
        const GlasscordExamplePath = path.join(themePath, "glasscord_example.theme.css")
        fetch("https://raw.githubusercontent.com/AryToNeX/Glasscord/master/extras/discord_example.theme.css")
        .then(async res => {
            if(res.status !== 200)return
            const content = await res.buffer()
            fs.writeFileSync(GlasscordExamplePath, content)
        })

        BetterDiscordConfig.haveInstalledDefault = true // Inform User about what we just did
    }
    
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

    const appSettings = electron.remote.getGlobal("appSettings")
    let Authorization = appSettings.get("LIGHTCORD_AUTH", false)
    let shouldShowPrompt = Authorization === false

    if(typeof Authorization !== "string"){
        Authorization = null
        appSettings.set("LIGHTCORD_AUTH", null)
        appSettings.save()
    }

    window.Lightcord = {
        DiscordModules: {
            dispatcher,
            constants
        },
        Settings: {
            devMode: false,
            callRingingBeat: true
        },
        Api: {
            get Authorization(){
                return Authorization
            },
            set Authorization(data){
                if(typeof data !== "string" && data !== null)return Authorization
                appSettings.set("LIGHTCORD_AUTH", Authorization = data)
                appSettings.save()
            }
        },
        BetterDiscord: { // Global BetterDiscord's exported modules

        }
    }

    if(shouldShowPrompt){
        let onConn = (ev) => {
            console.log(`Showing auth window.`, ev)
            shouldShowPrompt = false
            dispatcher.unsubscribe(constants.ActionTypes.CONNECTION_OPEN || "CONNECTION_OPEN", onConn)

            const options = {
                width: 500,
                height: 550,
                backgroundColor: "#202225",
                show: true,
                resizable: false,
                maximizable: false,
                minimizable: false,
                frame: false,
                center: false,
                webPreferences: {
                    nodeIntegration: false,
                    preload: path.join(__dirname, "auth", "preload.js"),
                    webviewTag: true
                },
                parent: electron.remote.getCurrentWindow()
            };
            options.x = Math.round(window.screenX + window.innerWidth / 2 - options.width / 2);
            options.y = Math.round(window.screenY + window.innerHeight / 2 - options.height / 2);

            const authWindow = new electron.remote.BrowserWindow(options)
            
            authWindow.webContents.session.protocol.registerFileProtocol("lightcord", (req, callback) => {
                const parsedURL = new URL("http://lightcord.xyz/"+req.url.split("://")[1])

                let file
                if(req.method !== "GET"){
                    file = "404.html"
                }else{
                    if(parsedURL.pathname === "/index.html"){
                        file = "index.html"
                    }else if(parsedURL.pathname === "/index.css"){
                        file = "index.css"
                    }else if(parsedURL.pathname === "/login/callback"){
                        authWindow.close()
                        console.log(parsedURL.searchParams)
                        Authorization = parsedURL.searchParams.get("auth")
                        authWindow = null
                        return
                    }
                }

                if(!file){
                    file = "404.html"
                }

                callback(path.join(__dirname, "auth", file))
            }, (err) => {
                if(err)console.error(err)
            })

            electron.remote.getCurrentWindow().webContents.on("devtools-reload-page", () => {
                electron.remote.protocol.unregisterProtocol("lightcord")
            })

            authWindow.on("close", () => {
                electron.remote.protocol.unregisterProtocol("lightcord")
            })

            authWindow.loadURL("lightcord://index.html")
        }
        dispatcher.subscribe(constants.ActionTypes.CONNECTION_OPEN || "CONNECTION_OPEN", onConn)
    }

    const BetterDiscord = window.BetterDiscord = window.mainCore = new(require("../../../../../BetterDiscordApp/js/main.min.jsbr").default)(BetterDiscordConfig)

    const Utils = window.Lightcord.BetterDiscord.Utils
    // security delete
    delete window.Lightcord.BetterDiscord.Utils 
    delete window.Lightcord.BetterDiscord.Utils 

    await ensureExported(e => e.default && e.default.displayName == "AuthBox")

    const classs = ModuleLoader.get(e => e.default && e.default.displayName == "AuthBox")
    
    Utils.monkeyPatch(classs[0], "default", {after: (data) => {
        const children = Utils.getNestedProp(data.returnValue, "props.children.props.children.props.children")
        children.push(React.createElement(require("./tokenLogin").default, {}))
    }})

    await ensureGuildClasses()
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

let zlib = require("zlib")
let tmp = require("tmp")

require.extensions[".jsbr"] = (m, filename) => {
    if(!zlib)zlib = require("zlib")
    if(!tmp)tmp = require("tmp")
    let tmpFile = tmp.fileSync()

    fs.writeFileSync(tmpFile.name+".js", zlib.brotliDecompressSync(fs.readFileSync(filename)))
    return require.extensions[".js"](m, tmpFile.name+".js")
}

const LightcordBDFolder = path.join(electron.remote.app.getPath("appData"), "Lightcord_BD")

const BetterDiscordConfig = window.BetterDiscordConfig = {
	"branch": "lightcord",
    dataPath: LightcordBDFolder+"/",
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

function ensureExported(filter){
    return new Promise((resolve) => {
        let classs = ModuleLoader.get(filter)[0]
        if(classs)return resolve()

        let intergay = setInterval(() => {
            classs = ModuleLoader.get(filter)[0]
            if(classs){
                clearInterval(intergay)
                resolve()
                return
            }
        }, 100);
    })
}

function getGuildClasses() {
    const guildsWrapper = ModuleLoader.get(e => e.wrapper && e.unreadMentionsBar)[0];
    const guilds = ModuleLoader.get(e => e.guildsError && e.selected)[0]
    const pill = ModuleLoader.get(e => e.blobContainer)[0]
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