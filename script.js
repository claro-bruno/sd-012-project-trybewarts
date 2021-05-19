// criar radio buttons

const rate = document.querySelector('.label-rate-container');

function createRate() {
  for (let index = 1; index < 11; index += 1) {
    const radioBtn = document.createElement('input');
    const label = document.createElement('label');
    label.setAttribute('for', index);
    label.innerHTML = `${index} `;
    label.classList.add('form-check-label');
    radioBtn.setAttribute('type', 'radio');
    radioBtn.id = index;
    radioBtn.classList.add('form-check-input');
    radioBtn.setAttribute('name', 'rate');
    radioBtn.setAttribute('value', index);
    rate.appendChild(label);
    rate.appendChild(radioBtn);
  }
}

createRate();

// habilitar botão enviar

const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

agreement.addEventListener('click', () => {
  if (agreement.hasAttribute('checked')) {
    agreement.removeAttribute('checked');
  } else {
    agreement.setAttribute('checked', '');
  }
});

function activeBtn() {
  if (agreement.hasAttribute('checked')) {
    submitBtn.removeAttribute('disabled');
    submitBtn.classList.add('able');
  } else {
    submitBtn.setAttribute('disabled', '');
    submitBtn.classList.remove('able');
  }
}

agreement.addEventListener('click', activeBtn);

// verificação login

const loginBtn = document.querySelector('.login-btn');
const login = document.querySelector('#login');
const pass = document.querySelector('#password');

loginBtn.addEventListener('click', () => {
  if (login.value.length < 7 || pass.value.length < 5) {
    alert('Login ou senha inválidos.');
  } else {
    window.alert('Olá, Tryber!');
  }
});

// contador de caracteres textarea

const textarea = document.querySelector('#textarea');
const counterN = 500;
const counterTxt = document.querySelector('.counter');

function counter() {
  const x = counterN - textarea.value.length;
  counterTxt.innerHTML = x;
}

textarea.addEventListener('keyup', counter);

// formulario submit

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

const getName = document.querySelector('#input-name');
const getLastName = document.querySelector('#input-lastname');
const getEmail = document.querySelector('#input-email');
const getHouse = document.querySelector('#house');
const getFamily = document.querySelectorAll('.family');
const getSubject = document.querySelectorAll('.subject');
const getRateRadio = document.querySelectorAll('.form-check-input');
const form = document.querySelector('.form');

function getFamilySelected() {
  let familyCheck;
  for (let index = 0; index < getFamily.length; index += 1) {
    if (getFamily[index].checked) {
      familyCheck = getFamily[index].value;
    }
  }
  return familyCheck;
}

function getRateSelected() {
  let rateCheck;
  for (let index = 0; index < getRateRadio.length; index += 1) {
    if (getRateRadio[index].checked) {
      rateCheck = getRateRadio[index].value;
    }
  }
  return rateCheck;
}

function getSubjectSelected() {
  let subjectSelected = [];
  for (let index = 0; index < getSubject.length; index += 1) {
    if (getSubject[index].checked) {
      subjectSelected.push(`${getSubject[index].value}, `);
    }
  }
  subjectSelected = subjectSelected.join(' ');
  console.log(subjectSelected);
  return subjectSelected;
}

// infos align items

function align() {
  form.style.justifyContent = 'space-between';
  form.style.alignItems = 'center';
}

submitBtn.addEventListener('click', () => {
  form.innerHTML = '';
  const fullName = `Nome: ${getName.value} ${getLastName.value}`;
  const email = `Email: ${getEmail.value}`;
  const house = `Casa: ${getHouse.value}`;
  const family = `Família: ${getFamilySelected()}`;
  const subject = `Matérias: ${getSubjectSelected()}`;
  const evaluation = `Avaliação: ${getRateSelected()}`;
  const comment = `Observações: ${textarea.value}`;
  const infos = [fullName, email, house, family, subject, evaluation, comment];

  for (let index = 0; index < infos.length; index += 1) {
    const paragraph = document.createElement('p');
    paragraph.classList.add('infos-p');
    paragraph.innerHTML = infos[index];
    form.appendChild(paragraph);
  }
  align();
});
