'use strict';

const electron = require('electron');
const { getElectronMajorVersion } = require('./_common');
const desktopCapturer = electron.desktopCapturer;

function hasPromisifiedGetSources() {
  return getElectronMajorVersion() >= 6;
}

function getDesktopCaptureSources(options) {
  return new Promise((resolve, reject) => {
    let getSourcesPromise;
    if (hasPromisifiedGetSources()) {
      getSourcesPromise = desktopCapturer.getSources(options);
    } else {
      getSourcesPromise = new Promise((resolve, reject) => {
        desktopCapturer.getSources(options, (err, sources) => {
          if (err != null) {
            return reject(err);
          }

          return resolve(sources);
        });
      });
    }

    getSourcesPromise.then(sources => {
      return resolve(sources.map(source => {
        return {
          id: source.id,
          name: source.name,
          url: source.thumbnail.toDataURL()
        };
      }));
    });
  });
}

module.exports = {
  getDesktopCaptureSources
};