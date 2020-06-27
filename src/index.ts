/** Glasstron */
import * as glasstron from "glasstron"
glasstron.init()

/** Modules */
import * as electron from "electron"
import requireNativeDiscordModule from "./requireNative";
import appSettings from "./appSettings"
import autoStart from "./autoStart"
import * as buildInfo from "./buildInfo"
import * as Constants from "./Constants"
import * as GPUSettings from "./GPUSettings"
import * as moduleUpdater from "./common/moduleUpdater"
import * as paths from "./common/paths"
import { create } from "./singleInstance";
import * as splashScreen from "./splashScreen"

if (process.platform === 'linux') {
    // Some people are reporting audio problems on Linux that are fixed by setting
    // an environment variable PULSE_LATENCY_MSEC=30 -- the "real" fix is to see
    // what conditions require this and set this then (also to set it directly in
    // our webrtc setup code rather than here) but this should fix the bug for now.
    if (process.env.PULSE_LATENCY_MSEC === undefined) {
        process.env.PULSE_LATENCY_MSEC = "30";
    }
}

paths.init(buildInfo)
electron.app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
electron.app.commandLine.appendSwitch("no-force-async-hooks-checks");

function setupHardwareAcceleration() {
  const settings = appSettings.getSettings();
  //@ts-ignore
  const electronMajor = parseInt(process.versions.electron.split('.')[0]);
  const allowed = process.env.DISCORD_ENABLE_HARDWARE_ACCELERATION || buildInfo.releaseChannel === 'development' || !(electronMajor === 7 && process.platform === 'darwin');
  // TODO: this is a copy of gpuSettings.getEnableHardwareAcceleration
  if (!allowed || !settings.get('enableHardwareAcceleration', true)) {
    electron.app.disableHardwareAcceleration();
  }
}

global["releaseChannel"] = "stable"

setupHardwareAcceleration();
function hasArgvFlag(flag) {
  return (process.argv || []).slice(1).includes(flag);
}

//Transform main thread into async
(async function Main(){
    await electron.app.whenReady()

    console.log(`Initializing Lightcord.`)
    console.log(`Version: ${buildInfo.version}
releaseChannel: ${buildInfo.releaseChannel}
commit: ${buildInfo.commit}`)

    if(!electron.app.commandLine.hasSwitch('enable-transparent-visuals'))electron.app.commandLine.appendSwitch('enable-transparent-visuals');
    electron.app.setAppUserModelId(Constants.APP_ID);

    let coreModule
    create(() => {
        const startMinimized = hasArgvFlag('--start-minimized');

        coreModule = requireNativeDiscordModule('discord_desktop_core');
        coreModule.startup({
          paths,
          splashScreen,
          moduleUpdater,
          autoStart,
          buildInfo,
          appSettings,
          Constants,
          GPUSettings
        });

        coreModule.setMainWindowVisible(!startMinimized)
    }, (args) => {
        if (args != null && args.length > 0 && args[0] === '--squirrel-uninstall') {
          electron.app.quit();
          return;
        }
  
        if (coreModule) {
            coreModule.handleSingleInstance(args);
        }
    })
})()