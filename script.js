let selectButton = document.querySelector(".botaoSubmit");
let selectLogin = document.querySelector("#login");
let selectPassword = document.querySelector("#senha");

selectButton.addEventListener("click", function () {
  if (
    selectLogin.value === "tryber@teste.com" &&
    selectPassword.value === "123456"
  ) {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
});
