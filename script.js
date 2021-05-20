const inputLogin = document.getElementById('login');
const inputSenha = document.getElementById('senha');
const botaoLogar = document.getElementById('logar');

function login() {
  const loginCerto = 'tryber@teste.com';
  const senhaCerta = '123456';
  if (inputLogin.value === loginCerto && inputSenha.value === senhaCerta) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

botaoLogar.addEventListener('click', login);

const checkBox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

function activateSubmit() {
  if (checkBox.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

checkBox.addEventListener('click', activateSubmit);

const count = 500;
const divCounter = document.getElementById('counter');
divCounter.innerHTML = count;
const textBox = document.getElementById('textarea');

function countChar() {
  const textLength = textBox.value.length;
  divCounter.innerHTML = count - textLength;
}

textBox.addEventListener('keyup', countChar);

const searchParams = new URLSearchParams(window.location.search);
const queryName = searchParams.get('name')
const queryLastName = searchParams.get('lastname')
const queryEmail = searchParams.get('email')
const queryHouse = searchParams.get('casa')
const queryFamily = searchParams.get('family')
const queryConteudo = searchParams.getAll('conteudo')
const queryRate = searchParams.get('rate')
const queryComment = searchParams.get('comentario')

const inputName = document.getElementById('input-name')
const inputLastName = document.getElementById('input-lastname')
const inputEmail = document.getElementById('input-email')
const inputHouse = document.getElementById('house')
const inputLabelFamily = document.getElementById('label-family')
const inputLabelContent = document.getElementById('label-content')
const inputLabelRate = document.getElementById('label-rate')
const inputTextArea = document.getElementById('textarea')

inputName.value = queryName;
inputLastName.value = queryLastName;
inputEmail.value = queryEmail;
inputHouse.value = queryHouse;
inputLabelFamily.value = queryFamily;
inputLabelContent.value = queryConteudo;
inputLabelRate.value = queryRate;
inputTextArea.value = queryComment;

// console.log(queryFamily)
const radioButtonFamily = document.querySelectorAll('input[name="family"]')
for(const radioButton of radioButtonFamily) {
  if(queryFamily && radioButton.id === queryFamily.toLowerCase()) {
    radioButton.checked = true;
  }
  // console.log(radioButton.id)
}

const radioButtonRate = document.querySelectorAll('input[name="rate"]')
for(const radioButton of radioButtonRate) {
  if(radioButton.id.split('-')[1] === queryRate) {
    radioButton.checked = true;
  }
  // console.log(radioButton.id)
  // console.log(radioButton.id.split('-')[1])
}

const checkBoxContent = document.querySelectorAll('input[name="conteudo"]')
// console.log(checkBoxContent)

for(let i = 0; i < queryConteudo.length; i += 1) {queryConteudo[i] = queryConteudo[i].toLowerCase()}
console.log('queryConteudo',queryConteudo)
for(const singleCheckBox of checkBoxContent) {
  // console.log('singleCheckBox', singleCheckBox)
  if(queryConteudo.includes(singleCheckBox.id.toLowerCase())) {
    singleCheckBox.checked = true;
  }
}