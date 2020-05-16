import {settingsCookie} from "../0globals";
import BDV2 from "./v2";
import Utils from "./utils";

export default new class CustomRichPresence {
    constructor(){
        this.enabled = false
    }
    enable() {
        if(this.enabled)return
        this.enabled = true
        console.log("Enabling custom RichPresence")
    }

    disable() {
        if(!this.enabled)return
        this.enabled = false
        console.log("Disabling custom RichPresence")
    }
};