'use strict';

// App preload script, used to provide a replacement native API now that
// we turned off node integration.

process.on("uncaughtException", console.error)

const ipcRenderer = require('./discord_native/ipc');
const electron = require("electron")
electron.remote.getCurrentWindow().setBackgroundColor("#2f3136")

const TRACK_ANALYTICS_EVENT = 'TRACK_ANALYTICS_EVENT';
const TRACK_ANALYTICS_EVENT_COMMIT = 'TRACK_ANALYTICS_EVENT_COMMIT';

// We don't care about logging these anymore.
// just commit so that they don't back up on disk.
ipcRenderer.on(TRACK_ANALYTICS_EVENT, e => {
  e.sender.send(TRACK_ANALYTICS_EVENT_COMMIT);
});

global.isTab = false
ipcRenderer.on("IS_TAB", (ev) => {
  global.isTab = true
})


const DiscordNative = {
  isRenderer: process.type === 'renderer',

  nativeModules: require('./discord_native/renderer/nativeModules'),
  process: require('./discord_native/renderer/process'),
  os: require('./discord_native/renderer/os'),
  app: require('./discord_native/renderer/app'),
  clipboard: require('./discord_native/renderer/clipboard'),
  ipc: require('./discord_native/renderer/ipc'),
  gpuSettings: require('./discord_native/renderer/gpuSettings'),
  window: require('./discord_native/renderer/window'),
  powerMonitor: require('./discord_native/renderer/powerMonitor'),
  spellCheck: require('./discord_native/renderer/spellCheck'),
  crashReporter: require('./discord_native/renderer/crashReporter'),
  desktopCapture: require('./discord_native/renderer/desktopCapture'),
  fileManager: require('./discord_native/renderer/fileManager'),
  processUtils: require('./discord_native/renderer/processUtils'),
  powerSaveBlocker: require('./discord_native/renderer/powerSaveBlocker'),
  http: require('./discord_native/renderer/http'),
  accessibility: require('./discord_native/renderer/accessibility'),
  features: require('./discord_native/renderer/features'),
  settings: require('./discord_native/renderer/settings')
};

// TODO: remove these once web no longer uses them
DiscordNative.remoteApp = DiscordNative.app;
DiscordNative.remotePowerMonitor = DiscordNative.powerMonitor;

const BetterDiscord = require("./BetterDiscord")

process.once('loaded', () => {
  // Implementing DiscordNative
  global.DiscordNative = DiscordNative;

  // Since nodeIntegration has been disable
  // We're adding node propertys on window so it's easier
  // to write code / debug
  window.global = window
  global.Buffer = Buffer
  global.require = require

  global.setImmediate = function(callback, ...args){
    return setTimeout(callback, 0, ...args);
  };
  global.clearImmediate = clearTimeout;

  const buildInfo = electron.remote.getGlobal("BuildInfo")
  console.log("%c%s", "color: #3767ad;font-size:25px", 'Lightcord Client\nhttps://github.com/Lightcord/Lightcord');
  console.log("%c%s", "font-size:15px", `Version: ${buildInfo.version}\nCommit: ${buildInfo.commit || "Unknown"}`)


  let ftime = Date.now()
  BetterDiscord.init()
  BetterDiscord.events.on("debug", BetterDiscord.logger.log.bind(BetterDiscord.logger))
  BetterDiscord.events.on("ready", () => {
    BetterDiscord.logger.log("BetterDiscord Loaded. took: "+(Date.now() - ftime)+"ms.")

    try{
      // better disabling Discord's tracking request, no error in console.
      BDModules.get(e => e.AnalyticsActionHandlers)[1].AnalyticsActionHandlers.handleTrack = () => {
        return false
      }
    }catch(e){}
    setTimeout(() => {
      electron.remote.getCurrentWindow().setBackgroundColor("#00000000")
    }, 500);
  })

  const webRequest = electron.remote.getCurrentWebContents().session.webRequest

  // disable Discord's tracking request, error in console
  webRequest.onBeforeRequest((details, callback) => {
    if(/api\/v\d\/science/g.test(details.url))return callback({cancel: true})
    return callback({})
  })
});