const botaoLogar = document.querySelector('#botaoLogar');
const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const submitBtn = document.getElementById('submit-btn');
const inputName = document.querySelector('#input-name');
const inputLastN = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const house = document.querySelector('#house');
const textArea = document.querySelector('#textarea');

botaoLogar.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

function ActivateButton() {
  submitBtn.disabled = false;
}

function DeactivateButton() {
  submitBtn.disabled = true;
}

const checkAgreement = document.getElementById('agreement');
checkAgreement.addEventListener('change', () => {
  if (checkAgreement.checked) {
    ActivateButton();
  } else {
    DeactivateButton();
  }
});

function CharacterLimit() {
  const counter = document.querySelector('textarea').value.length;
  const tMaxLength = document.getElementById('textarea').maxLength;
  const pCounter = document.getElementById('counter');
  pCounter.innerHTML = tMaxLength - counter;
}
CharacterLimit();

function GetFamilySelected() {
  const family = document.getElementsByName('family');
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      return family[index].value;
    }
  }
}

function GetSubjectsSelected() {
  const subjects = document.getElementsByClassName('subject');
  let subjectsSelected = '';
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      subjectsSelected += `${subjects[index].value}, `;
    }
  }
  return subjectsSelected;
}

function GetUserEvaluation() {
  const evaluation = document.getElementsByName('rate');
  for (let index = 0; index < evaluation.length; index += 1) {
    if (evaluation[index].checked) {
      return evaluation[index].value;
    }
  }
}

function FillInputs() {
  const familySelected = GetFamilySelected();
  const subjectsSelected = GetSubjectsSelected();
  const userEvaluation = GetUserEvaluation();
  const form = document.getElementsByTagName('form')[1];
  form.innerHTML = '';
  form.innerHTML += `Nome: ${inputName.value} ${inputLastN.value} <br>`;
  form.innerHTML += `Email: ${inputEmail.value} <br>`;
  form.innerHTML += `Casa: ${house.value} <br>`;
  form.innerHTML += `Família: ${familySelected} <br>`;
  form.innerHTML += `Matérias: ${subjectsSelected} <br>`;
  form.innerHTML += `Avaliação: ${userEvaluation} <br>`;
  form.innerHTML += `Observações: ${textArea.value}`;
}

submitBtn.addEventListener('click', FillInputs);
