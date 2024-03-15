const brightness = window.versions.brightness;
const loudness = window.versions.loudness;
const packageVersion = window.versions.packageVersion;

/// 版本号
const versionInfo = document.getElementById("version-info");
function showVersion() {
  versionInfo.textContent = `版本号: ${packageVersion}`;
}

/// 亮度控制
const increaseBrightnessButton = document.getElementById("increase-brightness");
const decreaseBrightnessButton = document.getElementById("decrease-brightness");
const brightnessInfo = document.getElementById("brightness-info");

increaseBrightnessButton.addEventListener("click", async () => {
  const level = await brightness.get();
  const newLevel = Math.min(level + 0.1, 1);
  await brightness.set(newLevel);
  brightnessInfo.textContent = `亮度已增加到 ${newLevel * 100}%`;
});

decreaseBrightnessButton.addEventListener("click", async () => {
  const level = await brightness.get();
  const newLevel = Math.max(level - 0.1, 0);
  await brightness.set(newLevel);
  brightnessInfo.textContent = `亮度已降低到 ${newLevel * 100}%`;
});

/// 音量控制
const increaseVolumeButton = document.getElementById("increase-volume");
const decreaseVolumeButton = document.getElementById("decrease-volume");
const volumeInfo = document.getElementById("volume-info");

increaseVolumeButton.addEventListener("click", async () => {
  const volume = await loudness.get();
  const newVolume = Math.min(volume + 5, 100);
  await loudness.set(newVolume);
  volumeInfo.textContent = `音量已增加到 ${newVolume}%`;
});

decreaseVolumeButton.addEventListener("click", async () => {
  const volume = await loudness.get();
  const newVolume = Math.max(volume - 5, 0);
  await loudness.set(newVolume);
  volumeInfo.textContent = `音量已降低到 ${newVolume}%`;
});

// 初始显示亮度和音量
async function init() {
  showVersion();

  const level = await brightness.get();
  brightnessInfo.textContent = `当前亮度: ${level * 100}%`;

  const volume = await loudness.get();
  volumeInfo.textContent = `当前音量: ${volume}%`;
}

init();
