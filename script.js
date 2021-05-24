const email = document.querySelector('#input-login-email');
const password = document.querySelector('#input-login-password');
const loginButton = document.querySelector('#loginButton');

function checkLogin() {
  const insertedEmail = email.value;
  const insertedPassword = password.value;
  const emailFormat = 'tryber@teste.com';
  const passwordFormat = '123456';
  if ((insertedEmail !== emailFormat) || (insertedPassword !== passwordFormat)) {
    email.value = '';
    password.value = '';
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
loginButton.addEventListener('click', checkLogin);

/*  Criação de radio buttons  */

function createRadioButtons() {
  const satisfactionField = document.querySelector('#satisfactionAssessment');

  for (let index = 1; index <= 10; index += 1) {
    const element = document.createElement('input');
    const elementLabel = document.createElement('label');
    element.value = index;
    element.type = 'radio';
    element.name = 'rate';
    elementLabel.innerHTML = index;
    satisfactionField.appendChild(element);
    satisfactionField.appendChild(elementLabel);
  }
}

createRadioButtons();

/*  Criação de radio buttons  */
const submitButton = document.querySelector('#submit-btn');
const checkBox = document.querySelector('#agreement');
submitButton.disabled = true;

function enableSubmitButton() {
  if (checkBox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

checkBox.addEventListener('change', enableSubmitButton);

const textArea = document.querySelector('textarea');
const counter = document.querySelector('#counter');

function wordCounter() {
  const nWords = textArea.value.length;
  counter.innerText = 500 - nWords;
}

textArea.addEventListener('keyup', wordCounter);