let loginButton = document.querySelector("#login-button");
let loginInput = document.querySelector("#login-input");
let passInput = document.querySelector("#pass-input");
let escolheCasa = document.querySelector("#house");

escolherCasa();

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (loginInput.value != "tryber@teste.com" || passInput.value != "123456") {
    alert("Login ou senha inválidos.");
  } else {
    alert("Olá, Tryber!");
    loginInput.value = "";
    passInput.value = "";
  }
});

function escolherCasa() {
  let casas = [
    { casa: 'Gitnória', id: 'gitnoria-house'},
    { casa: 'Reactpuff', id: 'reactpuff-house' },
    { casa: 'Corvinode', id: 'corvinode-house' },
    { casa: 'Pytherina', id: 'pytherina-house' },
  ];

  for (let index = 0; index < casas.length; index += 1) {
    let novaCasa = document.createElement("option");
    novaCasa.innerHTML = casas[index].casa;
    novaCasa.id = casas[index].id;
    escolheCasa.appendChild(novaCasa);
  }
}
