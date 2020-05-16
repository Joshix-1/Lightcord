'use strict';

let orderedFiles = (() => {
  var _ref = _asyncToGenerator(function* (folder) {
    try {
      const filenames = yield readdir(folder);
      const times = yield getTimes(filenames.map(function (filename) {
        return path.join(folder, filename);
      }));
      return times.filter(function (result) {
        return result.status === 'fulfilled';
      }).map(function (result) {
        return result.value;
      }).sort(function (a, b) {
        return b.mtime.getTime() - a.mtime.getTime();
      }).map(function (a) {
        return a.filename;
      });
    } catch (err) {
      return [];
    }
  });

  return function orderedFiles(_x) {
    return _ref.apply(this, arguments);
  };
})();

let readLogFiles = (() => {
  var _ref2 = _asyncToGenerator(function* (maxSize, makeFile) {
    const modulePath = electron.remote.getGlobal('modulePath');
    const webrtcLog0 = path.join(modulePath, 'discord_voice', 'discord-webrtc_0');
    const webrtcLog1 = path.join(modulePath, 'discord_voice', 'discord-webrtc_1');
    const webrtcLog2 = path.join(modulePath, 'discord_voice', 'discord-last-webrtc_0');
    const webrtcLog3 = path.join(modulePath, 'discord_voice', 'discord-last-webrtc_1');
    const hookLog = path.join(modulePath, 'discord_hook', 'hook.log');
    const filesToUpload = [webrtcLog0, webrtcLog1, webrtcLog2, webrtcLog3, hookLog];

    const crashFolder = process.platform === 'win32' ? path.join(os.tmpdir(), 'Lightcord Crashes', 'reports') : path.join(os.tmpdir(), 'Lightcord Crashes', 'completed');
    const crashFiles = yield orderedFiles(crashFolder);
    if (crashFiles.length > 0) {
      filesToUpload.push(crashFiles[0]);
    }

    const files = yield readFiles(filesToUpload, maxSize, function (data, filename) {
      return makeFile(data, filename, 'application/octet-stream');
    });
    return files.filter(function (result) {
      return result.status === 'fulfilled';
    }).map(function (result) {
      return result.value;
    });
  });

  return function readLogFiles(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
})();

let openFiles = (() => {
  var _ref3 = _asyncToGenerator(function* (dialogOptions, maxSize, makeFile) {
    const filenames = yield showOpenDialog(dialogOptions);
    if (filenames == null) {
      return;
    }
    const files = yield readFiles(filenames, maxSize, makeFile);
    files.forEach(function (result) {
      if (result.status === 'rejected') {
        throw result.reason;
      }
    });
    return files.map(function (result) {
      return result.value;
    });
  });

  return function openFiles(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const electron = require('electron');
const fs = require('fs');
const os = require('os');
const path = require('path');
const originalFs = require('original-fs');
const remoteDialog = electron.remote.dialog;
const remoteShell = electron.remote.shell;
const { getElectronMajorVersion } = require('./_common');
const util = require('util');
// TODO: Remove when moving to Electron 6
const allSettled = require('promise.allsettled');

const INVALID_FILENAME_CHAR_REGEX = /[^a-zA-Z0-9-_.]/g;

allSettled.shim();
const readdir = util.promisify(originalFs.readdir);

function remoteDialogReturnsPromises() {
  return getElectronMajorVersion() >= 6;
}

function saveWithDialog(fileContents, fileName, filePath) {
  if (INVALID_FILENAME_CHAR_REGEX.test(fileName)) {
    throw new Error(`fileName has invalid characters`);
  }
  const defaultPath = filePath != null ? path.join(os.homedir(), filePath, fileName) : path.join(os.homedir(), fileName);

  const writeFileToDisk = selectedFileName => {
    selectedFileName && fs.writeFileSync(selectedFileName, fileContents);
  };

  if (remoteDialogReturnsPromises()) {
    remoteDialog.showSaveDialog({ defaultPath }).then(results => writeFileToDisk(results.filePath));
  } else {
    remoteDialog.showSaveDialog({ defaultPath }, writeFileToDisk);
  }
}

function showOpenDialog(dialogOptions) {
  if (remoteDialogReturnsPromises()) {
    return remoteDialog.showOpenDialog(dialogOptions).then(results => results.filePaths);
  } else {
    return new Promise(resolve => remoteDialog.showOpenDialog(dialogOptions, resolve));
  }
}

function getTimes(filenames) {
  return Promise.allSettled(filenames.map(filename => new Promise((resolve, reject) => {
    originalFs.stat(filename, (err, stats) => {
      if (err) {
        return reject(err);
      }
      if (!stats.isFile()) {
        return reject(new Error('Not a file'));
      }
      return resolve({ filename, mtime: stats.mtime });
    });
  })));
}

function showItemInFolder(path) {
  return remoteShell.showItemInFolder(path);
}

function readFiles(filenames, maxSize, makeFile) {
  return Promise.allSettled(filenames.map(filename => new Promise((resolve, reject) => {
    originalFs.stat(filename, (err, stats) => {
      if (err) return reject(err);

      if (stats.size > maxSize) {
        const err = new Error('upload too large');
        // used to help determine why openFiles failed
        err.code = 'ETOOLARGE';
        return reject(err);
      }

      originalFs.readFile(filename, (err, data) => {
        if (err) return reject(err);
        return resolve(makeFile(data.buffer, path.basename(filename)));
      });
    });
  })));
}

module.exports = {
  readLogFiles,
  saveWithDialog,
  openFiles,
  showOpenDialog,
  showItemInFolder,
  extname: path.extname,
  basename: path.basename,
  dirname: path.dirname,
  join: path.join,
  modulePath: electron.remote.getGlobal('modulePath')
};