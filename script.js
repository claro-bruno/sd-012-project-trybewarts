const getLoginButton = document.querySelector('#login-btn');
const getLoginInput = document.querySelector('#login-input');
const getSenhaInput = document.querySelector('#senha-input');
const getAgreementCheck = document.querySelector('#agreement');
const getFormButton = document.querySelector('#submit-btn');
const getOutputDiv = document.querySelector('#form-output');
const getInputDiv = document.querySelector('#form-input');

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

//  function counterFunction () {
//  let contador = 500;
//  let referencia = 500;
//  let counterChar = document.getElementById('counter').value;
//  let textArea = document.querySelectorAll('#textarea');
//  if (textArea.value !== '') {
//    for (let index = 0; index < 500; index += 1) {
//      contador = 500 - textArea.length;
//    }
//
//  }
//  counterChar = contador;
//  console.log(contador);
// }

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
  pSubject.innerHTML = 'Matérias: ';
  for (let indice = 0; indice < subject.length; indice += 1) {
    if (subject[indice].checked) {
      pSubject.innerHTML = pSubject.innerHTML.concat(`${subject[indice].value},`);
    }
  }
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
  const textArea = document.querySelector('#textarea').value;
  const pTextArea = document.createElement('p');
  pTextArea.innerHTML = `Observações: ${textArea}`;
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
