import { remote } from "electron"
import BDV2 from "./modules/v2";
import WebpackModules from "./modules/webpackModules";

export const minimumDiscordVersion = "0.0.306";
export const currentDiscordVersion = (window.DiscordNative && window.DiscordNative.remoteApp && window.DiscordNative.remoteApp.getVersion && window.DiscordNative.remoteApp.getVersion()) || "0.0.306";
export const minSupportedVersion = "0.3.0";
export const bbdVersion = "0.3.4";
export const LCChanelog = {
    description: "Lightcord's changelog",
    changes: [
        {
            title: "What's New?",
            items: [
                "Lightcord is now available !",
                "We removed emotes. That's sad for people who were actually using it, but it was leading to more loading time and some basic words were emote."
            ]
        }
    ],
    image: "https://i.imgur.com/sfNhqwP.png",
    title: "Lightcord",
    subtitle: "v"+remote.getGlobal("BuildInfo").version,
    footer: (function(){
        const TextElement = WebpackModules.findByDisplayName("Text");
        const ModalStack = WebpackModules.findByProps("push", "update", "pop", "popWithKey");
        if(!TextElement || !ModalStack)return null

        const Anchor = WebpackModules.find(m => m.displayName == "Anchor");
        const AnchorClasses = WebpackModules.findByProps("anchorUnderlineOnHover") || {anchor: "anchor-3Z-8Bb", anchorUnderlineOnHover: "anchorUnderlineOnHover-2ESHQB"};
        const joinSupportServer = (click) => {
            click.preventDefault();
            click.stopPropagation();
            ModalStack.pop();
            BDV2.joinLC();
        };
        const supportLink = Anchor ? BDV2.React.createElement(Anchor, {onClick: joinSupportServer}, "Join our Discord Server.") : BDV2.React.createElement("a", {className: `${AnchorClasses.anchor} ${AnchorClasses.anchorUnderlineOnHover}`, onClick: joinSupportServer}, "Join our Discord Server.");
        return BDV2.React.createElement(TextElement, {size: TextElement.Sizes.SMALL, color: TextElement.Colors.STANDARD}, "Need support? ", supportLink);
    })()
}
export const bbdChangelog = {
    description: "BBD's changelog.",
    changes: [
        {
            title: "What's New?",
            items: [
                "**Lightcord** is now using BandagedBD. That means all plugins you were using can be used too !",
                "**Window Transparency** changes were made to more compatible with external window managers and addons like Glasscord.",
                "Initialization sequence has once again been changed slightly to hopefully improve loading times."
            ]
        },
        {
            title: "Bug Fixes",
            type: "fixed",
            items: [
                "Some fixes related to showing modals in the `BdApi`."
            ]
        }
    ]
};

export const settings = {
    "Custom css live update":     {id: "bda-css-0", info: "",                                                  implemented: true,  hidden: true,  cat: "core"},
    "Custom css auto udpate":     {id: "bda-css-1", info: "",                                                  implemented: true,  hidden: true,  cat: "core"},
    "BetterDiscord Blue":         {id: "bda-gs-b",  info: "Replace Discord blue with BD Blue",                 implemented: false,  hidden: false, cat: "core"},

    /* Core */
    /* ====== */
    "Public Servers":             {id: "bda-gs-1",  info: "Display public servers button",                     implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Minimal Mode":               {id: "bda-gs-2",  info: "Hide elements and reduce the size of elements.",    implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Voice Mode":                 {id: "bda-gs-4",  info: "Only show voice chat",                              implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Hide Channels":              {id: "bda-gs-3",  info: "Hide channels in minimal mode",                     implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Dark Mode":                  {id: "bda-gs-5",  info: "Make certain elements dark by default(wip)",        implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Voice Disconnect":           {id: "bda-dc-0",  info: "Disconnect from voice server when closing Discord", implemented: true,  hidden: false, cat: "core", category: "modules"},
    "24 Hour Timestamps":         {id: "bda-gs-6",  info: "Replace 12hr timestamps with proper ones",          implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Colored Text":               {id: "bda-gs-7",  info: "Make text color the same as role color",            implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Normalize Classes":          {id: "fork-ps-4", info: "Adds stable classes to elements to help themes. (e.g. adds .da-channels to .channels-Ie2l6A)", implemented: true,  hidden: false, cat: "core", category: "modules"},

    /* Content */
    "Content Error Modal":        {id: "fork-ps-1", info: "Shows a modal with plugin/theme errors", implemented: true,  hidden: false, cat: "core", category: "content manager"},
    "Scan Plugins":               {id: "fork-ps-6", info: "Scan plugins for any threat that can be hidden inside.", implemented: true,  hidden: false, cat: "core", category: "content manager"},
    "Show Toasts":                {id: "fork-ps-2", info: "Shows a small notification for important information", implemented: true,  hidden: false, cat: "core", category: "content manager"},
    "Scroll To Settings":         {id: "fork-ps-3", info: "Auto-scrolls to a plugin's settings when the button is clicked (only if out of view)", implemented: true,  hidden: false, cat: "core", category: "content manager"},
    "Automatic Loading":          {id: "fork-ps-5", info: "Automatically loads, reloads, and unloads plugins and themes", implemented: true,  hidden: false, cat: "core", category: "content manager"},

    /* Developer */
    "Developer Mode":         	  {id: "bda-gs-8", info: "Developer Mode Toggle", implemented: true, hidden: false, cat: "core", category: "developer settings"},
    "Copy Selector":			  {id: "fork-dm-1", info: "Adds a \"Copy Selector\" option to context menus when developer mode is active", implemented: true, hidden: false, cat: "core", category: "developer settings"},
    "React DevTools":			  {id: "reactDevTools", info: "Adds react developer tools to the devtools. Must be installed in Google Chrome on your pc.", implemented: true,  hidden: true, cat: "core", category: "developer settings"},

    /** Lightcord */
    "Disable BetterDiscord":      {id: "bd-disable",  info: "Disable Betterdiscord (plugins, themes, etc) (Not implemented).", implemented: false, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Blur Personnal Informations":{id: "lightcord-6", info: "Blur sensitive informations like email, payment infos and more.", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Calling Ring Beat":          {id: "lightcord-2", info: "Enable Discord's special calling beat.", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Developer Options":          {id: "lightcord-1", info: "Enable Discord's & Lightcord's Internal Developer Options. This allow the \"Experiments\" tab, the \"Developer Options\" tab and the \"Api Components\" tab.", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Ad Block":                   {id: "lightcord-4", info: "Block any BOT that dms you with an invite link. Even in an embed.", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Enable Lightcord Servers":   {id: "lightcord-5", info: "Enable Lightcord's servers. Disabling this will disable custom badges.", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Disable typing":             {id: "lightcord-7", info: "Don't let other see you're typing.", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Lightcord Tabs":             {id: "lightcord-8", info: "Allows you to launch multiple instances of Lightcord in the same window (EXPERIMENTAL).", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},

    /** Lightcord Window */
    "Always-on-Top":              {id: "lightcord-3", info: "Enable window's Always-on-Top mode, where Lightcord stays on top of other applications.", implemented: true, hidden: false, cat: "lightcord", category: "Window"},
    
    /** RichPresence */
    "Enable":                     {id: "lightcord-presence-1", info: "Enable RichPresence below.", implemented: true, hidden: false, cat: "status"}
};

export const defaultCookie = {
    "bda-gs-1": true,
    "bda-gs-2": false,
    "bda-gs-3": false,
    "bda-gs-4": false,
    "bda-gs-5": true,
    "bda-gs-6": false,
    "bda-gs-7": false,
    "bda-gs-8": true,
    "bda-es-0": true,
    "bda-es-1": true,
    "bda-es-2": true,
    "bda-es-4": false,
    "bda-es-6": true,
    "bda-es-7": true,
    "bda-gs-b": false,
    "bda-es-8": true,
    "bda-dc-0": false,
    "bda-css-0": false,
    "bda-css-1": false,
    "bda-es-9": true,
    "fork-dm-1": false,
    "fork-ps-1": true,
    "fork-ps-2": true,
    "fork-ps-3": true,
    "fork-ps-4": true,
    "fork-ps-5": true,
    "fork-ps-6": true,
    "fork-es-2": false,
    "fork-es-3": true,
    "fork-wp-1": false,
    "fork-wp-2": false,
    "fork-beta": true,
    "reactDevTools": false,
    "lightcord-1": false,
    "lightcord-2": true,
    "lightcord-presence-1": false,
    "lightcord-3": false,
    "lightcord-4": false,
    "lightcord-5": true,
    "lightcord-6": true,
    "lightcord-7": false,
    "lightcord-8": false,
};


export const settingsCookie = {};

export const settingsRPC = {};
export const defaultRPC = {
    "name": "Lightcord",
    "application_id": "711416957718757418",
    "state": "Lightcord Client",
    "details": "Browsing Discord",
    "timestamps.start": Date.now(),
    "assets.small": null,
    "assets.large": "712323821037682791"
}

export const bdpluginErrors = [];
export const bdthemeErrors = []; // define for backwards compatibility

export const bdConfig = Object.create(BetterDiscordConfig);

export const bdthemes = {};
export const bdplugins = {};

export const pluginCookie = {};
export const themeCookie = {};