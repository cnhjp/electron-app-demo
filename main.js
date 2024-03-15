const { app, BrowserWindow, ipcMain } = require("electron/main");
const path = require("node:path");
const { updateElectronApp } = require("update-electron-app");

updateElectronApp();

const createWindow = () => {
  const win = new BrowserWindow({
    // 运行时的图标
    icon: path.join(__dirname, "image", "icon.png"),
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "js", "preload.js"),
      nodeIntegration: true,
    },
  });
  win.loadFile("index.html");

  if (process.env.DEV_TOOLS === "true") {
    win.webContents.openDevTools();
  }
};

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong");
  createWindow();
});
