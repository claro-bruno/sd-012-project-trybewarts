const getEmail = document.querySelector("#email");
const getPassword = document.querySelector("#password");
const getButtunLogin = document.querySelector("#btn-login");

const getHouse = document.querySelector("#house");
let tiposCasa = [
  { valor: "Gitnória", id: "gitnoria-house" },
  { valor: "Reactpuff", id: "reactpuff-house" },
  { valor: "Corvinode", id: "corvinode-house" },
  { valor: "Pytherina", id: "pytherina-house" },
];

const getFamilyContainer = document.querySelector(".family-container");
let valoresFamily = [
  { valor: "Frontend" },
  { valor: "Backend" },
  { valor: "FullStack" },
];

const getLearnTechnology = document.querySelector(
  ".learn-technology-container"
);
let itemLearnTechnology = [
  { valor: "HoFs" },
  { valor: "Jest" },
  { valor: "Promises" },
  { valor: "React" },
  { valor: "SQL" },
  { valor: "Python" },
];

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

// Lista de seleção casa
function criaOpcaoCasa() {
  for (const tipo of tiposCasa) {
    const opcao = document.createElement("option");
    opcao.value = tipo.valor;
    opcao.innerText = tipo.valor;
    opcao.id = tipo.id;
    getHouse.appendChild(opcao);
  }
}

//---Botão radio familia---

// Cria a div dos radios
function criaRadioContainer(nomeClasse, elementoConteiner) {
  let div = document.createElement("div");
  div.className = nomeClasse;
  elementoConteiner.appendChild(div);
}

// Cria rotulo dos botão radio
function criaLabelFamily(textoLabel) {
  let div = document.querySelector("." + textoLabel);
  let label = document.createElement("label");
  label.setAttribute("for", textoLabel);
  label.innerText = textoLabel;
  div.appendChild(label);
}

// Cria e adiciona os botões radio
function criaRadioBotaoFamilia() {
  for (const family of valoresFamily) {
    criaRadioContainer(family.valor, getFamilyContainer);
    let divRadio = document.querySelector(`.${family.valor}`);
    let radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.value = family.valor;
    radio.setAttribute("name", "family");
    radio.id = family.valor;
    divRadio.appendChild(radio);
    criaLabelFamily(family.valor);
  }
}

// Criando checkbox
function createListLearnTechnology() {
  for (const item of itemLearnTechnology) {
    criaRadioContainer(item.valor, getLearnTechnology);
    let getDiv = document.querySelector(`.${item.valor}`);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", item.valor);
    checkbox.className = "subject";
    checkbox.id = item.valor;
    getDiv.appendChild(checkbox);
    criaLabelFamily(item.valor);
  }
}

getButtunLogin.addEventListener(
  "click",
  verificarLogin(getEmail.value, getPassword.value)
);
createListLearnTechnology();
criaOpcaoCasa();
criaRadioBotaoFamilia();
