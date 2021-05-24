const clickButton = document.querySelector('#click');
const login = document.querySelector('#loginSpace');
const password = document.querySelector('#senhaSpace');

function alertClick() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

clickButton.addEventListener('click', alertClick);

const send = document.querySelector('#submit-btn');
const check = document.querySelector('#agreement');

send.disabled = true;

function sendClick() {
  if (check.checked) {
    send.disabled = false;
  }
}

check.addEventListener('click', sendClick);
