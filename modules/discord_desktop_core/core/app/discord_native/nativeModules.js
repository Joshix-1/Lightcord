'use strict';

const electron = require('electron');
const vm = require('vm');
const ipcRenderer = require('./ipc');

// Set up global module paths in renderer's require
const NodeModule = require('module');
const mainAppDirname = electron.remote.getGlobal('mainAppDirname');

let modulePaths = [];

// add native module paths
const remotePaths = electron.remote.require('module').globalPaths;
remotePaths.forEach(path => {
  if (!path.includes('electron.asar')) {
    modulePaths.push(path);
  }
});

// add main app module paths (limited to the discord_desktop_core .asar)
const mainAppModulePaths = NodeModule._nodeModulePaths(mainAppDirname);
modulePaths = modulePaths.concat(mainAppModulePaths.slice(0, 2));

// apply the module paths
module.paths = modulePaths;

const MODULE_INSTALL = 'MODULE_INSTALL';
const MODULE_QUERY = 'MODULE_QUERY';
const MODULE_INSTALLED = 'MODULE_INSTALLED';

const modulePromises = {};

// Handle successfully installed modules, used in ensureModule
ipcRenderer.on(MODULE_INSTALLED, (e, name, success) => {
  const promise = modulePromises[name];

  if (promise == null || promise.callback == null) {
    return;
  }

  promise.callback(success);
});

function ensureModule(name) {
  let modulePromise = modulePromises[name];
  if (modulePromise == null) {
    modulePromise = modulePromises[name] = {};
    modulePromise.promise = new Promise((resolve, reject) => {
      modulePromise.callback = success => {
        modulePromise.callback = null;
        success ? resolve() : reject(new Error('failed to ensure module'));
      };

      installModule(name);
    });
  }

  return modulePromise.promise;
}

function installModule(name) {
  ipcRenderer.send(MODULE_INSTALL, name);
}

function queryModule(name) {
  ipcRenderer.send(MODULE_QUERY, name);
}

// sandbox this function in a new context, else it's susceptible to prototype attacks
const context = vm.createContext(Object.create(null));
const _requireModule = vm.runInContext(`
  function requireModule(remoteRequire, localRequire, name, remote) {
    if (!/^discord_[a-z0-9_-]+$/.test(name) && name !== 'erlpack') {
      throw new Error('"' + String(name) + '" is not a whitelisted native module');
    }
    return remote ? remoteRequire(name) : localRequire(name);
  }
  requireModule
`, context);

const remoteRequire = electron.remote.require;
const localRequire = ((id) => {
  return require("../../../../"+id)
});

function requireModule(name, remote) {
  return _requireModule(remoteRequire, localRequire, name, remote);
}

module.exports = {
  installModule,
  queryModule,
  ensureModule,
  requireModule
};