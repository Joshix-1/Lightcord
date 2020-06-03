const electron = require("electron").remote
const fetch = require("node-fetch").default

const currentWindow = electron.getCurrentWindow()


currentWindow.webContents.on("dom-ready", () => {
    const customTitlebar = require('custom-electron-titlebar')

    new customTitlebar.Titlebar({
        backgroundColor: customTitlebar.Color.fromHex('#2f3136'),
        "drag": true,
        minimizable: false,
        maximizable: false,
        closeable: true,
        menu: electron.Menu.buildFromTemplate([])
    });
    function resetAppMount(){
        document.querySelector("body > div.container-after-titlebar > div").remove()
        const appMount = document.createElement("div")
        appMount.className = "appMount"
        document.querySelector("body > div.container-after-titlebar").appendChild(appMount)
    }
    document.querySelector("body > div.container-after-titlebar > div > div.buttonContainer > div.button.button-yes").addEventListener("click", (ev) => {// should we move location ? or go trough a webview ?
        resetAppMount()
        const webview = document.createElement("webview")
        webview.id = "discordauth"
        webview.src = "https://discord.com/api/oauth2/authorize?client_id=711416957718757418&redirect_uri=http%3A%2F%2Flightcord.electron%2Flogin%2Fcallback&response_type=code&scope=identify"
        webview.style.width = "500ox"
        webview.style.height = "520px"
        webview.addEventListener('did-stop-loading', () => {
            console.log("Webview loaded")
            electron.webContents.fromId(webview.getWebContentsId()).on("will-navigate", (e, url) => {
                console.log(url)
                if(url.startsWith("http://lightcord.electron/login/callback?error=")){ // used denied / error.
                    e.preventDefault()
                    currentWindow.close()
                    return
                }else if(url.startsWith("http://lightcord.electron/login/callback?code=")){ // yay we got the code
                    const query =  url.split("?")[1]
                    e.preventDefault()
                    webview.remove()
                    resetAppMount()
                    document.querySelector("body > div.container-after-titlebar > div").innerHTML = '<h2 class="center">Loading...</h2>'
                    fetch("https://lightcord.deroku.xyz/auth/callback?"+query)
                    .then(async res => {
                        if(res.status !== 200){ // error
                            currentWindow.close()
                            return
                        }
                        const resp = await res.text()
                        console.debug(resp)
                        window.location.href = "lightcord://login/callback?auth="+resp
                    })
                }
            })
        })
        document.querySelector("body > div.container-after-titlebar > div").appendChild(webview)
    })
    document.querySelector("body > div.container-after-titlebar > div > div.buttonContainer > div.button.button-no").addEventListener("click", (ev) => {
        currentWindow.close()
    })
})