const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

input.addEventListener("input", onInputEnterText);

function onInputEnterText(event) {
  output.textContent = event.currentTarget.value;
  // console.dir(event.currentTarget);
  if (event.currentTarget.value.length === 0) {
    output.textContent = "Anonymous";
  }
}
