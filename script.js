const getLoginButton = document.querySelector('#login-btn');
const getLoginInput = document.querySelector('#login-input');
const getSenhaInput = document.querySelector('#senha-input');
const getAgreementCheck = document.querySelector('#agreement');
const getFormButton = document.querySelector('#submit-btn');
const getOutputDiv = document.querySelector('#form-output');
const getInputDiv = document.querySelector('#form-input');
const textArea = document.querySelector('#textarea');

function validaLogin() {
  if (
    getLoginInput.value === 'tryber@teste.com'
    && getSenhaInput.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
getLoginButton.addEventListener('click', validaLogin);

function enableButton(event) {
  if (event.target.checked) {
    getFormButton.disabled = false;
  } else {
    getFormButton.disabled = true;
  }
}
getAgreementCheck.addEventListener('click', enableButton);

function createNameOutput() {
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const pName = document.createElement('p');
  pName.innerHTML = `Nome: ${name} ${lastName}`;
  getOutputDiv.appendChild(pName);
}

function createEmailOutput() {
  const email = document.querySelector('#input-email').value;
  const pEmail = document.createElement('p');
  pEmail.innerHTML = `Email: ${email}`;
  getOutputDiv.appendChild(pEmail);
}

function createHouseOutput() {
  const house = document.querySelector('#house').value;
  const pHouse = document.createElement('p');
  pHouse.innerHTML = `Casa: ${house}`;
  getOutputDiv.appendChild(pHouse);
}

function createFamilyOutput() {
  const family = document.getElementsByName('family');
  const pFamily = document.createElement('p');
  for (let indice = 0; indice < family.length; indice += 1) {
    if (family[indice].checked) {
      pFamily.innerHTML = `Família: ${family[indice].value}`;
    }
  }
  getOutputDiv.appendChild(pFamily);
}

function createSubjectOutput() {
  const subject = document.getElementsByName('content');
  const pSubject = document.createElement('p');
  let subjectText = 'Matérias:';
  for (let indice = 0; indice < subject.length; indice += 1) {
    if (subject[indice].checked) {
      subjectText = subjectText.concat(` ${subject[indice].value},`);
    }
  }
  pSubject.innerHTML = subjectText.slice(0, -1);
  getOutputDiv.appendChild(pSubject);
}

function createRateOutput() {
  const rate = document.getElementsByName('rate');
  const pRate = document.createElement('p');
  for (let indice = 0; indice < rate.length; indice += 1) {
    if (rate[indice].checked) {
      pRate.innerHTML = `Avaliação: ${rate[indice].value}`;
    }
  }
  getOutputDiv.appendChild(pRate);
}

function createTextAreaOutput() {
  const getTextArea = document.querySelector('#textarea').value;
  const pTextArea = document.createElement('p');
  pTextArea.innerHTML = `Observações: ${getTextArea}`;
  getOutputDiv.appendChild(pTextArea);
}

function formOutput(event) {
  event.preventDefault();
  createNameOutput();
  createEmailOutput();
  createHouseOutput();
  createFamilyOutput();
  createSubjectOutput();
  createRateOutput();
  createTextAreaOutput();

  getInputDiv.style.display = 'none';
  getOutputDiv.style.display = 'flex';
}
getFormButton.addEventListener('click', formOutput);

function counterFunction() {
  let contador = 500;
  contador = 500 - textArea.value.length;
  document.getElementById('counter').innerHTML = contador;
}
textArea.addEventListener('keyup', counterFunction);
