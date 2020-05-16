'use strict';

var _electron = require('electron');

function isAccessibilitySupportEnabled() {
  // NOTE(faulty): `isX` methods are deprecated and being replaced with
  // property accessors in Electron. However, the property accessor for this is
  // seemingly not available yet, so this check tries to accomodate both.
  return _electron.remote.app.accessibilitySupportEnabled != null ? _electron.remote.app.accessibilitySupportEnabled : _electron.remote.app.isAccessibilitySupportEnabled();
}

module.exports = {
  isAccessibilitySupportEnabled
};