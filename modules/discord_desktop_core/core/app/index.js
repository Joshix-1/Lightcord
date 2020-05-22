'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startup = startup;
exports.handleSingleInstance = handleSingleInstance;
exports.setMainWindowVisible = setMainWindowVisible;
const { Menu } = require('electron');
const yauzl = require("yauzl")
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
  require('./buildInfo');
  const appSettings = require('./appSettings');

  const Constants = require('./Constants');
  Constants.init(bootstrapModules.Constants);

  const errorReporting = require('./errorReporting');
  errorReporting.init();

  const appFeatures = require('./appFeatures');
  appFeatures.init();

  const GPUSettings = require('./GPUSettings');
  bootstrapModules.GPUSettings.replace(GPUSettings);

  const rootCertificates = require('./rootCertificates');
  rootCertificates.init();

  // expose globals that will be imported by the webapp
  // global.releaseChannel is set in bootstrap
  global.crashReporterMetadata = errorReporting.metadata;
  global.mainAppDirname = Constants.MAIN_APP_DIRNAME;
  global.features = appFeatures.getFeatures();
  global.appSettings = appSettings();
  // this gets updated when launching a new main app window
  global.mainWindowId = Constants.DEFAULT_MAIN_WINDOW_ID;
  global.moduleUpdater = moduleUpdater;

  const applicationMenu = require('./applicationMenu');
  Menu.setApplicationMenu(applicationMenu);

  mainScreen = require('./mainScreen');

  let version = bootstrapModules.Constants.version

  bootstrapModules.splashScreen.events.on("APP_SHOULD_SHOW", () => {
    mainScreen.setMainWindowVisible(true)
  })
  bootstrapModules.splashScreen.events.on("APP_SHOULD_LAUNCH", () => {
    mainScreen.init(false)
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
  }else{
    initByUpdate = true
    console.log("Checking if version "+version+" is outdated...")
    bootstrapModules.splashScreen.initSplash()
    bootstrapModules.splashScreen.events.on("SPLASH_SCREEN_READY", () => {
      fetch("https://haste.deroku.xyz/raw/oqigetomog", {
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
  const updateLink = "https://github.com/Lightcord/Lightcord/archive/master.zip"

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