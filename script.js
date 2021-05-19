const login = document.querySelector('#login');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#login-btn');
const loginInput = 'tryber@teste.com';
const passwordInput = '123456';
const textarea = document.querySelector('#textarea');
const submitButton = document.querySelector('#submit-btn');
const agreementCheckbox = document.querySelector('#agreement');
const counter = document.querySelector('#counter');
const counterStartValue = parseInt(counter.innerHTML, 10);
const form = document.querySelector('#evaluation-form');
const formDiv = document.querySelector('.form-div');
const infos = document.querySelector('.infos-div');

function loginValidate() {
  if (login.value === loginInput && password.value === passwordInput) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', loginValidate);

function enableButtonSubmit() {
  if (agreementCheckbox.checked === true) {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = 'rgb(115, 5, 115)';
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = 'rgb(180, 180, 180)';
  }
}

agreementCheckbox.addEventListener('change', enableButtonSubmit);

function calculateCounter() {
  const textValue = textarea.value.length;
  const counterValue = counterStartValue - textValue;
  counter.innerHTML = counterValue;
}

textarea.addEventListener('input', calculateCounter);

function fullNameInfoAdd() {
  const name = document.querySelector('#input-name');
  const lastname = document.querySelector('#input-lastname');
  const fullNameInfo = document.querySelector('#name-info');
  fullNameInfo.innerHTML = `${fullNameInfo.innerHTML} ${name.value} ${lastname.value}`;
}

function emailInfoAdd() {
  const email = document.querySelector('#input-email');
  const emailInfo = document.querySelector('#email-info');
  emailInfo.innerHTML = `${emailInfo.innerHTML} ${email.value}`;
}

function houseInfoAdd() {
  const house = document.querySelector('#house');
  const houseInfo = document.querySelector('#house-info');
  houseInfo.innerHTML = `${houseInfo.innerHTML} ${house.value}`;
}

function familyInfoAdd() {
  const family = document.getElementsByName('family');
  const familyInfo = document.querySelector('#family-info');
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      familyInfo.innerHTML = `${familyInfo.innerHTML} ${family[index].value}`;
    }
  }
}

function subjectsInfoAdd() {
  const subjects = document.getElementsByName('content');
  const subjectsInfo = document.querySelector('#subjects-info');
  const subjectsChecked = [];
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked === true) {
      subjectsChecked.push(subjects[index].value);
    }
  }
  console.log(subjectsChecked);
  subjectsInfo.innerHTML = `${subjectsInfo.innerHTML} ${subjectsChecked.join(', ')}`;
}

function rateInfoAdd() {
  const rate = document.getElementsByName('rate');
  const rateInfo = document.querySelector('#rate-info');
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked === true) {
      rateInfo.innerHTML = `${rateInfo.innerHTML} ${rate[index].value}`;
    }
  }
}

function obsInfoAdd() {
  const obs = document.querySelector('#textarea');
  const obsInfo = document.querySelector('#obs-info');
  obsInfo.innerHTML = `${obsInfo.innerHTML} ${obs.value}`;
}

function submitInfos(e) {
  fullNameInfoAdd();
  emailInfoAdd();
  houseInfoAdd();
  familyInfoAdd();
  subjectsInfoAdd();
  rateInfoAdd();
  obsInfoAdd();
  formDiv.style.display = 'none';
  infos.style.display = 'block';
  e.preventDefault();
}

form.addEventListener('submit', submitInfos);
