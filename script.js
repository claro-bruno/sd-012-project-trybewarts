const loginName = document.getElementById('login');
const loginSenha = document.getElementById('senha');
const logarBtn = document.getElementById('logar');
const sendBtn = document.getElementById('submit-btn');
const agreeCb = document.getElementById('agreement');
const counter = document.getElementById('counter');
const freeText = document.getElementById('textarea');

sendBtn.disabled = true;

function validaçãoLogin(event) {
  console.log(loginName, loginSenha);
  if (loginName.value === 'tryber@teste.com' && loginSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    event.preventDefault();
    alert('Login ou senha inválidos.');
  }
}

logarBtn.addEventListener('click', validaçãoLogin);

function sendForm() {
  if (agreeCb.checked) { sendBtn.disabled = false; } else { sendBtn.disabled = true; }
}

agreeCb.addEventListener('click', sendForm);

function countChar() {
  counter.innerText = `${500 - freeText.value.length}/500`;
  console.log(counter.value);
}

freeText.addEventListener('keyup', countChar);

window.onload = countChar;
