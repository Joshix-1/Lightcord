'use strict';

const electron = require('electron');
const moduleUpdater = electron.remote.getGlobal('moduleUpdater');
const remoteApp = electron.remote.app;

function getVersion() {
  // Hardcoding HostVersion so Discord doesn't detect Lightcord by this
  return "0.0.306" //remoteApp.getVersion(); 
}

const allowedAppPaths = new Set(['home', 'appData', 'desktop', 'documents', 'downloads']);

function getPath(path) {
  if (!allowedAppPaths.has(path)) {
    throw new Error(`${path} is not an allowed app path`);
  }
  return remoteApp.getPath(path);
}

function setBadgeCount(count) {
  remoteApp.setBadgeCount(count);
}

function dockSetBadge(badge) {
  remoteApp.dock.setBadge(badge);
}

function dockBounce(type) {
  return remoteApp.dock.bounce(type);
}

function dockCancelBounce(id) {
  remoteApp.dock.cancelBounce(id);
}

function getModuleVersions() {
  const versions = {};
  if (!__OVERLAY__) {
    const installed = moduleUpdater.getInstalled();
    for (const name of Object.keys(installed)) {
      versions[name] = installed[name].installedVersion;
    }
  }
  return versions;
}

let dockAPI;
if (remoteApp.dock) {
  dockAPI = {
    setBadge: dockSetBadge,
    bounce: dockBounce,
    cancelBounce: dockCancelBounce
  };
}

function relaunch() {
  remoteApp.relaunch();
  remoteApp.exit(0);
}

function getDefaultDoubleClickAction() {
  return electron.remote.systemPreferences.getUserDefault('AppleActionOnDoubleClick', 'string');
}

module.exports = {
  getVersion,
  getModuleVersions,
  getPath,
  setBadgeCount,
  dock: dockAPI,
  relaunch,
  getDefaultDoubleClickAction
};