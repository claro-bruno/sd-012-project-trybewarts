/* eslint-disable no-unused-vars */
// Funcao para executar o butao logar
const selectButtonLogin = document.querySelector('.botaoLogin');
const selectLogin = document.querySelector('#login');
const selectPassword = document.querySelector('#senha');

function verificarLogin() {
  if (
    selectLogin.value === 'tryber@teste.com'
  ) {
    alert('Olá, Tryber!');
  } else if (selectPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

selectButtonLogin.addEventListener('click', verificarLogin);

// funcao para executar subimit do checkbox
const selectButtonSubmit = document.querySelector('#submit-btn');
const checkBox = document.querySelector('#agreement');
selectButtonSubmit.disabled = true;

function verificaCheckbox() {
  if (checkBox.checked === true) {
    selectButtonSubmit.disabled = false;
  } else {
    selectButtonSubmit.disabled = true;
  }
}
checkBox.addEventListener('click', verificaCheckbox);

// Contador caracteres:
const selectTextArea = document.querySelector('#textarea');
const selectCounter = document.querySelector('#counter');

function verificaCaracteres() {
  const maxCaracters = 500;
  const numerosCaracteres = selectTextArea.value.length;
  selectCounter.innerHTML = `Caracteres Disponíveis: ${maxCaracters - numerosCaracteres}`;
}

selectTextArea.addEventListener('keyup', verificaCaracteres);
