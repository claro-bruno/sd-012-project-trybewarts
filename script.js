const emailLogin = document.getElementById('email-login');
const senhaLogin = document.getElementById('senha-login');
const submitLogin = document.querySelector('.submit-login');
const formLogin = document.getElementById('form-login');
const submitAll = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const emailPadrao = 'tryber@teste.com';
const senhaPadrao = '123456';

formLogin.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('formulário enviado');
});

function validaLogin() {
  if (emailLogin.value === emailPadrao && senhaLogin.value === senhaPadrao) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

submitLogin.addEventListener('click', validaLogin);

// exercicio feito com auxilio do repositorio do colega thales e matheus <3
function disabled() {
  if (!checkbox.checked) {
    submitAll.setAttribute('disabled', true);
  } else {
    submitAll.removeAttribute('disabled');
  }
}

checkbox.addEventListener('click', disabled);
