// var settingsPanel, voiceMode, pluginModule, themeModule, dMode, publicServersModule, mainCore, BDV2;
export const minimumDiscordVersion = "0.0.306";
export const currentDiscordVersion = (window.DiscordNative && window.DiscordNative.remoteApp && window.DiscordNative.remoteApp.getVersion && window.DiscordNative.remoteApp.getVersion()) || "0.0.306";
export const minSupportedVersion = "0.3.0";
export const bbdVersion = "0.3.4";
export const bbdChangelog = {
    description: "LightCord Edition.",
    changes: [
        {
            title: "What's New?",
            items: [
                "**LightCord** is now using BandagedBD. That means all plugins you were using can be used too !",
                "**Window Transparency** changes were made to more compatible with external window managers and addons like Glasscord.",
                "Initialization sequence has once again been changed slightly to hopefully improve loading times.",
                "We removed emotes. That's sad for people who were actually using it, but it was leading to problems like this https://github.com/rauenzi/BetterDiscordApp/issues/348."
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
    "Show Toasts":                {id: "fork-ps-2", info: "Shows a small notification for important information", implemented: true,  hidden: false, cat: "core", category: "content manager"},
    "Scroll To Settings":         {id: "fork-ps-3", info: "Auto-scrolls to a plugin's settings when the button is clicked (only if out of view)", implemented: true,  hidden: false, cat: "core", category: "content manager"},
    "Automatic Loading":          {id: "fork-ps-5", info: "Automatically loads, reloads, and unloads plugins and themes", implemented: true,  hidden: false, cat: "core", category: "content manager"},

    /* Developer */
    "Developer Mode":         	  {id: "bda-gs-8", info: "Developer Mode Toggle", implemented: true, hidden: false, cat: "core", category: "developer settings"},
    "Copy Selector":			  {id: "fork-dm-1", info: "Adds a \"Copy Selector\" option to context menus when developer mode is active", implemented: true, hidden: false, cat: "core", category: "developer settings"},
    "React DevTools":			  {id: "reactDevTools", info: "Adds react developer tools to the devtools. Must be installed in Google Chrome on your pc.", implemented: true,  hidden: true, cat: "core", category: "developer settings"},

    /** LightCord */
    "Disable BetterDiscord":      {id: "bd-disable", info: "Disable Betterdiscord (plugins, themes, etc).", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Calling Ring Beat":          {id: "lightcord-2", info: "Enable Discord's special calling beat.", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Developer Mode":             {id: "lightcord-1", info: "Enable Discord's Internal Developer Options. This allow the \"Experiments\" tab and the \"Developer Options\" tab. (must close and reopen settings)", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},
    
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
    "fork-es-2": false,
    "fork-es-3": true,
    "fork-wp-1": false,
    "fork-wp-2": false,
    "fork-beta": true,
    "reactDevTools": false,
    "lightcord-1": false,
    "lightcord-2": true,
    "lightcord-presence-1": false
};


export const settingsCookie = {};

export const settingsRPC = {};
export const defaultRPC = {
    name: "Lightcord",
    application_id: "711416957718757418",
    type: 0,
    details: "Browsing Discord",
    state: "Lightcord",
    "timestamps.start": Date.now()
};

export const bdpluginErrors = [];
export const bdthemeErrors = []; // define for backwards compatibility

export const bdConfig = Object.create(BetterDiscordConfig);

export const bdthemes = {};
export const bdplugins = {};

export const pluginCookie = {};
export const themeCookie = {};

