import {settings, settingsCookie, settingsRPC} from "../0globals";
import DataStore from "./dataStore";
import V2_SettingsPanel_Sidebar from "./settingsPanelSidebar";
import Utils from "./utils";
import BDV2 from "./v2";
import ContentManager from "./contentManager";
import coloredText from "./coloredText";
import tfHour from "./24hour";
import DOM from "./domtools";

import publicServersModule from "./publicServers";
import voiceMode from "./voiceMode";
import ClassNormalizer from "./classNormalizer";
import dMode from "./devMode";

import SectionedSettingsPanel from "../ui/sectionedSettingsPanel";
import CssEditor from "../ui/cssEditor";
import CardList from "../ui/addonlist";
import V2C_PresenceSettings from "../ui/presenceSettings";
import CustomRichPresence from "./CustomRichPresence";
import V2C_AccountInfos from "../ui/AccountInfos";
import { remote } from "electron";
import AntiAdDM from "./AntiAdDM";
import blurPrivate from "./blurPrivate";
import disableTyping from "./disableTyping";
import ApiPreview from "../ui/ApiPreview";
import Switch from "../ui/switch";
import MarginTop from "../ui/margintop";
import webpackModules from "./webpackModules";
import tooltipWrap from "../ui/tooltipWrap";
import History from "../ui/icons/history";

class BDSidebarHeader extends React.PureComponent {
    render(){
        let sidebarComponents = webpackModules.find(e => e.Separator && e.Header && e.Item)

        const changelogButton = React.createElement(tooltipWrap, {color: "black", side: "top", text: "Changelog"}, 
            React.createElement("span", {style: {float: "right", cursor: "pointer"}, className: "bd-changelog-button", onClick: () => {Utils.showChangelogModal(bbdChangelog);}},
                React.createElement(History, {className: "bd-icon", size: "16px"})
            )
        );
        let rendered = new sidebarComponents.Header({
            children: React.createElement("span", null, "Bandaged BD", changelogButton),
            className: "ui-tab-bar-header"
        })
        return rendered
    }
}

export default new class V2_SettingsPanel {

    constructor() {
        this.onChange = this.onChange.bind(this);
        this.updateSettings = this.updateSettings.bind(this);
        this.sidebar = new V2_SettingsPanel_Sidebar();

        this.registerComponents()
    }

    registerComponents(){
        /** Lightcord */
        this.sidebar.register("lightcord", makeComponent(this.lightcordComponent.bind(this)))
        this.sidebar.register("status", makeComponent(this.PresenceComponent.bind(this)))
        this.sidebar.register("accountinfo", makeComponent(this.AccountInfosComponent.bind(this)))
        this.sidebar.register("lcapipreview", makeComponent(this.ApiPreviewComponent.bind(this)))

        /* Bandaged BD */
        this.sidebar.register("BDChangelogTitle", makeComponent(() => {
            return new BDSidebarHeader().render()
        }))
        this.sidebar.register("core", makeComponent(this.coreComponent.bind(this)))
        this.sidebar.register("customcss", makeComponent(this.customCssComponent.bind(this)))
        this.sidebar.register("plugins", makeComponent(this.renderAddonPane("plugins")))
        this.sidebar.register("themes", makeComponent(this.renderAddonPane("themes")))
    }

    get root() {
        const _root = DOM.query("#bd-settingspane-container");
        if (!_root) {
            if (!this.injectRoot()) return null;
            return this.root;
        }
        return _root;
    }

    injectRoot() {
        let [
            classNameLayer,
            classSidebar
        ] = [
            BDModules.get(e => e.layer && e.animating)[0].layer.split(" ")[0],
            BDModules.get(e => e.standardSidebarView)[0]
        ]
        const sidebar = DOM.query("."+classNameLayer+" ."+classSidebar.standardSidebarView.split(" ")[0]+", ."+classNameLayer+" .ui-standard-sidebar-view");
        if (!sidebar) return false;
        const root = DOM.createElement(`<div id="bd-settingspane-container" class="${classSidebar.contentRegion} content-region">`);
        sidebar.append(root);

        Utils.onRemoved(root, () => {
            BDV2.reactDom.unmountComponentAtNode(root);
        });
        return true;
    }

    get coreSettings() {
        const settings = this.getSettings("core");
        const categories = [...new Set(settings.map(s => s.category))];
        const sections = categories.map(c => {return {title: c, settings: settings.filter(s => s.category == c)};});
        return sections;
    }

    get lightcordSettings() {
        const settings = this.getSettings("lightcord");
        const categories = [...new Set(settings.map(s => s.category))];
        const sections = categories.map(c => {return {title: c, settings: settings.filter(s => s.category == c)};});
        return sections;
    }

    get PresenceSettings() {
        return this.getSettings("status")
    }

    get MsgLogSettings() {
        return this.getSettings("msglog")
    }

    getSettings(category) {
        return Object.keys(settings).reduce((arr, key) => {
            const setting = settings[key];
            if (setting.cat === category && setting.implemented && !setting.hidden) {
                setting.text = key;
                arr.push(setting);
            }
            return arr;
        }, []);
    }

    onClick() {}

    onChange(id, checked, sidebar) {
        this.updateSettings(id, checked, sidebar);
    }

    updateSettings(id, enabled, sidebar) {
        if(!["lightcord-8"].includes(id))settingsCookie[id] = enabled;

        if (id == "bda-gs-2") {
            if (enabled) DOM.addClass(document.body, "bd-minimal");
            else DOM.removeClass(document.body, "bd-minimal");
        }

        if (id == "bda-gs-3") {
            if (enabled) DOM.addClass(document.body, "bd-minimal-chan");
            else DOM.removeClass(document.body, "bd-minimal-chan");
        }

        if (id == "bda-gs-1") {
            if (enabled) publicServersModule.addButton();
            else publicServersModule.removeButton();
        }

        if (id == "bda-gs-4") {
            if (enabled) voiceMode.start();
            else voiceMode.stop();
        }

        if (id == "bda-gs-5") {
            if (enabled) DOM.addClass(DOM.query("#app-mount"), "bda-dark");
            else DOM.removeClass(DOM.query("#app-mount"), "bda-dark");
        }

        if (enabled && id == "bda-gs-6") tfHour.inject24Hour();

        if (id == "bda-gs-7") {
            if (enabled) coloredText.injectColoredText();
            else coloredText.removeColoredText();
        }

        if (id == "fork-ps-4") {
            if (enabled) ClassNormalizer.start();
            else ClassNormalizer.stop();
        }

        if (id == "fork-ps-5") {
            if (enabled) {
                ContentManager.watchContent("plugin");
                ContentManager.watchContent("theme");
            }
            else {
                ContentManager.unwatchContent("plugin");
                ContentManager.unwatchContent("theme");
            }
        }

        if (id == "fork-wp-1") {
            Utils.setWindowPreference("transparent", enabled);
            if (enabled) Utils.setWindowPreference("backgroundColor", null);
            else Utils.setWindowPreference("backgroundColor", "#2f3136");
        }


        if (id == "bda-gs-8") {
            if (enabled) dMode.startDebugListener();
            else dMode.stopDebugListener();
        }

        if (id == "fork-dm-1") {
            if (enabled) dMode.startCopySelector();
            else dMode.stopCopySelector();
        }

        /*if (id === "reactDevTools") {
            if (enabled) reactDevTools.start();
            else reactDevTools.stop();
        }*/
        if (id === "lightcord-1") {
            if (enabled) window.Lightcord.Settings.devMode = true
            else window.Lightcord.Settings.devMode = false
            sidebar.forceUpdate()
        }
        if (id === "lightcord-2") {
            if (enabled) window.Lightcord.Settings.callRingingBeat = true
            else window.Lightcord.Settings.callRingingBeat = false
        }
        if (id === "lightcord-presence-1") {
            if (enabled) {
                CustomRichPresence.enable()
                const settingsStore = BDModules.get(e => e.default && typeof e.default === "object" && "showCurrentGame" in e.default)[0]
                if(settingsStore && !settingsStore.default.showCurrentGame){
                    BDModules.get(e => e.default && e.default.updateRemoteSettings)[0].default.updateRemoteSettings({
                        showCurrentGame: true
                    })
                }
            }
            else CustomRichPresence.disable()
        }
        if (id === "lightcord-3") {
            if (enabled) remote.getCurrentWindow().setAlwaysOnTop(true)
            else remote.getCurrentWindow().setAlwaysOnTop(false)
        }
        if (id === "lightcord-4") {
            if(enabled){
                AntiAdDM.enable()
            }else{
                AntiAdDM.disable()
            }
        }
        if (id === "lightcord-6") {
            if(enabled){
                blurPrivate.enable()
            }else{
                blurPrivate.disable()
            }
        }
        if (id === "lightcord-7") {
            if(enabled){
                disableTyping.enable()
            }else{
                disableTyping.disable()
            }
        }
        if (id === "lightcord-8"){
            let appSettings = remote.getGlobal("appSettings")
            appSettings.set("isTabs", enabled)
            appSettings.save()
            remote.app.relaunch()
            remote.app.exit()
        }

        this.saveSettings();
    }

    async initializeSettings() {
        //if (settingsCookie.reactDevTools) reactDevTools.start();
        if (settingsCookie["bda-gs-2"]) DOM.addClass(document.body, "bd-minimal");
        if (settingsCookie["bda-gs-3"]) DOM.addClass(document.body, "bd-minimal-chan");
        if (settingsCookie["bda-gs-1"]) publicServersModule.addButton();
        if (settingsCookie["bda-gs-4"]) voiceMode.start();
        if (settingsCookie["bda-gs-5"]) DOM.addClass(DOM.query("#app-mount"), "bda-dark");
        if (settingsCookie["bda-gs-6"]) tfHour.inject24Hour();
        if (settingsCookie["bda-gs-7"]) coloredText.injectColoredText();
        if (settingsCookie["fork-ps-4"]) ClassNormalizer.start();
        if (settingsCookie["lightcord-1"]) window.Lightcord.Settings.devMode = true
        if (settingsCookie["lightcord-2"]) window.Lightcord.Settings.callRingingBeat = true
        if (settingsCookie["lightcord-presence-1"]) CustomRichPresence.enable()
        if (settingsCookie["lightcord-3"]) remote.getCurrentWindow().setAlwaysOnTop(true)
        if (settingsCookie["lightcord-4"]) AntiAdDM.enable()
        if (settingsCookie["lightcord-6"]) blurPrivate.enable()
        if (settingsCookie["lightcord-7"]) disableTyping.enable()

        if (settingsCookie["fork-ps-5"]) {
            ContentManager.watchContent("plugin");
            ContentManager.watchContent("theme");
        }

        if (settingsCookie["bda-gs-8"]) dMode.startDebugListener();
        if (settingsCookie["fork-dm-1"]) dMode.startCopySelector();

        this.saveSettings();
    }

    saveSettings() {
        DataStore.setSettingGroup("settings", settingsCookie);
        DataStore.setSettingGroup("rpc", settingsRPC);
    }

    loadSettings() {
        Object.assign(settingsCookie, DataStore.getSettingGroup("settings"));
        Object.assign(settingsRPC, DataStore.getSettingGroup("rpc"));
    }

    renderSidebar(sidebar) {
        return this.sidebar.render(sidebar);
    }

    coreComponent() {
        return BDV2.react.createElement(SectionedSettingsPanel, {key: "cspanel", onChange: this.onChange, sections: this.coreSettings})
    }

    lightcordComponent(sidebar) {
        let appSettings = remote.getGlobal("appSettings")
        return [
            this.lightcordSettings.map((section, i) => {
                return [
                    (i === 0 ? null : BDV2.react.createElement(MarginTop)),
                    BDV2.react.createElement("h2", {className: "ui-form-title h2 margin-reset margin-bottom-20"}, section.title),
                    section.settings.map(setting => {
                        let isChecked = settingsCookie[setting.id]
                        if(setting.id === "lightcord-8")isChecked = appSettings.get("isTabs", false);
                        let returnValue = BDV2.react.createElement(Switch, {id: setting.id, key: setting.id, data: setting, checked: isChecked, onChange: (id, checked) => {
                            this.onChange(id, checked, sidebar);
                        }})
                        if(setting.id !== "lightcord-8" || !isChecked)return returnValue
                        return [
                            returnValue,
                            React.createElement(Lightcord.Api.Components.inputs.Button, {
                                color: "green",
                                look: "outlined",
                                size: "small",
                                hoverColor: "brand",
                                onClick: () => {
                                    DiscordNative.ipc.send("NEW_TAB")
                                },
                                wrapper: false,
                                disabled: false
                            }, "Open a new Tab")
                        ]
                    })
                ]
            }), 
            BDV2.react.createElement(window.Lightcord.Api.Components.inputs.Button, {
                color: "yellow",
                look: "ghost",
                size: "medium",
                hoverColor: "red",
                onClick(){
                    console.log("Should relaunch")
                    remote.app.relaunch({
                        args: remote.process.argv.slice(1).concat(["--disable-betterdiscord"])
                    })
                    remote.app.quit()
                },
                wrapper: true
            }, "Relaunch without BetterDiscord")
        ]
    }

    PresenceComponent() {
        return BDV2.react.createElement(V2C_PresenceSettings, {
            key: "lppannel",
            onChange: this.onChange, 
            settings: this.PresenceSettings
        })
    }

    AccountInfosComponent() {
        return BDV2.react.createElement(V2C_AccountInfos, {
            key: "lapannel"
        })
    }

    ApiPreviewComponent() {
        return BDV2.react.createElement(ApiPreview, {
            key: "lapipannel"
        })
    }

    customCssComponent() {
        return BDV2.react.createElement(CssEditor, {key: "csseditor"})
    }

    renderAddonPane(type) {
        // I know this shouldn't be here, but when it isn't,
        // React refuses to change the button when going
        // between plugins and themes page... something
        // to debug later.
        class ContentList extends BDV2.react.Component {
            constructor(props) {
                super(props);
                this.prefix = this.props.type.replace("s", "");
            }
        
            onChange() {
                this.props.onChange(this.props.type);
            }
        
            render() {return this.props.children;}
        }
        const originalRender = ContentList.prototype.render;
        Object.defineProperty(ContentList.prototype, "render", {
            enumerable: false,
            configurable: false,
            set: function() {console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins");},
            get: () => originalRender
        });
        return function(){
            return BDV2.react.createElement(ContentList, {type}, BDV2.react.createElement(CardList, {type}))
        }
    }
};

/**
 * No need to export settingsPanel on window
 */

function makeComponent(children){
    class SettingComponent extends React.Component {
        render(){
            return children(sidebar)
        }
    }
    let sidebar
    return (s) => {
        sidebar = s
        return SettingComponent
    }
}