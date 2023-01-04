function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const input = document.querySelector("[data-input]");
const box = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", onInputCreateDir);
btnDestroyEl.addEventListener("click", destroyBoxes);

// function chekInput() {
//   if (input.value > 100 || input.value < 1) {
//     return alert("Please input number from 1 to 100");
//   }
// }

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i <= amount - 1; i += 1) {
    const box = `<div style="width: ${30 + i * 10}px; height: ${
      30 + i * 10
    }px; background-color:${getRandomHexColor()}"></div>`;
    boxes.push(box);
  }
  // console.dir(boxes);
  return boxes;
}

function onInputCreateDir() {
  if (input.value > 100 || input.value < 1) {
    return alert("Please input number from 1 to 100");
  }
  const stringDirList = createBoxes(input.value).join("");
  // console.log(stringDirList);
  box.innerHTML = stringDirList;
}

function destroyBoxes() {
  input.value = "";
  box.innerHTML = "";
}
