const path = require("path");

module.exports = {
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        // 桌面图标
        icon: path.join(__dirname, "image", "duck.ico"),
        // 窗口加载中的图标
        setupIcon: path.join(__dirname, "image", "mario.ico"),
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "cnhjp",
          name: "electron-app-demo",
        },
        prerelease: false,
        draft: true,
      },
    },
  ],
};
