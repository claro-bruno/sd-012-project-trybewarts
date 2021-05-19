const button = document.querySelector('.submit-btn');

function login() {
  const email = document.querySelector('.email-input').value;
  const senha = document.querySelector('.senha-input').value;

  if (email !== 'tryber@teste.com' || senha !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

button.addEventListener('click', login);

const checkbox = document.getElementById('agreement');

function hability() {
  if (checkbox.checked === true) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}

checkbox.addEventListener('click', hability);

const form = document.getElementsByClassName('form-data');
const btnForm = document.querySelector('#submit-btn');
const nome = document.getElementsByClassName('nome-completo')[0].children;
const main = document.getElementsByClassName('main');

function captureElements() {
  let nomeCompleto = document.createElement('li');
  nomeCompleto.innerHTML = 'Nome: ';
  for (let index = 0; index < nome.length; index += 1) {
    nomeCompleto.innerHTML += nome[index].value + ' ';
  }
  main[0].appendChild(nomeCompleto);
}

function formChange() {
  for (let indexForm = 0; indexForm < form.length; indexForm += 1) {
    form[indexForm].remove();
  }
}

btnForm.addEventListener('click', captureElements);
btnForm.addEventListener('click', formChange);

/* Código do desafio 20 */

let valorContador = 500;
const comentario = document.querySelector('#textarea');
const contador = document.querySelector('#counter');

function contaCaracter() {
  valorContador = (500 - comentario.value.length);
  contador.innerHTML = valorContador;
}

comentario.addEventListener('keyup', contaCaracter);
