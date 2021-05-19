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

/* Código do desafio 20 */

let valorContador = 500;
const comentario = document.querySelector('#textarea');
const contador = document.querySelector('#counter');

function contaCaracter() {
  valorContador = (500 - comentario.value.length);
  contador.innerHTML = valorContador;
}

comentario.addEventListener('keyup', contaCaracter);
