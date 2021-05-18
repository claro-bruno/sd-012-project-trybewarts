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

let fullName;
let email;
let house;
let family;
let subject;
let rate;
let commentary;

const getFamilyRadios = () => {
  const familyRadios = document.getElementsByClassName('family');
  for (let i = 0; i < familyRadios.length; i += 1) {
    if (familyRadios[i].checked) {
      return familyRadios[i].value;
    }
  }
};

const getFamily = () => {
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
