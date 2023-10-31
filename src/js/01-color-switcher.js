const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
let isActive = false;
let intervalColor;

startBtnEl.addEventListener('click', showColor);

function showColor() {
  if (isActive) {
    return;
  }
  intervalColor = setInterval(() => {
    const newColor = getRandomHexColor();
    startBtnEl.parentNode.style.backgroundColor = newColor;
    isActive = true;
  }, 1000);
}

stopBtnEl.addEventListener('click', () => {
  clearInterval(intervalColor);
  isActive = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
