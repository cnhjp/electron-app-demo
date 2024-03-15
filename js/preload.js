const { contextBridge, ipcRenderer } = require("electron");
const package = require("../package.json");
const brightness = require("brightness");
const loudness = require("loudness");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"),
  // 除函数之外，我们也可以暴露变量
  packageVersion: package.version,
  brightness: {
    get: brightness.get,
    set: brightness.set,
  },
  loudness: {
    get: loudness.getVolume,
    set: loudness.setVolume,
  },
});
