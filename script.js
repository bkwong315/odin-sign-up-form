const password = document.querySelector("#user-password");
const confirmPassword = document.querySelector("#confirm-password");
const submitBtn = document.querySelector("button[type='submit']");
const span = document.querySelector("label[for='user-password'] ~ span");

confirmPassword.addEventListener("change", (e) => {
  if (password.value !== confirmPassword.value) {
    password.classList.add("invalid");
    confirmPassword.classList.add("invalid");
    span.style.display = "block";
  } else {
    password.classList.remove("invalid");
    confirmPassword.classList.remove("invalid");
    span.style.display = "none";
  }
});

submitBtn.addEventListener("click", (e) => {
  if (password.classList.contains("invalid")) e.preventDefault();
});
