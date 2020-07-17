import * as electron from "electron"
import * as net from "net"
import * as path from "path"
import * as fs from "fs"
import * as os from "os"
import * as buildinfo from "./buildInfo"

function deleteSocketFile(socketPath) {
  if (process.platform === 'win32') {
    return;
  }

  if (fs.existsSync(socketPath)) {
    try {
      fs.unlinkSync(socketPath);
    } catch (error) {
      // Ignore ENOENT errors in case the file was deleted between the exists
      // check and the call to unlink sync. This occurred occasionally on CI
      // which is why this check is here.
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
  }
}

/**
 * Creates server to listen for additional atom application launches.
 *
 * You can run the command multiple times, but after the first launch
 * the other launches will just pass their information to this server and then
 * close immediately.
 */
function listenForArgumentsFromNewProcess(socketPath, callback) {
  deleteSocketFile(socketPath);

  const server = net.createServer(connection => {
    connection.on('data', data => {
      const args = JSON.parse(data.toString());
      callback(args);
    });
  });
  server.listen(socketPath);
  server.on('error', error => console.error('Application server failed', error));
  return server;
}

function tryStart(socketPath, callback, otherAppFound) {
  // FIXME: Sometimes when socketPath doesn't exist, net.connect would strangely
  // take a few seconds to trigger 'error' event, it could be a bug of node
  // or atom-shell, before it's fixed we check the existence of socketPath to
  // speedup startup.
  if (process.platform !== 'win32' && !fs.existsSync(socketPath)) {
    callback();
    return;
  }

  const client = net.connect({ path: socketPath }, () => {
    client.write(JSON.stringify(process.argv.slice(1)), () => {
      client.end();
      otherAppFound();
    });
  });
  client.on('error', callback);
}

function makeSocketPath() {
  let name = electron.app.name ? electron.app.name : electron.app.getName();
  if (buildinfo.releaseChannel !== 'stable') {
    name += buildinfo.releaseChannel;
  }

  if (process.platform === 'win32') {
    return '\\\\.\\pipe\\' + name + '-sock';
  } else {
    return path.join(os.tmpdir(), name + '.sock');
  }
}

export function create(startCallback, newProcessCallback) {
  const socketPath = makeSocketPath();

  tryStart(socketPath, () => {
    const server = listenForArgumentsFromNewProcess(socketPath, newProcessCallback);

    electron.app.on('will-quit', () => {
      server.close();
      deleteSocketFile(socketPath);
    });

    //@ts-ignore
    electron.app.on('will-exit', () => {
      server.close();
      deleteSocketFile(socketPath);
    });

    startCallback();
  }, () => {
    console.log('Another instance exists. Quitting.');
    electron.app.exit(0);
  });
}

export function pipeCommandLineArgs(noOtherAppFoundCallback, otherAppFound) {
  tryStart(makeSocketPath(), noOtherAppFoundCallback, otherAppFound);
}