'use strict';

// App preload script, used to provide a replacement native API now that
// we turned off node integration.

process.on("uncaughtException", console.error)

const ipcRenderer = require('./discord_native/ipc');
const electron = require("electron")

const TRACK_ANALYTICS_EVENT = 'TRACK_ANALYTICS_EVENT';
const TRACK_ANALYTICS_EVENT_COMMIT = 'TRACK_ANALYTICS_EVENT_COMMIT';

// We don't care about logging these anymore.
// just commit so that they don't back up on disk.
ipcRenderer.on(TRACK_ANALYTICS_EVENT, e => {
  e.sender.send(TRACK_ANALYTICS_EVENT_COMMIT);
});

const DiscordNative = {
  isRenderer: process.type === 'renderer',

  nativeModules: require('./discord_native/nativeModules'),
  globals: require('./discord_native/globals'),
  process: require('./discord_native/process'),
  os: require('./discord_native/os'),
  remoteApp: require('./discord_native/remoteApp'),
  clipboard: require('./discord_native/clipboard'),
  ipc: ipcRenderer,
  gpuSettings: require('./discord_native/gpuSettings'),
  window: require('./discord_native/window'),
  remotePowerMonitor: require('./discord_native/remotePowerMonitor'),
  spellCheck: require('./discord_native/spellCheck'),
  crashReporter: require('./discord_native/crashReporter'),
  desktopCapture: require('./discord_native/desktopCapture'),
  fileManager: require('./discord_native/fileManager'),
  processUtils: require('./discord_native/processUtils'),
  powerSaveBlocker: require('./discord_native/powerSaveBlocker'),
  http: require('./discord_native/http'),
  accessibility: require('./discord_native/accessibility'),
  app: require("./discord_native/renderer/app")
};

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
      electron.remote.getCurrentWindow().center()
    }, 500);
  })

  const webRequest = electron.remote.getCurrentWebContents().session.webRequest

  // disable Discord's tracking request, error in console
  webRequest.onBeforeRequest((details, callback) => {
    if(/api\/v\d\/science/g.test(details.url))return callback({cancel: true})
    return callback({})
  })
});