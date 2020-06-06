'use strict';

const electron = require('electron');
const { getFeatures } = require('../../appFeatures');

const { FEATURES_GET_BROWSER_FEATURES } = require('../common/constants').IPCEvents;

electron.ipcMain.on(FEATURES_GET_BROWSER_FEATURES, event => {
  event.returnValue = getFeatures().getSupported();
});