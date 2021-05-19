const loginBtn = document.querySelector('form button');
const agreementChecked = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textAreaInput = document.getElementById('textarea');
const charactersCounter = document.getElementById('counter');
const maxCount = parseInt(charactersCounter.innerText, 10);

function validateInput() {
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  if (emailInput.value === 'tryber@teste.com'
  && passwordInput.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Login ou senha inválidos.');
}

function createHouseOptions() {
  const optionsObject = {
    Gitnória: 'gitnoria-house',
    Reactpuff: 'reactpuff-house',
    Corvinode: 'corvinode-house',
    Pytherina: 'pytherina-house',
  };
  const selectHouse = document.getElementById('house');
  const keysObject = Object.keys(optionsObject);
  const valuesObject = Object.values(optionsObject);
  for (let houseIndex = 0; houseIndex < keysObject.length; houseIndex += 1) {
    const houseOption = document.createElement('option');
    houseOption.id = valuesObject[houseIndex];
    houseOption.value = valuesObject[houseIndex];
    houseOption.innerText = keysObject[houseIndex];
    selectHouse.appendChild(houseOption);
  }
}

function validateCheckbox() {
  if (!agreementChecked.checked) {
    submitBtn.setAttribute('disabled', true);
  } else if (agreementChecked.checked) {
    submitBtn.removeAttribute('disabled');
  }
}

if (!agreementChecked.checked) {
  submitBtn.setAttribute('disabled', true);
}

function charactersCount() {
  const inputCount = textAreaInput.value.split('').length;
  const counter = maxCount - inputCount;
  charactersCounter.innerText = counter;
}

window.onload = () => {
  loginBtn.addEventListener('click', validateInput);
  agreementChecked.addEventListener('click', validateCheckbox);
  textAreaInput.addEventListener('keyup', charactersCount);
  createHouseOptions();
};
