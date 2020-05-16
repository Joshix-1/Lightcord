'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metadata = undefined;
exports.init = init;

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

var _electron = require('electron');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _buildInfo = require('./buildInfo');

var _buildInfo2 = _interopRequireDefault(_buildInfo);

var _ipcMain = require('./ipcMain');

var _ipcMain2 = _interopRequireDefault(_ipcMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let metadata = exports.metadata = {};

function init() {
  exports.metadata = metadata = {
    channel: _buildInfo2.default.releaseChannel,
    sentry: {
      environment: _buildInfo2.default.releaseChannel,
      release: _buildInfo2.default.version
    }
  };

  if (process.platform === 'linux') {
    const XDG_CURRENT_DESKTOP = process.env.XDG_CURRENT_DESKTOP || 'unknown';
    const GDMSESSION = process.env.GDMSESSION || 'unknown';
    metadata['wm'] = `${XDG_CURRENT_DESKTOP},${GDMSESSION}`;
    try {
      metadata['distro'] = _child_process2.default.execFileSync('lsb_release', ['-ds'], { timeout: 100, maxBuffer: 512, encoding: 'utf-8' }).trim();
    } catch (e) {} // just in case lsb_release doesn't exist
  }

  _electron.crashReporter.start(getCrashReporterArgs());
  _ipcMain2.default.on('UPDATE_CRASH_REPORT_METADATA', (event, additional_metadata) => {
    const args = getCrashReporterArgs(additional_metadata);
    _ipcMain2.default.reply(event, 'START_CRASH_REPORTER', args);
    _electron.crashReporter.start(args);
  });
}

function getCrashReporterArgs(additional_metadata) {
  additional_metadata = additional_metadata || {};
  const final_metadata = _lodash2.default.defaultsDeep({}, metadata, additional_metadata);

  for (const key in final_metadata) {
    if (typeof final_metadata[key] === 'object') {
      final_metadata[key] = JSON.stringify(final_metadata[key]);
    }
  }

  return {
    productName: 'Discord',
    companyName: 'Discord Inc.',
    submitURL: 'https://sentry.io/api/146342/minidump/?sentry_key=384ce4413de74fe0be270abe03b2b35a',
    uploadToServer: true,
    ignoreSystemCrashHandler: false,
    extra: final_metadata
  };
}