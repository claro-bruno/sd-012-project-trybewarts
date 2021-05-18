const getEmail = document.querySelector("#email");
const getPassword = document.querySelector("#password");
const getButtunLogin = document.querySelector("#btn-login");
const getHouse = document.querySelector("#house");
let tiposCasa = [{valor: 'Gitnória', id: 'gitnoria-house'}, {valor: 'Reactpuff', id: 'reactpuff-house'}, {valor: 'Corvinode', id: 'corvinode-house'}, {valor: 'Pytherina', id: 'pytherina-house'}];

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

function criaOpcaoCasa() {
  for (const tipo of tiposCasa) {
    const opcao = document.createElement('option');
    opcao.value = tipo.valor;
    opcao.innerText = tipo.valor;
    opcao.id = tipo.id;
    getHouse.appendChild(opcao);
  }
}

getButtunLogin.addEventListener(
  "click",
  verificarLogin(getEmail.value, getPassword.value)
);

criaOpcaoCasa();