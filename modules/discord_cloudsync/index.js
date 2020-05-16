const EventEmitter = require('events');
const {CloudSync: CloudSyncNative} = require('./discord_cloudsync.node');

function makeCallback(resolve, reject) {
  return (err, result) => {
    if (err != null && err !== '') {
      reject(new Error(JSON.parse(err)));
    } else {
      resolve(result != null && result !== '' ? JSON.parse(result) : null);
    }
  };
}

class CloudSync extends EventEmitter {
  constructor() {
    super();

    this._cloudSync = new CloudSyncNative(state => this.emit('state', JSON.parse(state)));
  }

  sync(id, config) {
    return new Promise((resolve, reject) =>
      this._cloudSync.command(JSON.stringify({type: 'SYNC', id, config}), makeCallback(resolve, reject))
    );
  }
}

module.exports = CloudSync;
