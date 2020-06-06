'use strict';

const electron = require('electron');
const buildInfo = require('../../buildInfo');

const {
  APP_GET_RELEASE_CHANNEL_SYNC,
  APP_GET_HOST_VERSION_SYNC,
  APP_GET_MODULE_VERSIONS,
  APP_GET_PATH,
  APP_SET_BADGE_COUNT,
  APP_DOCK_SET_BADGE,
  APP_DOCK_BOUNCE,
  APP_DOCK_CANCEL_BOUNCE,
  APP_RELAUNCH,
  APP_GET_DEFAULT_DOUBLE_CLICK_ACTION
} = require('../common/constants').IPCEvents;

electron.ipcMain.on(APP_GET_RELEASE_CHANNEL_SYNC, event => {
  event.returnValue = buildInfo.releaseChannel;
});

electron.ipcMain.on(APP_GET_HOST_VERSION_SYNC, event => {
  event.returnValue = electron.app.getVersion();
});

electron.ipcMain.handle(APP_GET_MODULE_VERSIONS, async function(ev){
    return {};
});

electron.ipcMain.handle(APP_GET_PATH, async function(ev, path){
    return electron.app.getPath(path);
});

electron.ipcMain.handle(APP_SET_BADGE_COUNT, async function(ev, count){
    electron.app.setBadgeCount(count);
});

electron.ipcMain.handle(APP_DOCK_SET_BADGE, async function(ev, badge){
    if (electron.app.dock != null) {
      electron.app.dock.setBadge(badge);
    }
});

electron.ipcMain.handle(APP_DOCK_BOUNCE, async function(ev, type){
    if (electron.app.dock != null) {
      return electron.app.dock.bounce(type);
    } else {
      return -1;
    }
});

electron.ipcMain.handle(APP_DOCK_CANCEL_BOUNCE, async function(id){
    if (electron.app.dock != null) {
      electron.app.dock.cancelBounce(id);
    }
});

electron.ipcMain.handle(APP_RELAUNCH, async function(ev){
    electron.app.relaunch();
    electron.app.exit(0);
});

electron.ipcMain.handle(APP_GET_DEFAULT_DOUBLE_CLICK_ACTION, async function(ev){
    return electron.systemPreferences.getUserDefault('AppleActionOnDoubleClick', 'string');
});