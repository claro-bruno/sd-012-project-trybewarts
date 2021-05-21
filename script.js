function getLogin() {
  const login = document.getElementById('input-login').value;
  return login;
}

function getSenha() {
  const senha = document.getElementById('input-senha').value;
  return senha;
}

function validateLogin(login, senha) {
  if ((login === 'tryber@teste.com') && (senha === '123456')) return true;
}

function loginButton() {
  const button = document.getElementById('btt-login');
  button.addEventListener('click', () => {
    if (validateLogin(getLogin(), getSenha())) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

function getAgreement() {
  const agreement = document.getElementById('agreement').checked;
  return agreement;
}

function enableButton() {
  const agreement = document.getElementById('agreement');
  const buttonCheck = document.getElementById('submit-btn');
  agreement.addEventListener('input', () => {
    if (getAgreement()) {
      buttonCheck.disabled = false;
    } else {
      buttonCheck.disabled = true;
    }
  });
}

window.onload = () => {
  loginButton();
  enableButton();
};

const maxChar = document.getElementById('counter');
const inputText = document.getElementById('textarea');
const valorMax = 500;

function countChar(event) {
  const textSise = event.target.value.length;
  const total = valorMax - textSise;
  maxChar.innerHTML = total;
}

inputText.addEventListener('keyup', countChar);

const btnSubmit = document.getElementById('submit-btn');

const originalFamilyId = [];

function familyList() {
  const familyId = document.querySelectorAll('.family');
  for (let index = 0; index < familyId.length; index += 1) {
    originalFamilyId.push(familyId[index].id);
  }
}

function familyChangeId() {
  const familyName = document.querySelectorAll('.family');
  for (let index = 0; index < familyName.length; index += 1) {
    if (familyName[index].checked) {
      familyName[index].id = 'family-selected';
    }
    if (!familyName[index].checked) {
      familyName[index].id = originalFamilyId[index];
    }
  }
}

const originalrateListId = [];

function rateChangeId() {
  const rateId = document.querySelectorAll('.form-check-input');
  for (let index = 0; index < rateId.length; index += 1) {
    if (rateId[index].checked) {
      rateId[index].id = 'rate-selected';
    }
    if (!rateId[index].checked) {
      rateId[index].id = originalrateListId[index];
    }
  }
}

const originalSubjectsId = [];

function subjectList() {
  const allSubjects = document.querySelectorAll('.subject');
  for (let index = 0; index < allSubjects.length; index += 1) {
    if (allSubjects[index].checked) {
      originalSubjectsId.push(allSubjects[index].value);
    }
  }
}

function getData() {
  const data = {
    name: document.getElementById('input-name').value,
    lastName: document.getElementById('input-lastname').value,
    email: document.getElementById('input-email').value,
    house: document.getElementById('house').value,
    family: document.getElementById('family-selected').value,
    lessons: originalSubjectsId,
    avaliation: document.getElementById('rate-selected').value,
    observation: document.getElementById('textarea').value,
  };
  return data;
}

function createLi(innerhtml) {
  const li = document.createElement('li');
  li.innerHTML = innerhtml;
  return li;
}

function submitForm(event) {
  familyChangeId();
  subjectList();
  rateChangeId();
  event.preventDefault();
  const newDiv = document.querySelector('#show-result ul');
  newDiv.appendChild(createLi(`Nome: ${getData().name} ${getData().lastName}`));
  newDiv.appendChild(createLi(`Email: ${getData().email}`));
  newDiv.appendChild(createLi(`Casa: ${getData().house}`));
  newDiv.appendChild(createLi(`Família: ${getData().family}`));
  newDiv.appendChild(createLi(`Matérias: ${getData().lessons.join(', ')}`));
  newDiv.appendChild(createLi(`Avaliação: ${getData().avaliation}`));
  newDiv.appendChild(createLi(`Observações: ${getData().observation}`));
}
familyList();
btnSubmit.addEventListener('click', submitForm);
