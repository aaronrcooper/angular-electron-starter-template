import {app, BrowserWindow} from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow;

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // flag to enable application to use Node
      nodeIntegration: true
    }
  });

  win.loadURL(url.format({
    // If your folder structure is different, you will need to modify the path name
    pathname: '/../../dist/angular-electron-starter-template/index.html',
    protocol: 'file:',
    slashes: true
  }));

  // Enable to use Chromium dev tools
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}
