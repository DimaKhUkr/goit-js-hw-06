let counterValue = 0;
const valueEL = document.querySelector("#value");
console.log(valueEL);
const decrementBtn = document.querySelector("[data-action=decrement]");
console.log(decrementBtn);
const incrementBtn = document.querySelector("[data-action=increment]");
console.log(incrementBtn);

const onIncrementValue = () => {
  console.log("jmak+");
  counterValue += 1;
  valueEL.textContent = counterValue;
  console.log(counterValue);
};
const onDecrementValue = () => {
  console.log("jmak-");
  counterValue -= 1;
  console.log(counterValue);
  valueEL.textContent = counterValue;
};
decrementBtn.addEventListener("click", onDecrementValue);

incrementBtn.addEventListener("click", onIncrementValue);
