export function install(callback){
  return callback()
}
export function update(callback) {
  return callback();
}

export function isInstalled(callback) {
  return callback(false);
}

export function uninstall(callback) {
  return callback();
}