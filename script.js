const password = document.getElementById('password');
const correctPassword = '123456';
const login = document.getElementById('login');
const correctLogin = 'tryber@teste.com';
const logar = document.getElementById('login-button');
const agreeBox = document.getElementById('agreement');

function verifyLogin() {
  if (password.value === correctPassword && login.value === correctLogin) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

logar.addEventListener('click', verifyLogin);

function ableButton() {
  const button = document.getElementById('submit-btn');
  if (agreeBox.checked === true) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', 'disabled');
  }
}

agreeBox.addEventListener('click', ableButton);

const submitButton = document.getElementById('submit-btn');

function createDivs(event) {
  event.preventDefault();
  createFullName();
  createEmail();
  createHouse();

}

function createFullName() {
  const nome = document.querySelector('#input-name');
  const sobrenome = document.querySelector('#input-lastname');
  const nomeCompleto = nome.value + ' ' + sobrenome.value;
  document.querySelector('#input-name').remove();
  document.querySelector('#input-lastname').remove();
  document.querySelector('[for=input-name]').innerHTML = 'Nome: ' + nomeCompleto;
}

function createEmail() {
  const email = document.querySelector('#input-email');
  document.querySelector('[for=input-email]').innerHTML = 'Email: ' + email.value;
  document.querySelector('#input-email').remove();
}

function createHouse() {
  const house = document.querySelector('#house');
  document.querySelector('[for=house]').innerHTML = 'Casa: ' + house.value;
  document.querySelector('#house').remove();
}

function createFamily() {
  const family = document.querySelectorAll('[name=family]');
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      document.querySelector('#label-family').innerHTML = 'Família: ' + family[index].value;
    }
  }
  
}

submitButton.addEventListener('click', createDivs);