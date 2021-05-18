const password = document.querySelector('.password');
const login = document.querySelector('.login');
const loginButton = document.querySelector('.login-button');

const preventDef = (event) => event.preventDefault();

loginButton.addEventListener('click', preventDef);

loginButton.addEventListener('click', () => {
  if (login.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', preventDef);

const getAgreement = document.getElementById('agreement');

getAgreement.onchange = function swap() {
  submitBtn.disabled = !this.checked;
};

const counter = parseInt(document.getElementById('counter').innerHTML, 10);
const textarea = document.getElementById('textarea');

const changeCounter = () => {
  document.getElementById('counter').innerHTML = counter - textarea.value.length;
};
textarea.addEventListener('keyup', changeCounter);


const getFamilyRadios = () => {
  const familyRadios = document.getElementsByClassName('family');
  for (let i = 0; i < familyRadios.length; i += 1) {
    if (familyRadios[i].checked) {
      return familyRadios[i].value;
    }
  }
};

const getSubject = () => {
  const checked = [];
  const checkBoxes = document.getElementsByClassName('subject');
  for (let i = 0; i < checkBoxes.length; i += 1) {
    if (checkBoxes[i].checked) {
      checked.push(checkBoxes[i].value);
    }
  }
  return checked.join(', ');
};

const getRateRadios = () => {
  const rateRadios = document.getElementsByClassName('rate');
  for (let i = 0; i < rateRadios.length; i += 1) {
    if (rateRadios[i].checked) {
      return rateRadios[i];
    }
  }
};

const form = document.getElementById('evaluation-form');
let fullName;
let email;
let house;
let family;
let subject;
let rate;
let commentary;

const getInputs = () => {
  const inputs = [];
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  fullName = `Nome: ${name} ${lastName}`;
  email = `Email: ${document.getElementById('input-email').value}`;
  house = `Casa: ${document.getElementById('house').value}`;
  family = `Família: ${getFamilyRadios()}`;
  subject = `Matérias: ${getSubject()}`;
  rate = `Avaliação: ${getRateRadios()}`;
  commentary = `Observações: ${document.getElementById('textarea').value}`;
  inputs.push(fullName, email, house, family, subject, rate, commentary);
  return inputs;
};

const assembleInfo = () => {
  const newForm = document.createElement('form');
  for (let i = 0; i < getInputs().length; i += 1) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = getInputs()[i];
    newForm.appendChild(paragraph);
  }
  form.innerHTML = newForm.innerHTML;
  form.style.textAlign = 'center';
  form.style.justifyContent = 'center';
};

submitBtn.addEventListener('click', assembleInfo);
