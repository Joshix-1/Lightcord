"use strict";

var _require = require('electron'),
    app = _require.app;

var _require2 = require('./host'),
    createRenderer = _require2.createRenderer,
    destroyRenderer = _require2.destroyRenderer,
    eventHandler = _require2.eventHandler;

var FeatureFlags = require('./FeatureFlags');

var Overlay = require('./overlay_module.js');

process.on('uncaughtException', function (e) {
  Overlay.logMessage("Overlay host process exception: ".concat(e.message));
});
global.features = new FeatureFlags();
global.mainAppDirname = __dirname;

if (process.versions.electron) {
  var versionBits = process.versions.electron.split('.');
  var majorVersion = parseInt(versionBits[0], 10);

  if (majorVersion >= 4) {
    global.features.declareSupported('overlay-hidpi');
  }
}

app.disableHardwareAcceleration();
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
app.once('ready', function () {
  Overlay._initializeHostProcess({
    createRenderer: createRenderer,
    destroyRenderer: destroyRenderer
  });

  Overlay._setEventHandler(eventHandler);
});
