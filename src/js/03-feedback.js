import "../css/feedback.css";

const form = document.querySelector(".feedback-form");
const obj = {};
form.addEventListener("input", SaveData);
form.addEventListener("submit", onSubmit);
function SaveData(e) {
  obj[e.target.name] = e.target.value;

  localStorage.setItem("data", JSON.stringify(obj));
}

function setDataAfterReload() {
  const data = JSON.parse(localStorage.getItem("data"));

  if (data.email != "" && data.hasOwnProperty("email")) {
    form.querySelector('input[name="email"]').value = data.email;
  }

  if (data.message != "" && data.hasOwnProperty("message")) {
    form.querySelector('textarea[name="message"]').value = data.message;
  }
}

function onSubmit(e) {
  e.preventDefault();

  form.querySelector('input[name="email"]').value = "";
  form.querySelector('textarea[name="message"]').value = "";
  localStorage.removeItem("data");
}
setDataAfterReload();

