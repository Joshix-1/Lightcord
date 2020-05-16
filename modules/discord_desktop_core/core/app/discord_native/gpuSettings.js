'use strict';

const electron = require('electron');
const remoteGPUSettings = electron.remote.require('./GPUSettings');

function getEnableHardwareAcceleration() {
  return remoteGPUSettings.getEnableHardwareAcceleration();
}

function setEnableHardwareAcceleration(enable) {
  remoteGPUSettings.setEnableHardwareAcceleration(enable);
}

module.exports = {
  getEnableHardwareAcceleration,
  setEnableHardwareAcceleration
};