const brightness = window.versions.brightness;
const loudness = window.versions.loudness;

const increaseBrightnessButton = document.getElementById("increase-brightness");
const decreaseBrightnessButton = document.getElementById("decrease-brightness");
const brightnessInfo = document.getElementById("brightness-info");

increaseBrightnessButton.addEventListener("click", async () => {
  let level = await brightness.get();
  let newLevel = Math.min(level + 0.1, 1);
  await brightness.set(newLevel);
  brightnessInfo.textContent = `Brightness has been increased to ${
    newLevel * 100
  }%`;
});

decreaseBrightnessButton.addEventListener("click", async () => {
  let level = await brightness.get();
  let newLevel = Math.max(level - 0.1, 0);
  await brightness.set(newLevel);
  brightnessInfo.textContent = `Brightness has been decreased to ${
    newLevel * 100
  }%`;
});

const increaseVolumeButton = document.getElementById("increase-volume");
const decreaseVolumeButton = document.getElementById("decrease-volume");
const volumeInfo = document.getElementById("volume-info");

increaseVolumeButton.addEventListener("click", async () => {
  let volume = await loudness.get();
  let newVolume = Math.min(volume + 10, 100);
  await loudness.set(newVolume);
  volumeInfo.textContent = `Volume has been increased to ${newVolume}%`;
});

decreaseVolumeButton.addEventListener("click", async () => {
  let volume = await loudness.get();
  let newVolume = Math.max(volume - 10, 0);
  await loudness.set(newVolume);
  volumeInfo.textContent = `Volume has been decreased to ${newVolume}%`;
});

// 初始显示亮度和音量
async function init() {
  let level = await brightness.get();
  brightnessInfo.textContent = `Current brightness: ${level * 100}%`;

  let volume = await loudness.get();
  volumeInfo.textContent = `Current volume: ${volume}%`;
}

init();
