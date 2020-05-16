'use strict';

const electron = require('electron');
const powerSaveBlocker = electron.remote.powerSaveBlocker;

const powerSaveBlockerIds = new Set();

function blockDisplaySleep() {
  const newId = powerSaveBlocker.start('prevent-display-sleep');
  powerSaveBlockerIds.add(newId);
  return newId;
}

function unblockDisplaySleep(id) {
  powerSaveBlocker.stop(id);
  powerSaveBlockerIds.delete(id);
}

function cleanupDisplaySleep() {
  // cleanup all previous sleeps
  for (const id of powerSaveBlockerIds) {
    unblockDisplaySleep(id);
  }
  powerSaveBlockerIds.clear();
}

module.exports = {
  blockDisplaySleep,
  unblockDisplaySleep,
  cleanupDisplaySleep
};