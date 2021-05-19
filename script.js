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
