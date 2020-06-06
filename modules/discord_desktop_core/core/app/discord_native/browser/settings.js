'use strict';

const electron = require('electron');
const { getSettings } = require('../../appSettings');

const { SETTINGS_GET, SETTINGS_SET, SETTINGS_GET_SYNC } = require('../common/constants').IPCEvents;

electron.ipcMain.handle(SETTINGS_GET, (_, name, defaultValue) => {
  const settings = getSettings();
  return settings.get(name, defaultValue);
});

electron.ipcMain.handle(SETTINGS_SET, (_, name, value) => {
  const settings = getSettings();
  settings.set(name, value);
  settings.save();
});

electron.ipcMain.on(SETTINGS_GET_SYNC, (event, name, defaultValue) => {
  const settings = getSettings();
  event.returnValue = settings.get(name, defaultValue);
});