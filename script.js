const login = document.getElementById("login-form")
const loginButton = document.getElementById("loginButton")

loginButton.addEventListener("click", (e) {
  const username = login.username.value;
  const password = login.password.value;

  if (username === "tryber@teste.com" && password === "123456") {
    alert("Olá, Tryber!")
  } else {
    alert("Login ou senha inválidos")
  }
}