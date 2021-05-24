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

// // Substituicao Formulario
// const selectName = document.querySelector('#input-name');
// const selectLastName = document.querySelector('#input-lastname');
// const selectEmail = document.querySelector('#input-email');
// const selectFrontEnd = document.querySelector('#frontend');
// const selectBackEnd = document.querySelector('#backend');
// const selectFullStack = document.querySelector('#fullstack');
// const selectSubject = document.querySelectorAll('.subject');
// const selectRate = document.querySelectorAll('#rate');

// function armazenarFamilia() {
//   let resposta = '';
//   if (selectFrontEnd.checked === true) {
//     resposta = selectFrontEnd.value;
//   } else if (selectBackEnd.checked === true) {
//     resposta = selectBackEnd.value;
//   } else {
//     resposta = selectFullStack.value;
//   }
//   return resposta;
// }

// function armazenarConteudo() {
//   const resultado = [];
//   for (let index = 0; index < selectSubject.length; index += 1) {
//     if (selectSubject.checked === true) {
//       resultado.push(selectSubject[index]);
//     }
//   }
//   return resultado;
// }

// function armazenarAvaliacao() {
//   let resultado;
//   for (let index = 0; index < selectRate.length; index += 1) {
//     if (selectRate[index].checked === true) {
//       resultado = selectRate[index].value;
//     }
//   }
//   return resultado;
// }
// function substituirForm(event) {
//   event.preventDefault();
//   const armazenarName = selectName.value;
//   const armazenarLastName = selectLastName.value;
//   const armazenarEmail = selectEmail.value;
// }
// selectButtonSubmit.addEventListener('click', substituirForm);
