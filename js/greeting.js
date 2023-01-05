const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#login-h1");

const currentUser = "username";
const HIDDEN = "hide";

function handleSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN);
  const currentValue = loginInput.value;
  localStorage.setItem(currentUser, currentValue);
  paint(currentValue);
}

function paint(username) {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN);
}

const savedUser = localStorage.getItem(currentUser);

if (savedUser === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", handleSubmit);
} else {
  paint(savedUser);
}
