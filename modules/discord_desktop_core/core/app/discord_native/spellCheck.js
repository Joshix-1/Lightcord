'use strict';

const electron = require('electron');
const { getElectronMajorVersion } = require('./_common');

function requiresAsyncSpellCheckProvider() {
  return getElectronMajorVersion() >= 5;
}

function setSpellCheckProvider(locale, autoCorrectWord, provider) {
  if (requiresAsyncSpellCheckProvider()) {
    const asyncProvider = {
      spellCheck: (words, callback) => callback(words.filter(word => !provider.spellCheck(word)))
    };
    electron.webFrame.setSpellCheckProvider(locale, asyncProvider);
  } else {
    electron.webFrame.setSpellCheckProvider(locale, autoCorrectWord, provider);
  }
}

function replaceMisspelling(word) {
  electron.remote.getCurrentWebContents().replaceMisspelling(word);
}

module.exports = {
  setSpellCheckProvider,
  replaceMisspelling
};