'use strict';

const electron = require('electron');
const webFrame = electron.webFrame;
const remoteSession = electron.remote.session;
const remoteApp = electron.remote.app;
const process = require('process');
const remoteProcess = electron.remote.require('process');
const { getElectronMajorVersion } = require('./_common');

const MEMORY_USAGE_GATHER_INTERVAL = 5000;

let totalMemoryUsageKB = 0;

setInterval(() => {
  Promise.all([process.getProcessMemoryInfo(), remoteProcess.getProcessMemoryInfo()].map(x => x.catch(() => 0))).then(usages => {
    totalMemoryUsageKB = usages.reduce((total, usage) => total + usage.private, 0);
  });
}, MEMORY_USAGE_GATHER_INTERVAL);

// [adill] "warm" the cache, as the first call to query cpu % will always be zero
let _ = getCurrentCPUUsagePercent();

function flushDNSCache() {
  if (!remoteSession) return;
  const defaultSession = remoteSession.defaultSession;
  if (!defaultSession || !defaultSession.clearHostResolverCache) return;
  defaultSession.clearHostResolverCache();
}

function flushCookies(callback) {
  try {
    if (getElectronMajorVersion() >= 7) {
      remoteSession.defaultSession.cookies.flushStore().then(() => callback());
    } else {
      remoteSession.defaultSession.cookies.flushStore(callback);
    }
  } catch (err) {
    callback(err);
  }
}

function flushStorageData(callback) {
  try {
    remoteSession.defaultSession.flushStorageData();
  } catch (err) {
    callback(err);
    return;
  }
  callback();
}

function purgeMemory() {
  webFrame.clearCache();
}

function getCurrentCPUUsagePercent() {
  let totalProcessorUsagePercent = 0.0;
  for (const processMetric of remoteApp.getAppMetrics()) {
    totalProcessorUsagePercent += processMetric.cpu.percentCPUUsage;
  }
  return totalProcessorUsagePercent;
}

function getCurrentMemoryUsageKB() {
  return totalMemoryUsageKB;
}

module.exports = {
  flushDNSCache,
  flushCookies,
  flushStorageData,
  purgeMemory,
  getCurrentCPUUsagePercent,
  getCurrentMemoryUsageKB
};