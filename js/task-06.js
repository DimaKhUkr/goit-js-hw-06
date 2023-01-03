const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  //   console.log("by");
  //   console.log(input.dataset.length);
  //   console.log(event.currentTarget.value.length);
  const isEqualValue =
    Number(input.dataset.length) === event.currentTarget.value.length;
  isEqualValue ? validDataSet() : invalidDataSet();
  //   console.log(
  //     Number(input.dataset.length) === event.currentTarget.value.length
  //   );
}
function validDataSet() {
  input.classList.add("valid");
  input.classList.remove("invalid");
}

function invalidDataSet() {
  input.classList.add("invalid");
  input.classList.remove("valid");
}
