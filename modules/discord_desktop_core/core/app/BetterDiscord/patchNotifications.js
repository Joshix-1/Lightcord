const ipcRenderer = require("../discord_native/ipc")

if(process.platform === "win32"){
    const originalNotification = window.Notification

    ipcRenderer.send("NOTIFICATIONS_CLEAR")

    const notifications = {}
    ipcRenderer.on("NOTIFICATION_CLICK", (e, id) => {
        var notification = notifications[id];
        if(notification){
            notification.onclick()
            notification.close()
        }
    })
    window.Notification = class LightcordNotification {
        constructor(title, data){
            this.id = LightcordNotification._id++
            this.onshow = function() {}
            this.onclick = function() {}
            this.onclose = function() {}
            this.title = title
            this.body = data.body
            this.icon = data.icon
            setTimeout(() => {
                return this.onshow()
            }, 0)
            notifications[this.id] = this
            ipcRenderer.send("NOTIFICATION_SHOW", {
                id: this.id,
                title: this.title,
                body: this.body,
                icon: this.icon,
                theme: settingStore ? settingStore.default.theme : "dark"
            })
        }

        static _id = 0

        static requestPermission(callback){
            callback()
        }

        static permission = "granted"
        
        close(){
            if(!notifications[this.id])return

            delete notifications[this.id]
            ipcRenderer.send("NOTIFICATION_CLOSE", this.id)
            this.onclose()
        }
    }
}

let settingStore
ensureExported((e => e.default && e.default.theme))
.then(themeStore => {
    settingStore = themeStore
    ipcRenderer.send("UPDATE_THEME", themeStore.default.theme)
}).catch(console.error)