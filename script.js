const getEmail = document.querySelector('#email');
const getPassword = document.querySelector('#password');
const getButtunLogin = document.querySelector('#btn-login');
const getCheckbox = document.querySelector('#agreement');
const getButtonSubmit = document.querySelector('#submit-btn');

const getHouse = document.querySelector('#house');
const tiposCasa = [
  { valor: 'Gitnória', id: 'gitnoria-house' },
  { valor: 'Reactpuff', id: 'reactpuff-house' },
  { valor: 'Corvinode', id: 'corvinode-house' },
  { valor: 'Pytherina', id: 'pytherina-house' },
];

const getFamilyContainer = document.querySelector('.family-container');
const valoresFamily = [
  { valor: 'Frontend' },
  { valor: 'Backend' },
  { valor: 'FullStack' },
];

const getLearnTechnology = document.querySelector('.learn-technology-container');
const itemLearnTechnology = [
  { valor: 'HoFs' },
  { valor: 'Jest' },
  { valor: 'Promises' },
  { valor: 'React' },
  { valor: 'SQL' },
  { valor: 'Python' },
];

let getToAssess = document.querySelector(".to-assess");

function verificarLogin() {
  let emailCerto = "tryber@teste.com";
  let passwordCerto = "123456";
  if (getEmail.value === emailCerto && getPassword.value === passwordCerto) {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
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

// criando avaliador de 1 a 10;

function creatLabel(number) {
  let getDiv = document.querySelector(`.number-${number}`);
  let createLabel = document.createElement("label");
  createLabel.setAttribute("for", number);
  createLabel.innerText = number;
  getDiv.appendChild(createLabel);
}

function createToAssess() {
  for (let index = 1; index <= 10; index += 1) {
    criaRadioContainer("number-" + index, getToAssess);
    let getDiv = document.querySelector(`.number-${index}`);
    let criaRadio = document.createElement("input");
    criaRadio.setAttribute("type", "radio");
    criaRadio.setAttribute("value", index);
    criaRadio.setAttribute("name", "rate");
    criaRadio.id = index;
    getDiv.appendChild(criaRadio);
    creatLabel(index);
  }
}

getButtunLogin.addEventListener(
  'click',
  verificarLogin
);

getCheckbox.addEventListener('click', () => {
  getButtonSubmit.disabled = !getCheckbox.checked;
});

createToAssess();
createListLearnTechnology();
criaOpcaoCasa();
criaRadioBotaoFamilia();
