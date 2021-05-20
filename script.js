const btnLogin = document.querySelector('#submit-login');
const checkboxAgreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const inputForm = document.querySelector('#evaluation-form');

const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const inputHouse = document.querySelector('#house');
const inputFamily = document.querySelector('input[name="family"]:checked');
const inputContentLike = document.querySelectorAll('input[name="matter"]:checked');
const inputRate = document.querySelector('input[name="rate"]:checked');
const inputTextare = document.querySelector('#textarea');

function verificationInputsLogin() {
  const inputLogin = document.querySelector('#input-login');
  const inputPassword = document.querySelector('#input-password');

  if (
    inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', () => {
  verificationInputsLogin();
});

checkboxAgreement.addEventListener('click', () => {
  if (checkboxAgreement.checked) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', 'disabled');
  }
});

counter.innerText = 500;
textarea.addEventListener('input', () => {
  const maxCaracteres = textarea.getAttribute('maxLength');
  const caracteresDigitados = textarea.value.length;
  const caracteresRestantes = maxCaracteres - caracteresDigitados;

  counter.innerText = caracteresRestantes;
});

function createElementP(inputValue) {
  const elementP = document.createElement('p');
  elementP.innerHTML = inputValue;
  inputForm.appendChild(elementP);
}

function matterValue(arrayValue) {
  let inputValue = 'Matérias:';
  for (let index = 0; index < arrayValue.length; index += 1) {
    inputValue += `${arrayValue[index].value}`;
    if (index !== arrayValue.length - 1) inputValue += ',';
  }
  createElementP(inputValue);
}

function changeValueInput() {
  inputForm.innerHTML = '';

  const fullName = `Nome: ${inputName.value} ${inputLastName.value}`;
  createElementP(fullName);
  const email = `Email: ${inputEmail.value}`;
  createElementP(email);
  const house = `Casa: ${inputHouse.value}`;
  createElementP(house);
  const family = `Família: ${inputFamily.value}`;
  createElementP(family);
  matterValue(inputContentLike);
  const rate = `Nota: ${inputRate.value}`;
  createElementP(rate);
  const comment = `Observações: ${inputTextare.value}`;
  createElementP(comment);
}

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  changeValueInput();
});
