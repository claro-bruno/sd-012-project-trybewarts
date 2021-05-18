const form = document.getElementById("login-form");
const loginButton = document.getElementById("loginButton");
let loginInput = document.getElementById("login-input");
let passwordInput = document.getElementById("senha-input");

function stopDefAction(event) {
  event.preventDefault();

  if (loginInput.value === "tryber@teste.com" && passwordInput.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }

}

loginButton.addEventListener("click", stopDefAction)
