exports.initSplash = initSplash;
exports.focusWindow = focusWindow;
exports.pageReady = pageReady;

import * as electron from "electron"
import {EventEmitter} from "events"
import * as fs from "fs"
import * as path from "path"
import * as url from "url"
import * as moduleUpdater from "./common/moduleUpdater"
import * as paths from "./common/paths"
import * as ipcMain from "./ipcMain"

// citron note: atom seems to add about 50px height to the frame on mac but not windows
// TODO: see if we can eliminate fudge by using useContentSize BrowserWindow option
const LOADING_WINDOW_WIDTH = 300;
const LOADING_WINDOW_HEIGHT = process.platform == 'darwin' ? 300 : 350;

// TODO: addModulesListener events should use Module's constants
const UPDATE_CHECK_FINISHED = 'update-check-finished';
const LAUNCHING = 'launching';

export const APP_SHOULD_LAUNCH = 'APP_SHOULD_LAUNCH';
export const APP_SHOULD_SHOW = 'APP_SHOULD_SHOW';

export const events = new EventEmitter();

function webContentsSend(win, event, ...args) {
  if (win != null && win.webContents != null) {
    win.webContents.send(`DISCORD_${event}`, ...args);
  }
}

let splashWindow;
let modulesListeners;
let splashState;
let launchedMainWindow;
let quoteCachePath;

exports.launchMainWindow = function(){
  launchMainWindow();
  updateSplashState(LAUNCHING);
}

function initSplash(startMinimized = false) {
  modulesListeners = {};
  splashState = {};
  launchedMainWindow = false;
/*
  addModulesListener(UPDATE_CHECK_FINISHED, ({ succeeded, updateCount, manualRequired }) => {
    launchMainWindow();
    updateSplashState(LAUNCHING);
  });*/

  launchSplashWindow(startMinimized);

  quoteCachePath = path.join(paths.getUserData(), 'quotes.json');
  ipcMain.default.on('UPDATED_QUOTES', (_event, quotes) => cacheLatestQuotes(quotes));
}

function destroySplash() {
  if (splashWindow) {
    splashWindow.setSkipTaskbar(true);
    // defer the window hiding for a short moment so it gets covered by the main window
    const _nukeWindow = () => {
      splashWindow.hide();
      splashWindow.close();
      splashWindow = null;
    };
    setTimeout(_nukeWindow, 100);
  }
}

function addModulesListener(event, listener) {
  modulesListeners[event] = listener;
  moduleUpdater.events.addListener(event, listener);
}

function removeModulesListeners() {
  for (const event of Object.keys(modulesListeners)) {
    moduleUpdater.events.removeListener(event, modulesListeners[event]);
  }
}

function updateSplashState(event) {
  if (splashWindow != null && !splashWindow.isDestroyed() && !splashWindow.webContents.isDestroyed()) {
    webContentsSend(splashWindow, 'SPLASH_UPDATE_STATE', Object.assign({ status: event }, splashState));
  }
}

function launchSplashWindow(startMinimized) {
  const windowConfig = {
    width: LOADING_WINDOW_WIDTH,
    height: LOADING_WINDOW_HEIGHT,
    transparent: false,
    frame: false,
    resizable: false,
    center: true,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  };

  splashWindow = new electron.BrowserWindow(windowConfig);

  // prevent users from dropping links to navigate in splash window
  splashWindow.webContents.on('will-navigate', e => e.preventDefault());

  splashWindow.webContents.on('new-window', (e, windowURL) => {
    e.preventDefault();
    electron.shell.openExternal(windowURL);
    // exit, but delay half a second because openExternal is about to fire
    // some events to things that are freed by app.quit.
    setTimeout(electron.app.quit, 500);
  });

  if (process.platform !== 'darwin') {
    // citron note: this causes a crash on quit while the window is open on osx
    splashWindow.on('closed', () => {
      splashWindow = null;
      if (!launchedMainWindow) {
        // user has closed this window before we launched the app, so let's quit
        electron.app.quit();
      }
    });
  }

  ipcMain.default.on('SPLASH_SCREEN_READY', () => {
    const cachedQuote = chooseCachedQuote();
    if (cachedQuote) {
      webContentsSend(splashWindow, 'SPLASH_SCREEN_QUOTE', cachedQuote);
    }

    if (splashWindow && !startMinimized) {
      splashWindow.show();
    }

    moduleUpdater.installPendingUpdates();

    events.emit("SPLASH_SCREEN_READY")
  });

  const splashUrl = url.format({
    protocol: 'file',
    slashes: true,
    pathname: path.join(__dirname, '..', "splash", 'index.html')
  });

  splashWindow.loadURL(splashUrl);
}

function launchMainWindow() {
  removeModulesListeners();
  if (!launchedMainWindow && splashWindow != null) {
    launchedMainWindow = true;
    events.emit(APP_SHOULD_LAUNCH);
  }
}

function scheduleUpdateCheck() {}

function focusWindow() {
  if (splashWindow != null) {
    splashWindow.focus();
  }
}

function pageReady() {
  destroySplash();
  process.nextTick(() => events.emit(APP_SHOULD_SHOW));
}

function cacheLatestQuotes(quotes) {
  fs.writeFile(quoteCachePath, JSON.stringify(quotes), e => {
    if (e) {
      console.warn('Failed updating quote cache with error: ', e);
    }
  });
}

function chooseCachedQuote() {
  let cachedQuote = "Launching...";
  return cachedQuote;
}