const password = document.getElementById('password');
const correctPassword = '123456';
const login = document.getElementById('login');
const correctLogin = 'tryber@teste.com';
const logar = document.getElementById('login-button');
const agreeBox = document.getElementById('agreement');
const userChar = document.getElementById('textarea');

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

function createFullName() {
  const nome = document.querySelector('#input-name');
  const sobrenome = document.querySelector('#input-lastname');
  const nomeCompleto = `${nome.value} ${sobrenome.value}`;
  document.querySelector('#input-name').remove();
  document.querySelector('#input-lastname').remove();
  document.querySelector('[for=input-name]').innerHTML = `Nome: ${nomeCompleto}`;
}

function createEmail() {
  const email = document.querySelector('#input-email');
  document.querySelector('[for=input-email]').innerHTML = `Email: ${email.value}`;
  document.querySelector('#input-email').remove();
}

function createHouse() {
  const house = document.querySelector('#house');
  document.querySelector('[for=house]').innerHTML = `Casa: ${house.value}`;
  document.querySelector('#house').remove();
}

function createFamily() {
  const family = document.querySelectorAll('[name=family]');
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      document.querySelector('#label-family').innerHTML = `Família: ${family[index].value}`;
    }
  }
  for (let index = 0; index < family.length; index += 1) {
    document.querySelector('.container-radio').lastElementChild.remove();
  }
}

function createMateria() {
  const materia = document.querySelectorAll('[class=subject]');
  let materiaSelecionada = 'Matérias:';
  for (let index = 0; index < materia.length; index += 1) {
    if (materia[index].checked) {
      materiaSelecionada += `, ${materia[index].value}`;
    }
  }
  for (let index = 0; index < materia.length; index += 1) {
    document.querySelector('.container-checkbox').lastElementChild.remove();
  }
  materiaSelecionada = materiaSelecionada.replace(',', '');
  document.querySelector('#label-content').innerHTML = materiaSelecionada;
}

function createRate() {
  const rate = document.querySelectorAll('[name=rate]');
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked === true) {
      document.querySelector('#label-rate').innerHTML = `Avaliação: ${rate[index].value}`;
    }
  }
  for (let index = 0; index < rate.length; index += 1) {
    document.querySelector('.rate-container').lastElementChild.remove();
  }
}

function createComent() {
  const coment = document.querySelector('#textarea');
  document.querySelector('[for=textarea]').innerHTML = `Observações: ${coment.value}`;
  document.querySelector('#textarea').remove();
  document.querySelector('#counter').remove();
}

function charactersCounter() {
  const maxLength = 500;
  const userCharLength = userChar.value.length;
  const charRemain = maxLength - userCharLength;
  document.getElementById('counter').innerHTML = charRemain;
}

function createDivs(event) {
  event.preventDefault();
  createFullName();
  createEmail();
  createHouse();
  createFamily();
  createMateria();
  createRate();
  createComent();
}

const submitButton = document.querySelector('#submit-btn');
submitButton.addEventListener('click', createDivs);

userChar.addEventListener('keyup', charactersCounter);
