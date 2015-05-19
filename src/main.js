'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var globalShortcut = require('global-shortcut');

// start the crash reporter
require('crash-reporter').start();

// create a global variable for the main Window
var mainWindow = null;

// quit when all windows are closed except on OS X
app.on('window-all-closed', function() {
  if(process.platform != 'darwin') { app.quit(); }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1110, height:640});
  mainWindow.loadUrl('https://play.google.com/music');

  // register shortcusts for the media keys
  globalShortcut.register('medianexttrack', function() {
    mainWindow.webContents.executeJavaScript('document.querySelector(\'sj-icon-button[data-id="forward"]\').click();');
  });
  
  globalShortcut.register('mediaplaypause', function() {
    mainWindow.webContents.executeJavaScript('document.querySelector(\'sj-icon-button[data-id="play-pause"]\').click();');
  });

  globalShortcut.register('mediaprevioustrack', function() {
    mainWindow.webContents.executeJavaScript('document.querySelector(\'sj-icon-button[data-id="rewind"]\').click();');
  });

  mainWindow.on('closed', function() {
    mainWindow = null;
  })
});
