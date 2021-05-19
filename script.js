const loginButton = document.getElementById('button-login');
const inputLogin = document.getElementById('input-login');
const form = document.getElementById('evaluation-form');
const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const selectHouse = document.querySelectorAll('option');
const familyRadio = document.getElementsByName('family');
const rateRadio = document.getElementsByName('rate');
const agreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function loginButtonExec() {
  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputLogin.value.includes('@')) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

function submitButtonEnable() {
  agreement.addEventListener('click', () => {
    if (agreement.checked) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
}

function textareaExec() {
  let countNum = 0;
  textarea.addEventListener('keyup', () => {
    countNum = 500 - textarea.value.length;
    counter.innerHTML = countNum;
  });
}

function findSelected() {
  for (let index = 0; index <= selectHouse.length; index += 1) {
    if (selectHouse[index].selected) {
      return selectHouse[index].innerHTML;
    }
  }
}

function findChecked(element) {
  for (let index = 0; index <= element.length; index += 1) {
    if (element[index].checked) {
      return element[index].value;
    }
  }
}

function findSubjectsChecked() {
  const subjectBoxes = document.querySelectorAll('.subject:checked');
  const values = [];
  subjectBoxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  return values.join(', ');
}

function createNewElement(string) {
  const p = document.createElement('p');
  p.innerHTML = string;
  form.appendChild(p);
}

function changeInformation() {
  const name = `Nome: ${firstName.value} ${lastName.value}`;
  const email = `Email: ${inputEmail.value}`;
  const house = `Casa: ${findSelected()}`;
  const family = `Família: ${findChecked(familyRadio)}`;
  const subject = `Matérias: ${findSubjectsChecked()}`;
  const rate = `Avaliação: ${findChecked(rateRadio)}`;
  const obs = `Observações: ${textarea.value}`;
  form.innerHTML = '';
  createNewElement(name);
  createNewElement(email);
  createNewElement(house);
  createNewElement(family);
  createNewElement(subject);
  createNewElement(rate);
  createNewElement(obs);
}

function submitButtonExec() {
  submitButton.addEventListener('click', () => {
    changeInformation();
  });
}

loginButtonExec();
textareaExec();
submitButtonEnable();
submitButtonExec();
