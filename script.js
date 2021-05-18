let getEmail = document.querySelector("#email");
let getPassword = document.querySelector("#password");
let getButtunLogin = document.querySelector("#btn-login");

function verificarLogin(email, password) {
  let emailCerto = "tryber@teste.com";
  let passwordCerto = "123456";
  console.log(email, password);
  if (email === emailCerto && password === passwordCerto) {
    // alert("Olá, Tryber!");
  } else {
    // alert("Login ou senha inválidos.");
  }
  console.log(getEmail.value, getPassword.value);
}
getButtunLogin.addEventListener(
  "click",
  verificarLogin(getEmail.value, getPassword.value)
);
