'use strict';

const electron = require('electron');
const invariant = require('invariant');
const remote = electron.remote;
const nativeImage = electron.nativeImage;

function copy(text) {
  if (text) {
    remote.clipboard.writeText(text);
  } else {
    remote.getCurrentWebContents().copy();
  }
}

function copyImage(imageArrayBuffer, imageSrc) {
  invariant(imageArrayBuffer != null, 'Image data is empty');

  const nativeImg = nativeImage.createFromBuffer(imageArrayBuffer);
  electron.clipboard.write({ html: `<img src="${imageSrc}">`, image: nativeImg });
}

function cut() {
  remote.getCurrentWebContents().cut();
}

function paste() {
  remote.getCurrentWebContents().paste();
}

function read() {
  return electron.clipboard.readText();
}

module.exports = {
  copy,
  copyImage,
  cut,
  paste,
  read
};