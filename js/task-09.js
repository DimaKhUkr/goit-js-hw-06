function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChangeColor = document.querySelector(".change-color");
const outputChangeColor = document.querySelector(".color");
const bodyChangeColor = document.querySelector("body");

btnChangeColor.addEventListener("click", onbtnChangeColor);

function onbtnChangeColor() {
  outputChangeColor.textContent = getRandomHexColor();
  // console.log(outputChangeColor.textContent);
  bodyChangeColor.style.backgroundColor = outputChangeColor.textContent;
}
