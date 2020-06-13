import autoLaunch from "auto-launch"

const autoStart = new autoLaunch({
    name: "Lightcord"
})

export default {
    install(callback){
        autoStart.enable()
        .then(callback, callback)
    },
    isInstalled(callback){
        autoStart.isEnabled()
        .then(callback)
    },
    uninstall(callback){
        autoStart.disable()
        .then(callback, callback)
    },
    update(callback){
        autoStart.enable()
        .then(callback, callback)
    }
}

/*

let autoStart
if(process.platform === "win32"){
    autoStart = require("./win32")
}else if(process.platform === "darwin"){
    autoStart = require("./darwin")
}else{
    autoStart = require("./linux")
}

export default autoStart as typeof import("./win32")*/