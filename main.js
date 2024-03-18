const { app, BrowserWindow, ipcMain, screen } = require("electron/main");
const path = require("node:path");
const { updateElectronApp } = require("update-electron-app");

// 自动更新
updateElectronApp();

const createWindow = () => {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;

  const win = new BrowserWindow({
    // 运行时的图标
    icon: path.join(__dirname, "image", "icon.png"),
    width: width * 0.7,
    height: height * 0.7,
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
