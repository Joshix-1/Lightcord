import * as fs from "fs"
import * as path from "path"
import * as electron from "electron"
import * as buildInfo from "../buildInfo"

// TODO: We should use Constant's APP_NAME, but only once
//       we set up backwards compat with this.
const appName = path.basename(process.execPath, '.exe');
const exePath = electron.app.getPath('exe');
const exeDir = path.dirname(exePath);
const iconPath = path.join(exeDir, 'discord.png');
const autostartDir = path.join(electron.app.getPath('appData'), 'autostart');
const electronAppName = electron.app.name ? electron.app.name : electron.app.getName();
const autostartFileName = path.join(autostartDir, electronAppName + '-' + buildInfo.releaseChannel + '.desktop');
const desktopFile = `[Desktop Entry]
Type=Application
Exec=${exePath}
Hidden=false
NoDisplay=false
Name=${appName}
Icon=${iconPath}
Comment=Text and voice chat for gamers.
X-GNOME-Autostart-enabled=true
`;

function ensureDir() {
  try {
    fs.mkdirSync(autostartDir);
    return true;
  } catch (e) {
    // catch for when it already exists.
  }
  return false;
}

export function install(callback) {
  // TODO: This could fail. We should read its return value
  ensureDir();
  try {
    return fs.writeFile(autostartFileName, desktopFile, callback);
  } catch (e) {
    // I guess we don't autostart then
    return callback();
  }
}

export function update(callback) {
  // TODO: We might need to implement this later on
  return callback();
}

export function isInstalled(callback) {
  try {
    fs.stat(autostartFileName, (err, stats) => {
      if (err) {
        return callback(false);
      }
      return callback(stats.isFile());
    });
  } catch (e) {
    return callback(false);
  }
}

export function uninstall(callback) {
  return fs.unlink(autostartFileName, callback);
}