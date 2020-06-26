import {bbdChangelog, LCChanelog} from "../0globals";
import Utils from "./utils";
import BDV2 from "./v2";
import DOM from "./domtools";

import SideBar from "../ui/sidebar";
import History from "../ui/icons/history";
import TooltipWrap from "../ui/tooltipWrap";

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
        if(!!window.Lightcord.Settings.devMode)items.push({
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
                section: "HEADER",
                label: "Bandaged BD"
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