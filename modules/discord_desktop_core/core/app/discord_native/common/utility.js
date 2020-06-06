'use strict';

const process = require('process');

function getElectronMajorVersion() {
  return process.versions.electron != null ? parseInt(process.versions.electron.split('.')[0]) : 0;
}

module.exports = {
  getElectronMajorVersion
};