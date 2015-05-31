'use strict';

var app = require('app');
var clipboard = require('clipboard');
var BrowserWindow = require('browser-window');
var globalShortcut = require('global-shortcut');

// start the crash reporter
require('crash-reporter').start();
// create a global variable for the main Window
var mainWindow = null;
// a flag that indicates if the user is quitting the app
// we use this on the browser window close event to
var willQuit = false;

app.on('ready', function() {
  // load jquery
  mainWindow = new BrowserWindow({width: 1110, height:640});
  mainWindow.loadUrl('https://play.google.com/music');

  mainWindow.on('close', function(e) {
    if (willQuit) { return true; }
    e.preventDefault();
    mainWindow.hide();
  });

  // register shortcusts for the media keys
  globalShortcut.register('medianexttrack', function() {
    mainWindow.webContents.executeJavaScript('document.querySelector(\'sj-icon-button[data-id="forward"]\').click();');
  });

  globalShortcut.register('mediaplaypause', function() {
    mainWindow.webContents.executeJavaScript('document.querySelector(\'sj-icon-button[data-id="play-pause"]\').click();');
  })

  globalShortcut.register('mediaprevioustrack', function() {
    mainWindow.webContents.executeJavaScript('document.querySelector(\'sj-icon-button[data-id="rewind"]\').click();');
  });
});

app.on('before-quit', function() {
  willQuit = true;
});

app.on('activate-with-no-open-windows', function() {
  mainWindow.show();
});