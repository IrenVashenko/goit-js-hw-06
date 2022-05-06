function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const textSpan = document.querySelector('.color')
btn.addEventListener("click", () => {
  textSpan.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor()
});
