'use strict';

// Private utilities for discordNativeAPI.
// Don't expose to the public DiscordNative.

const electron = require('electron');
const remoteProcess = electron.remote.process;
const BrowserWindow = electron.remote.BrowserWindow;

function getWindow(key) {
  if (!key) return getCurrentWindow();
  return BrowserWindow.getAllWindows().find(window => window.windowKey === key);
}

function getCurrentWindow() {
  return electron.remote.getCurrentWindow();
}

function getElectronMajorVersion() {
  if (remoteProcess.versions.electron) {
    return parseInt(remoteProcess.versions.electron.split('.')[0]);
  }
}

module.exports = {
  getCurrentWindow,
  getWindow,
  getElectronMajorVersion
};