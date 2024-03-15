const { app, BrowserWindow, ipcMain } = require("electron/main");
const path = require("node:path");
// require("update-electron-app")();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "js", "preload.js"),
      nodeIntegration: true,
    },
  });
  win.loadFile("index.html");

  console.log(process.env.DEV_TOOLS, "-------------------");
  if (process.env.DEV_TOOLS === "true") {
    win.webContents.openDevTools();
  }
};

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong");
  createWindow();
});
