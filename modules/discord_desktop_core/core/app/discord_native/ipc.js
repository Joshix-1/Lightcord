'use strict';

const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;

// We prefix events with the `DISCORD_` string to prevent malicious use
function send(event, ...args) {
  console.log(`[DEBUG]: send -> ${event}:`, ...args)
  ipcRenderer.send(`DISCORD_${event}`, ...args);
}

function on(event, callback) {
  console.log(`[DEBUG]: on -> ${event}:`, callback)
  ipcRenderer.on(`DISCORD_${event}`, callback);
}

function removeListener(event, callback) {
  console.log(`[DEBUG]: removeListener -> ${event}:`, callback)
  ipcRenderer.removeListener(`DISCORD_${event}`, callback);
}

module.exports = {
  send,
  on,
  removeListener
};