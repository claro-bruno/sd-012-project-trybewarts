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
  agreement.addEventListener('input', () => {
    if (getAgreement()) {
      document.getElementById('submit-btn').disabled = false;
    } else {
      document.getElementById('submit-btn').disabled = true;
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

inputText.addEventListener('input', (e) => {
  const textSise = e.target.value.length;
  const total = valorMax - textSise;
  maxChar.innerHTML = total;
});

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

function submitForm(event) {
  familyChangeId();
  subjectList();
  rateChangeId();
  event.preventDefault();
  const form = document.getElementById('evaluation-form');
  // form.style.display = 'none';
  const newDiv = document.createElement('div');
  form.appendChild(newDiv);
  const name = document.getElementById('input-name').value;
  console.log(name);
  const lastName = document.getElementById('input-lastname').value;
  console.log(lastName);
  const email = document.getElementById('input-email').value;
  console.log(email);
  const house = document.getElementById('house').value;
  console.log(house);
  const family = document.getElementById('family-selected').value;
  console.log(family);
  const lessons = originalSubjectsId;
  const avaliation = document.getElementById('rate-selected').value;
  console.log(avaliation);
  const observation = document.getElementById('textarea').value;
  console.log(observation);

  const infoNome = document.createElement('p');
  infoNome.innerHTML = `Nome: ${name} ${lastName}`;
  const infoEmail = document.createElement('p');
  infoEmail.innerHTML = `Email: ${email}`;
  const infoHouse = document.createElement('p');
  infoHouse.innerHTML = `Casa: ${house}`;
  const infoFamily = document.createElement('p');
  infoFamily.innerHTML = `Família: ${family}`;
  const infoLessons = document.createElement('p');
  infoLessons.innerHTML = `Matérias: ${lessons.join(', ')}`;
  const infoAvaliation = document.createElement('p');
  infoAvaliation.innerHTML = `Avaliação: ${avaliation}`;
  const infoObservation = document.createElement('p');
  infoObservation.innerHTML = `Observações: ${observation}`;

  newDiv.appendChild(infoNome);
  newDiv.appendChild(infoEmail);
  newDiv.appendChild(infoHouse);
  newDiv.appendChild(infoFamily);
  newDiv.appendChild(infoLessons);
  newDiv.appendChild(infoAvaliation);
  newDiv.appendChild(infoObservation);
}
familyList();

btnSubmit.addEventListener('click', submitForm);
