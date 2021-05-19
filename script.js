const inputButton = document.getElementById('inputButton');

function validateLogin() {
  const inputLogin = document.getElementById('inputLogin').value;
  const inputPassword = document.getElementById('inputPassword').value;
  if (inputLogin === 'tryber@teste.com' && inputPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

inputButton.addEventListener('click', validateLogin);

// Função que adiciona Option ao select de ID house
const select = document.getElementById('house');
const optionID = ['gitnoria-house', 'reactpuff-house', 'corvinode-house', 'pytherina-house'];
const optionValue = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
function createOptions() {
  for (let index = 0; index < 4; index += 1) {
    const option = document.createElement('option');
    option.value = optionValue[index];
    option.id = optionID[index];
    option.innerHTML = optionValue[index];
    select.appendChild(option);
  }
}
createOptions();

// cria tagA
function createA(array, position) {
  for (let index = 0; index < array.length; index += 1) {
    const tagA = document.createElement('a');
    position.appendChild(tagA);
  }
}

// Cria inputRadio
const divRadio = document.getElementById('radioLabel');
const radioValue = ['Frontend', 'Backend', 'FullStack'];
function createRadio() {
  createA(radioValue, divRadio);
  for (let index = 0; index < radioValue.length; index += 1) {
    const inputLabel = document.createElement('label');
    const inputRadio = document.createElement('input');
    inputRadio.type = 'radio';
    inputRadio.name = 'family';
    inputRadio.value = radioValue[index];
    inputRadio.id = `family ${index}`;
    inputLabel.htmlFor = `family ${index}`;
    inputLabel.innerHTML = `Família ${radioValue[index]}`;
    inputLabel.id = 'labelRadio';
    divRadio.children[index + 1].appendChild(inputRadio);
    divRadio.children[index + 1].appendChild(inputLabel);
  }
}
createRadio();

const divCheckbox = document.getElementById('checkboxLabel');
const checkboxValue = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
function createCheckbox() {
  createA(checkboxValue, divCheckbox);
  for (let index = 0; index < checkboxValue.length; index += 1) {
    const inputLabel = document.createElement('label');
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkBox';
    inputCheckbox.value = checkboxValue[index];
    inputCheckbox.className = 'subject';
    inputCheckbox.id = `contentCheckbox ${index}`;
    inputLabel.htmlFor = `contentCheckbox ${index}`;
    inputLabel.innerHTML = checkboxValue[index];
    inputLabel.id = 'labelCheckbox';
    divCheckbox.children[index + 1].appendChild(inputCheckbox);
    divCheckbox.children[index + 1].appendChild(inputLabel);
  }
}
createCheckbox();

// cria Label-rate
const divRate = document.getElementById('divLabelRate');
const rateValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function createRate() {
  createA(rateValue, divRate);
  for (let index = 0; index < rateValue.length; index += 1) {
    const inputLabel = document.createElement('label');
    const inputRate = document.createElement('input');
    inputRate.type = 'radio';
    inputRate.name = 'rate';
    inputRate.value = rateValue[index];
    inputRate.id = `rateTrybewarts ${index}`;
    inputLabel.htmlFor = `rateTrybewarts ${index}`;
    inputLabel.innerHTML = rateValue[index];
    inputLabel.id = 'labelRate';
    divRate.children[index + 1].appendChild(inputRate);
    divRate.children[index + 1].appendChild(inputLabel);
  }
}
createRate();

// Cria verificação de botão
const checkAgree = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
checkAgree.addEventListener('click', () => {
  if (submitBtn.disabled === true) {
    submitBtn.disabled = false;
  } else if (submitBtn.disabled === false) {
    submitBtn.disabled = true;
  }
});
