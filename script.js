const login = document.getElementById('login-input');
const senha = document.getElementById('senha-input');
const logar = document.getElementById('logar-button');

function validaLogar() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

logar.addEventListener('click', validaLogar);

const check = document.getElementById('agreement');
const send = document.getElementById('submit-btn');
send.disabled = true;

function validarBotao() {
  if (check.checked) {
    send.disabled = false;
  }
}

check.addEventListener('click', validarBotao);

const text = document.getElementById('textarea');

function caracters() {
  const count = 500;
  const remaning = count - text.value.length;
  return remaning;
}

const counter = document.getElementById('counter');

function criaContador() {
  const paragrafo = document.createElement('p');
  paragrafo.innerHTML = caracters();
  counter.innerHTML = caracters();
}

criaContador();

text.addEventListener('keyup', criaContador, false);
