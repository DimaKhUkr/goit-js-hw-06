const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

input.addEventListener("input", onInputEnterText);

function onInputEnterText(event) {
  // console.log(event.currentTarget.value);
  event.currentTarget.value = event.currentTarget.value.trimStart();
  output.textContent = event.currentTarget.value;
  // console.log(output.textContent.trim());
  // console.log(event.currentTarget.value.trim().length);
  // console.dir(event.currentTarget);
  if (
    event.currentTarget.value.length === 0 ||
    event.currentTarget.value.trim().length === 0
  ) {
    output.textContent = "Anonymous";
  }
}

