const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmitFormSend);

function onSubmitFormSend(event) {
  event.preventDefault();
  //   const {
  //     elements: { email, password },
  //   } = event.currentTarget;

  const formEl = event.currentTarget.elements;
  //   //   console.log(formEl);
  const { email, password } = formEl;
  if (email.value.length < 1 || password.value < 1) {
    return alert("Please enter the correct data");
  }
  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);
  form.reset();
}
