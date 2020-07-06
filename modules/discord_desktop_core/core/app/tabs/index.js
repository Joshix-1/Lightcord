const fs = require("fs")
const { join } = require("path")
const { pathToFileURL } = require("url")
const { remote } = require("electron")

let webviews = new Map()
window.webviews = webviews

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
        console.log('Tab added', detail.tabEl)
        detail.tabEl.querySelector(".chrome-tab-title").innerText = "Lightcord Loading..."
        let webview = document.createElement("webview")
        webview.src = "https://discord.com/app"
        webview.classList.add("discord-webview")
        webview.classList.add("webview-active")
        webview.setAttribute("preload", pathToFileURL(join(__dirname, "../mainScreenPreload.js")))
        webview.shadowRoot.childNodes.item(1).style.height = "100%"
        webviews.set(detail.tabEl, webview)
        document.querySelector(".documentFull").appendChild(webview)
        webview.addEventListener("dom-ready", () => {
            remote.webContents.fromId(webview.getWebContentsId()).openDevTools()
        })
    })
    tabs.addEventListener('tabRemove', ({detail}) => {
        console.log('Tab removed', detail.tabEl)
        let webview = webviews.get(detail.tabEl)
        if(!webview)return
        webview.remove()
        webviews.delete(detail.tabEl)
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

window.onbeforeunload = (ev) => {
    if(!webviews)return
    webviews.forEach(webview => {
        webview.src = 'about:blank'
    })
}