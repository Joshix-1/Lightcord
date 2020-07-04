export default class V2_SettingsPanel_Sidebar {

    constructor() {
        this.panels = {}
    }

    register(panel, component){
        this.panels[panel] = component
    }

    getComponent(panel){
        return this.panels[panel]
    }

    get items() {
        return [{
            text: "BetterDiscord Settings", 
            id: "core"
        }, {
            text: "Plugins", 
            id: "plugins"
        }, {
            text: "Themes", 
            id: "themes"
        }, {
            text: "Custom CSS", 
            id: "customcss"
        }];
    }

    get LCitems(){
        let items = [
            {
                text: "Lightcord Settings",
                id: "lightcord"
            }, {
                text: "RichPresence", 
                id: "status"
            }, {
                text: "Account Info",
                id: "accountinfo"
            }
        ]
        if(window.Lightcord.Settings.devMode)items.push({
            text: "Api Components Preview",
            id: "lcapipreview"
        })
        return items
    }

    render() {
        return [
            {
                section: "HEADER",
                label: "Lightcord"
            },
            ...this.LCitems.map(e => {
                return {
                    section: e.id,
                    label: e.text,
                    element: this.getComponent(e.id)
                }
            }),
            {
                section: "DIVIDER"
            },
            {
                section: "CUSTOM",
                element: this.getComponent("BDChangelogTitle")
            },
            ...this.items.map(e => {
                return {
                    section: e.id,
                    label: e.text,
                    element: this.getComponent(e.id)
                }
            }),
            {
                section: "DIVIDER"
            }
        ]
    }
}

/**
 * No need to export settingsPanelSidebar on window
 */