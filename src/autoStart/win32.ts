
export function install(callback) {
  const startMinimized = settings.get('START_MINIMIZED', false);
  let { execPath } = process;
  if (startMinimized) {
    execPath = `${execPath} --start-minimized`;
  }
  const queue = [['HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run', '/v', appName, '/d', execPath]];

  windowsUtils.addToRegistry(queue, callback);
}
export function update(callback) {
  isInstalled(installed => {
    if (installed) {
      install(callback);
    } else {
      callback();
    }
  });
}
export function isInstalled(callback) {
  const queryValue = ['HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run', '/v', appName];
  queryValue.unshift('query');
  windowsUtils.spawnReg(queryValue, (error, stdout) => {
    const doesOldKeyExist = stdout.indexOf(appName) >= 0;
    callback(doesOldKeyExist);
  });
}
export function uninstall(callback) {
  const queryValue = ['HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run', '/v', appName, '/f'];
  queryValue.unshift('delete');
  windowsUtils.spawnReg(queryValue, (error, stdout) => {
    callback();
  });
}

import * as path from "path"
import * as windowsUtils from "../windowsUtils"
import appSettings from "../appSettings"


const settings = appSettings.getSettings();

// TODO: We should use Constant's APP_NAME, but only once
//       we set up backwards compat with this.
const appName = path.basename(process.execPath, '.exe');