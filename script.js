function alerta() {
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  const botaoLogar = document.getElementById("logar");
  botaoLogar.addEventListener("click", () => {
    if (email.value !== "tryber@teste.com" || senha.value !== "123456") {
      alert("Login ou senha inválidos.");
    } else {
      alert("Olá, Tryber!");
    }
  });
}

function submit() {
  const concorda = document.getElementById("agreement");
  const botaoEnviar = document.getElementById("submit-btn");
  concorda.addEventListener("click", () => {
    if (concorda.checked === true) {
      botaoEnviar.disabled = false;
    } else {
      botaoEnviar.disabled = true;
    }
  });
}

window.onload = function load() {
  alerta();
  submit();
};
