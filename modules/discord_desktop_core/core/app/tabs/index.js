const fs = require("fs")
const { join } = require("path")
const { pathToFileURL } = require("url")
const ipc = require("../discord_native/ipc")

let webviews = new Map()
window.webviews = webviews

function forwardToCurrentWebview(event){
    return [event, async (...args) => {
        let webview = webviews.get(document.querySelector(".chrome-tab[active]"))
        if(!webview)return
        await webview.ready
        webview.send(event, ...args.slice(1))
    }]
}

ipc.on(...forwardToCurrentWebview("MAIN_WINDOW_FOCUS"))
ipc.on(...forwardToCurrentWebview("MAIN_WINDOW_BLUR"))
ipc.on(...forwardToCurrentWebview("SYSTEM_TRAY_OPEN_VOICE_SETTINGS"))
ipc.on(...forwardToCurrentWebview("SYSTEM_TRAY_TOGGLE_MUTE"))
ipc.on(...forwardToCurrentWebview("SYSTEM_TRAY_TOGGLE_DEAFEN"))
ipc.on(...forwardToCurrentWebview("LAUNCH_APPLICATION"))
ipc.on(...forwardToCurrentWebview("UPDATE_ERROR"))
ipc.on(...forwardToCurrentWebview("UPDATE_NOT_AVAILABLE"))
ipc.on(...forwardToCurrentWebview("UPDATE_MANUALLY"))
ipc.on(...forwardToCurrentWebview("UPDATE_AVAILABLE"))
ipc.on(...forwardToCurrentWebview("MODULE_INSTALL_PROGRESS"))
ipc.on(...forwardToCurrentWebview("UPDATE_DOWNLOADED"))
ipc.on(...forwardToCurrentWebview("MODULE_INSTALLED"))
ipc.on(...forwardToCurrentWebview("CHECKING_FOR_UPDATES"))
ipc.on(...forwardToCurrentWebview("UPDATER_HISTORY_RESPONSE"))
ipc.on(...forwardToCurrentWebview("ACCESSIBILITY_SUPPORT_CHANGED"))
ipc.on(...forwardToCurrentWebview("HELP_OPEN"))
ipc.on(...forwardToCurrentWebview("USER_SETTINGS_OPEN"))
ipc.on(...forwardToCurrentWebview("MAIN_WINDOW_PATH"))
ipc.on("RELOAD", () => {
    let webview = webviews.get(document.querySelector(".chrome-tab[active]"))
    if(!webview)return
    webview.reload()
})
ipc.on("NEW_TAB", () => {
    chromeTabs.addTab({
        title: 'Lightcord',
        favicon: faviconURL
    })
})
ipc.on("CLOSE_TAB", () => {
    let active = document.querySelector("div.chrome-tab[active]")
    if(!active)return
    chromeTabs.removeTab(active)
})
ipc.on("OPEN_DEVTOOLS", () => {
    let webview = webviews.get(document.querySelector(".chrome-tab[active]"))
    if(!webview)return
    webview.openDevTools()
})

window.onload = () => {
    const ChromeTabs = require("chrome-tabs")
    require("chrome-tabs/css/chrome-tabs.css")
    require("chrome-tabs/css/chrome-tabs-dark-theme.css")
    require("./controls.css")

    let tabs = document.querySelector(".chrome-tabs")
    let chromeTabs = new ChromeTabs()
    chromeTabs.init(tabs)

    tabs.addEventListener('activeTabChange', ({detail}) => {
        let webview = webviews.get(detail.tabEl)
        if(!webview){
            chromeTabs.removeTab(detail.tabEl)
            return
        }
        let active = Array.from(webviews.values()).find(e => e.classList.contains("active-webview"))
        if(active)active.classList.remove("active-webview")
        webview.classList.add("active-webview")
    })
    tabs.addEventListener('tabAdd', ({detail}) => {
        chromeTabs.updateTab(detail.tabEl, {
            title: "Lightcord Loading...",
            favicon: faviconURL
        })
        let webview = document.createElement("webview")
        webview.src = "https://discord.com/app"
        webview.classList.add("discord-webview")
        webview.classList.add("webview-active")
        webview.setAttribute("preload", pathToFileURL(join(__dirname, "../mainScreenPreload.js")))
        webview.shadowRoot.childNodes.item(1).style.height = "100%"
        webview.enableremotemodule = true
        webview.nodeintegration = false
        webview.webpreferences = "nativeWindowOpen=yes"
        webview.enableblinkfeatures = "EnumerateDevices,AudioOutputDevices"
        webview.addEventListener("ipc-message", function(...ev){ // TODO: Why don't we receive Ipc Messages, but they get processed anyway (notification, etc) ?
            console.log(ev[0].channel)
            if(ev[0].channel === "DISCORD_NEW_TAB"){
                chromeTabs.addTab({
                    title: 'Lightcord',
                    favicon: faviconURL
                })
                return
            }
            ipc.send(ev[0].channel.replace("DISCORD_", ""), ev.slice(1))
        })
        webview.addEventListener('page-title-updated', () => {
            let el = Array.from(webviews.entries()).find(e => e[1] === webview)[0]
            if(!el)return
            chromeTabs.updateTab(el, {
                favicon: faviconURL,
                title: webview.getTitle()
            })
        })
        webviews.set(detail.tabEl, webview)
        document.querySelector(".documentFull").appendChild(webview)
        let r
        webview.ready = new Promise(resolve => (r = resolve))
        webview.addEventListener("dom-ready", () => {
            r()
            webview.send("DISCORD_IS_TAB")
        })
        webview.addEventListener("will-navigate", (e) => {
            e.preventDefault()
            console.log(e, e.url)
        })
    })
    tabs.addEventListener('tabRemove', ({detail}) => {
        let webview = webviews.get(detail.tabEl)
        if(!webview)return
        webview.remove()
        webviews.delete(detail.tabEl)
        if(document.querySelector(".chrome-tabs-content").childNodes.length === 0){
            window.close()
        }
    })

    window.addEventListener('keydown', (event) => {
        if(event.ctrlKey){
            if(event.key === 't'){
                chromeTabs.addTab({
                  title: 'Lightcord',
                  favicon: faviconURL
                })
            }else if(event.key === "w"){
                let active = document.querySelector("div.chrome-tab[active]")
                if(!active)return
                chromeTabs.removeTab(active)
            }
        }
    })
    setImmediate(() => {
        chromeTabs.addTab({
          title: 'Lightcord Loading...',
          favicon: faviconURL
        })
    })
}

require.extensions[".css"] = (m, filename) => {
    let content = fs.readFileSync(filename, "binary")
    let style = document.createElement("style")
    style.id = btoa(filename)
    style.innerHTML = content
    document.head.appendChild(style)
    m.exports = {
        id: style.id,
        remove(){
            return style.remove()
        }
    }
    return m.exports
}

const faviconURL = pathToFileURL(join(__dirname, "../images/discord.png"))