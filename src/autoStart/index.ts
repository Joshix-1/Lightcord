
let autoStart
if(process.platform === "win32"){
    autoStart = require("./win32")
}else if(process.platform === "darwin"){
    autoStart = require("./darwin")
}else{
    autoStart = require("./linux")
}

export default autoStart as typeof import("./win32")