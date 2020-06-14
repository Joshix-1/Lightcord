'use strict';

const electron = require('electron');
const EventEmitter = require('events');
const process = require('process');
const common = require('./_common');
const remoteMenu = electron.remote.Menu;
const webFrame = electron.webFrame;

function flashFrame(flag) {
  const currentWindow = common.getWindow();
  if (currentWindow == null || currentWindow.flashFrame == null) return;
  currentWindow.flashFrame(!currentWindow.isFocused() && flag);
}

function minimize(key) {
  const win = common.getWindow(key);
  if (win == null) return;
  win.minimize();
}

function restore(key) {
  const win = common.getWindow(key);
  if (win == null) return;
  win.restore();
}

function maximize(key) {
  const win = common.getWindow(key);
  if (win == null) return;
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
}

function focus(hack, key) {
  const win = common.getWindow(key);
  // Windows does not respect the focus call always.
  // This uses a hack defined in https://github.com/electron/electron/issues/2867
  // Should be used sparingly because it can effect window managers.
  if (hack && process.platform === 'win32') {
    win.setAlwaysOnTop(true);
    win.focus();
    win.setAlwaysOnTop(false);
  } else {
    win.focus();
  }
}

function setAlwaysOnTop(key, enabled) {
  const win = common.getWindow(key);
  if (win == null) return;
  win.setAlwaysOnTop(enabled);
}

function isAlwaysOnTop(key) {
  const win = common.getWindow(key);
  if (win == null) return false;
  return win.isAlwaysOnTop();
}

function blur(key) {
  const win = common.getWindow(key);
  if (win != null && !win.isDestroyed()) {
    win.blur();
  }
}

function setProgressBar(progress, key) {
  const win = common.getWindow(key);
  if (win == null) return;
  win.setProgressBar(progress);
}

function fullscreen(key) {
  const currentWindow = common.getWindow(key);
  currentWindow.setFullScreen(!currentWindow.isFullScreen());
}

function close(key) {
  if (key == null && process.platform === 'darwin') {
    remoteMenu.sendActionToFirstResponder('hide:');
  } else {
    const win = common.getWindow(key);
    if (win == null) return;
    win.close();
  }
}

function setZoomFactor(factor) {
  if (!webFrame.setZoomFactor) return;
  webFrame.setZoomFactor(factor / 100);
}

const webContents = common.getCurrentWindow().webContents;
class WebContents extends EventEmitter {
  constructor() {
    super();

    webContents.removeAllListeners('devtools-opened');
    webContents.on('devtools-opened', () => {
      this.emit('devtools-opened');
    });
  }

  setBackgroundThrottling(enabled) {
    if (webContents.setBackgroundThrottling != null) {
      webContents.setBackgroundThrottling(enabled);
    }
  }
}

module.exports = {
  flashFrame,
  minimize,
  restore,
  maximize,
  focus,
  blur,
  fullscreen,
  close,
  setAlwaysOnTop,
  isAlwaysOnTop,
  setZoomFactor,
  webContents: new WebContents(),
  setProgressBar
};