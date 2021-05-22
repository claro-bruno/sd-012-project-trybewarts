// Pegando elementos HTML do Header
const login = document.querySelector('.login-button');

// Pegando elementos HTML do form
const form = document.querySelector('#evaluation-form');

// div name-info
const nameInfo = document.querySelector('#name-info');
const studentName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');

// div label-container
const labelContainer = document.querySelector('.label-container');
const email = document.querySelector('#input-email');
const allHouses = document.querySelector('#house');

// div form-container
const familyContainer = document.querySelector('#family-container');
const allFamily = document.getElementsByName('family');
const contentContainer = document.querySelector('#content-container');
const allSubject = document.getElementsByName('subject');

// div avaliation
const avaliation = document.querySelector('.avaliation');
const allRate = document.getElementsByName('rate');

// div textarea and buttons
const textArea = document.querySelector('.textarea');
const counter = document.getElementById('counter');
const comment = document.getElementById('textarea');
const agreeButton = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

login.addEventListener('click', () => {
  if (document.getElementById('input-login').value !== 'tryber@teste.com'
  || document.getElementById('input-senha').value !== '123456') {
    window.alert('Login ou senha inválidos.');
  } else {
    window.alert('Olá, Tryber!');
  }
});

// Submit button starts unavailable then with the click in the checkbox comes the validation.
function submitButtonAvailable() {
  if (agreeButton.checked === false) {
    submitButton.setAttribute('disabled', '');
  } else if (agreeButton.checked === true) {
    submitButton.removeAttribute('disabled');
  }
}
submitButtonAvailable();
agreeButton.addEventListener('click', submitButtonAvailable);

const checkFamily = () => {
  let selectedStack = '';
  for (let stack = 0; stack < allFamily.length; stack += 1) {
    if (allFamily[stack].checked === true) {
      selectedStack = allFamily[stack].value;
    }
  }
  return selectedStack;
};

const checkedSubjects = () => {
  const selectedSubject = [];
  for (let skills = 0; skills < allSubject.length; skills += 1) {
    if (allSubject[skills].checked === true) {
      selectedSubject.push(allSubject[skills].value);
    }
  }
  return selectedSubject.join(', ');
};

const checkedRate = () => {
  let selectedRate = '';
  for (let rate = 0; rate < allRate.length; rate += 1) {
    if (allRate[rate].checked === true) {
      selectedRate = allRate[rate].value;
    }
  }
  return selectedRate;
};

const showData = () => {
  nameInfo.innerHTML = `Nome: ${studentName.value} ${lastName.value}`;
  labelContainer.innerHTML = `Email: ${email.value} Casa: ${allHouses.value}`;
  familyContainer.innerHTML = `Família: ${checkFamily()}`;
  contentContainer.innerHTML = `Matérias: ${checkedSubjects()}`;
  avaliation.innerHTML = `Avaliação: ${checkedRate()}`;
  textArea.innerHTML = `Observações: ${comment.value}`;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Formulário Enviado');
  console.log(studentName);
  showData();
});

comment.addEventListener('input', () => {
  parseInt(counter.value, 10);
  counter.value = (comment.maxLength - comment.value.length);
});
