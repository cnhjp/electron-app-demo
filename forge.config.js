const path = require("path");

module.exports = {
  packagerConfig: {
    // 桌面图标
    icon: path.join(__dirname, "image", "mario.ico"),
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        // certificateFile: "./cert.pfx",
        // certificatePassword: process.env.CERTIFICATE_PASSWORD,
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
