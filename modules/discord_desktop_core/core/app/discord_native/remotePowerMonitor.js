'use strict';

const electron = require('electron');
const EventEmitter = require('events');
const remotePowerMonitor = electron.remote.powerMonitor;

class RemotePowerMonitor extends EventEmitter {
  constructor() {
    super();

    remotePowerMonitor.on('resume', () => {
      this.emit('resume');
    });
  }

  removeAllListeners() {
    remotePowerMonitor.removeAllListeners();
    super.removeAllListeners();
  }
}

module.exports = new RemotePowerMonitor();