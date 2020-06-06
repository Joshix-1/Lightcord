'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const electron = require('electron');
const lodash = require('lodash');
const childProcess = require('child_process');
const buildInfo = require('../../buildInfo');

const { CRASH_REPORTER_UPDATE_METADATA } = require('../common/constants').IPCEvents;

const metadata = exports.metadata = {
  channel: buildInfo.releaseChannel,
  sentry: {
    environment: buildInfo.releaseChannel,
    release: buildInfo.version
  }
};

if (process.platform === 'linux') {
  const XDG_CURRENT_DESKTOP = process.env.XDG_CURRENT_DESKTOP || 'unknown';
  const GDMSESSION = process.env.GDMSESSION || 'unknown';
  metadata['wm'] = `${XDG_CURRENT_DESKTOP},${GDMSESSION}`;
  try {
    metadata['distro'] = childProcess.execFileSync('lsb_release', ['-ds'], { timeout: 100, maxBuffer: 512, encoding: 'utf-8' }).trim();
  } catch (_) {} // just in case lsb_release doesn't exist
}

function getCrashReporterArgs(additional_metadata) {
  additional_metadata = additional_metadata || {};
  const final_metadata = lodash.defaultsDeep({}, metadata, additional_metadata);

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

//electron.crashReporter.start(getCrashReporterArgs());

electron.ipcMain.handle(CRASH_REPORTER_UPDATE_METADATA, (() => {
  var _ref = _asyncToGenerator(function* (_, additional_metadata) {
    const args = getCrashReporterArgs(additional_metadata);
    //electron.crashReporter.start(args);
    return args;
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());