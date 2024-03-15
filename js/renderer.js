const brightness = window.versions.brightness;
const loudness = window.versions.loudness;

const increaseBrightnessButton = document.getElementById("increase-brightness");
const decreaseBrightnessButton = document.getElementById("decrease-brightness");
const brightnessInfo = document.getElementById("brightness-info");

increaseBrightnessButton.addEventListener("click", async () => {
  const level = await brightness.get();
  const newLevel = Math.min(level + 0.1, 1);
  await brightness.set(newLevel);
  brightnessInfo.textContent = `Brightness has been increased to ${
    newLevel * 100
  }%`;
});

decreaseBrightnessButton.addEventListener("click", async () => {
  const level = await brightness.get();
  const newLevel = Math.max(level - 0.1, 0);
  await brightness.set(newLevel);
  brightnessInfo.textContent = `Brightness has been decreased to ${
    newLevel * 100
  }%`;
});

const increaseVolumeButton = document.getElementById("increase-volume");
const decreaseVolumeButton = document.getElementById("decrease-volume");
const volumeInfo = document.getElementById("volume-info");

increaseVolumeButton.addEventListener("click", async () => {
  const volume = await loudness.get();
  const newVolume = Math.min(volume + 5, 100);
  await loudness.set(newVolume);
  volumeInfo.textContent = `Volume has been increased to ${newVolume}%`;
});

decreaseVolumeButton.addEventListener("click", async () => {
  const volume = await loudness.get();
  const newVolume = Math.max(volume - 5, 0);
  await loudness.set(newVolume);
  volumeInfo.textContent = `Volume has been decreased to ${newVolume}%`;
});

// 初始显示亮度和音量
async function init() {
  const level = await brightness.get();
  brightnessInfo.textContent = `Current brightness: ${level * 100}%`;

  const volume = await loudness.get();
  volumeInfo.textContent = `Current volume: ${volume}%`;
}

init();
