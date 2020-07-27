const electron = require("electron")
const { useShim } = require("./patchNotifications");
const appSettings = electron.remote.getGlobal("appSettings")

module.exports = {
    NotificationsUseShim: (value) => {
        if(![true, false].includes(value))return
        appSettings.set("DEFAULT_NOTIFICATIONS", !value)
        appSettings.save()
        useShim(value)
    }
}