'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const electron = require('electron');
const ipcRenderer = require('./ipc');
const crashReporter = electron.crashReporter;

const UPDATE_CRASH_REPORT_METADATA = 'UPDATE_CRASH_REPORT_METADATA';
const START_CRASH_REPORTER = 'START_CRASH_REPORTER';

ipcRenderer.on(START_CRASH_REPORTER, (event, args) => {
  crashReporter.start(args);
});

function updateCrashReporter(additional_metadata) {
  ipcRenderer.send(UPDATE_CRASH_REPORT_METADATA, additional_metadata);
}

module.exports = {
  updateCrashReporter
};