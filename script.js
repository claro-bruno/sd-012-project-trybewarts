const btnLogin = document.getElementById('btn-login');

function signIn() {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  if (login === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', signIn);

const selectHouse = document.getElementById('house');
const housesValue = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
const housesID = ['gitnoria-house', 'reactpuff-house', 'corvinode-house', 'pytherina-house'];

function housesOfTrybeWarts() {
  for (let index = 0; index < housesID.length; index += 1) {
    const option = document.createElement('option');
    option.id = housesID[index];
    option.value = housesValue[index];
    option.innerHTML = housesValue[index];
    selectHouse.appendChild(option);
  }
}

housesOfTrybeWarts();

// const getLabelRateContainer = document.getElementById('label-rate-container');

// function addNewRateInput() {
//   const rateOfSatisfaction = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   for (let index = 0; index < rateOfSatisfaction.length; index += 1) {
//     const inputTag = document.createElement('input');
//     const labelTag = document.createElement('label');
//     inputTag.type = 'radio';
//     inputTag.name = 'rate';
//     inputTag.value = rateOfSatisfaction[index];
//     labelTag.innerText = rateOfSatisfaction[index];
//     getLabelRateContainer.appendChild(inputTag[index]);
//     getLabelRateContainer.appendChild(labelTag[index]);
//   }
// }

// addNewRateInput();

const agreementId = document.getElementById('agreement');
const getSubmitId = document.getElementById('submit-btn');

getSubmitId.disabled = true;

function checkedAgreementId() {
  if (agreementId.checked) {
    getSubmitId.disabled = false;
  }
}

agreementId.addEventListener('click', checkedAgreementId);

const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function countCharacters() {
  const totalOfCharacters = textArea.value.length;
  counter.innerText = 500 - totalOfCharacters;
}

textArea.addEventListener('keyup', countCharacters);
