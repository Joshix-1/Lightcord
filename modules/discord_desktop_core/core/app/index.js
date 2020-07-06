'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startup = startup;
exports.handleSingleInstance = handleSingleInstance;
exports.setMainWindowVisible = setMainWindowVisible;
const { Menu, BrowserWindow } = require('electron');
const fetch = require("node-fetch").default

let mainScreen;
function startup(bootstrapModules) {
  // below modules are required and initted
  // in this order to prevent dependency conflicts
  // please don't tamper with the order unless you know what you're doing
  require('./bootstrapModules').init(bootstrapModules);

  require('./paths');
  require('./splashScreen');
  const moduleUpdater = require('./moduleUpdater');
  require('./autoStart');
  const buildInfo = require('./buildInfo');
  const appSettings = require('./appSettings');

  const Constants = require('./Constants');
  Constants.init(bootstrapModules.Constants);

  const appFeatures = require('./appFeatures');
  appFeatures.init();

  const GPUSettings = require('./GPUSettings');
  bootstrapModules.GPUSettings.replace(GPUSettings);

  const rootCertificates = require('./rootCertificates');
  rootCertificates.init();

  require('./discord_native/browser/accessibility');
  const app = require('./discord_native/browser/app');
  app.injectBuildInfo(buildInfo);
  app.injectModuleUpdater(moduleUpdater);
  require('./discord_native/browser/clipboard');
  const crashReporter = require('./discord_native/browser/crashReporter');
  crashReporter.injectBuildInfo(buildInfo);
  const features = require('./discord_native/browser/features');
  features.injectFeaturesBackend(appFeatures.getFeatures());
  require('./discord_native/browser/fileManager');
  const gpuSettings = require('./discord_native/browser/gpuSettings');
  gpuSettings.injectGpuSettingsBackend(GPUSettings);
  const nativeModules = require('./discord_native/browser/nativeModules');
  nativeModules.injectModuleUpdater(moduleUpdater);
  require('./discord_native/browser/powerMonitor');
  require('./discord_native/browser/powerSaveBlocker');
  require('./discord_native/browser/processUtils');
  const settings = require('./discord_native/browser/settings');
  settings.injectSettingsBackend(appSettings.getSettings());
  require('./discord_native/browser/spellCheck');
  const windowNative = require('./discord_native/browser/window');

  // expose globals that will be imported by the webapp
  // global.releaseChannel is set in bootstrap
  global.crashReporterMetadata = crashReporter.metadata;
  global.mainAppDirname = Constants.MAIN_APP_DIRNAME;
  global.features = appFeatures.getFeatures();
  global.appSettings = appSettings();
  // this gets updated when launching a new main app window
  global.mainWindowId = Constants.DEFAULT_MAIN_WINDOW_ID;
  global.moduleUpdater = moduleUpdater;

  let applicationMenu = require('./applicationMenu');

  if(appSettings().get("isTabs", false)){
    applicationMenu = applicationMenu.map(e => {
      if(["View", "&View"].includes(e.label)){
        e.submenu.push({
          type: "separator"
        }, {
          label: "New Tab",
          click: () => {
            mainScreen.webContentsSend("NEW_TAB")
          },
          accelerator: "Command+T"
        }, {
          label: "Close Current Tab",
          click: () => {
            mainScreen.webContentsSend("CLOSE_TAB")
          },
          accelerator: "Command+W"
        })
      }
      e.submenu = e.submenu.map(e => {
        if(["Command+r", "Control+R"].includes(e.accelerator)){
          e.click = function(){
            mainScreen.webContentsSend("RELOAD")
          }
        }
        if(["&Developer", "Developer"].includes(e.label)){
          e.submenu[0].click = () => {
            mainScreen.webContentsSend("OPEN_DEVTOOLS")
          }
        }
        return e
      })
      return e
    })
    Menu.setApplicationMenu(Menu.buildFromTemplate(applicationMenu));
  }else{
    Menu.setApplicationMenu(applicationMenu);
  }

  mainScreen = require('./mainScreen');

  let version = bootstrapModules.Constants.version

  bootstrapModules.splashScreen.events.on("APP_SHOULD_SHOW", () => {
    mainScreen.setMainWindowVisible(true)
  })
  bootstrapModules.splashScreen.events.on("APP_SHOULD_LAUNCH", () => {
    mainScreen.init(false)

    const { getWindow: getPopoutWindowByKey } = require('./popoutWindows');
    windowNative.injectGetWindow(key => {
      return getPopoutWindowByKey(key) || BrowserWindow.fromId(mainScreen.getMainWindowId());
    });
  })

  mainScreen.events.on("ready", () => {
    if(initByUpdate){
      bootstrapModules.splashScreen.pageReady()
    }else{
      mainScreen.setMainWindowVisible(true)
    }
  })

  let initByUpdate = false

  if(Date.now() - global.appSettings.get("LAST_UPDATE_CHECK_TIMESTAMP", 0) < 6.48e+8){
    console.log("Starting with version "+version+" because it haven't been 1 week since the last check.")
    mainScreen.init(false)

    const { getWindow: getPopoutWindowByKey } = require('./popoutWindows');
    windowNative.injectGetWindow(key => {
      return getPopoutWindowByKey(key) || BrowserWindow.fromId(mainScreen.getMainWindowId());
    });
  }else{
    initByUpdate = true
    console.log("Checking if version "+version+" is outdated...")
    bootstrapModules.splashScreen.initSplash()
    bootstrapModules.splashScreen.events.on("SPLASH_SCREEN_READY", () => {
      fetch("https://raw.githubusercontent.com/Lightcord/Lightcord/master/package.json", {
        headers: {
          "User-Agent": "Lightcord-Updater/1.0"
        }
      }).then(async res => {
        const body = await res.json()
        if(res.status !== 200){
          console.error("Couldn't check updates. Using installed version.")
          bootstrapModules.splashScreen.launchMainWindow()
          return
        }
        global.appSettings.set("LAST_UPDATE_CHECK_TIMESTAMP", Date.now())
        global.appSettings.save()
        if(body.version > version){
          console.error("App Outdated. updating...")
          bootstrapModules.splashScreen.updateSplashState("update-available")
          updateApp()
        }else{
          console.error("Latest version already installed. Opening window.")
          bootstrapModules.splashScreen.launchMainWindow()
        }
      }).catch(err => {
        console.error("Couldn't check updates. Using installed version.")
        console.log(err)
        bootstrapModules.splashScreen.launchMainWindow()
      })
    })
  }
}

function handleSingleInstance(args) {
  mainScreen.handleSingleInstance(args);
}

function setMainWindowVisible(visible) {
  mainScreen.setMainWindowVisible(visible);
}

function updateApp(version){
  const bootstrapModules = require('./bootstrapModules')
  //const updateLink = "https://github.com/Lightcord/Lightcord/archive/master.zip"

  bootstrapModules.splashScreen.setSplashState({
    status: "downloading-updates",
    progress: 0
  })

  bootstrapModules.splashScreen.setSplashState({
    status: "update-manually"
  })
  bootstrapModules.splashScreen.focusWindow()
  delete global.appSettings.settings["LAST_UPDATE_CHECK_TIMESTAMP"]
  global.appSettings.save()
  return

  // TODO: DOWNLOAD UPDATES AUTOMATICALLY
  fetch(updateLink)
  .then(async res => {
    if(res.status !== 200){
    }
  })
}