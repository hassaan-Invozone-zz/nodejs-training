const noteForm = document.querySelector("#noteForm");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const dob = document.querySelector("#dob");

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (savedId) {
    updateNote(savedId, name.value, email.value,password.value,dob.value);
  } else {
    saveNote(name.value, email.value,password.value,dob.value);
  }

  name.value = "";
  email.value = "";
  password.value = "";
  dob.value = "";

  name.focus();
});
