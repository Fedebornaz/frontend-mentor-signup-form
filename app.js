const inputs = document.querySelectorAll("input");
const submitButton = document.querySelector("form button");
const emailInput = document.querySelector("#mail");
const form = document.querySelector("form");

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function handleSubmit(event) {
  form.firstChild.remove();
  event.preventDefault();

  const errorsDiv = document.createElement("div");
  errorsDiv.classList.add("errors");
  form.insertAdjacentElement("afterbegin", errorsDiv);

  const errors = [];

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      errors.push(`${input.placeholder} cannot be empty!`);
    }
  });

  if (emailInput.value.trim() !== "") {
    emailIsValid(emailInput.value)
      ? null
      : errors.push(`${emailInput.value} is not a valid email`);
  }

  const errorsList = document.createElement("ul");
  errors.forEach((error) => {
    const errorItem = document.createElement("li");
    errorItem.textContent = error;

    errorsList.appendChild(errorItem);
    errorsDiv.appendChild(errorsList);
  });
}

submitButton.addEventListener("click", handleSubmit);
