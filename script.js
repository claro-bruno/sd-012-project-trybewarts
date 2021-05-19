const loginBtn = document.querySelector('form button');
const agreementChecked = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textAreaInput = document.getElementById('textarea');
const charactersCounter = document.getElementById('counter');
const maxCount = parseInt(charactersCounter.innerText, 10);
const form = document.getElementById('evaluation-form');

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

function showFullName() {
  const name = document.getElementById('input-name');
  const lastname = document.getElementById('input-lastname');
  const nameInfo = document.createElement('p');
  nameInfo.innerText = `Nome: ${name.value} ${lastname.value}`;
  name.remove();
  lastname.remove();
  form.appendChild(nameInfo);
}

function showEmail() {
  const email = document.getElementById('input-email');
  const emailInfo = document.createElement('p');
  emailInfo.innerText = `Email: ${email.value}`;
  email.remove();
  form.appendChild(emailInfo);
}

function showHouse() {
  const house = document.getElementById('house');
  const option = document.getElementById(house.value);
  const houseInfo = document.createElement('p');
  houseInfo.innerText = `Casa: ${option.innerText}`;
  house.remove();
  form.appendChild(houseInfo);
}

function showFamily() {
  const familyInput = document.getElementById('family-input');
  const familyOptions = document.querySelectorAll('input[name="family"]');
  const familyInfo = document.createElement('p');
  familyOptions.forEach((family) => {
    if (family.checked) {
      familyInfo.innerText = `Família: ${family.value}`;
    }
  });
  familyInput.remove();
  form.appendChild(familyInfo);
}

function showContent() {
  const contentInput = document.getElementById('content-inputs');
  const contentOptions = document.querySelectorAll('input[name="content"]');
  const checkedContent = [];
  const contentInfo = document.createElement('p');
  contentOptions.forEach((content) => {
    if (content.checked) {
      checkedContent.push(content.defaultValue);
    }
  });
  contentInfo.innerText = `Matérias: ${checkedContent.join(', ')}`;
  contentInput.remove();
  form.appendChild(contentInfo);
}

function showRate() {
  const rateInput = document.getElementById('rate-input');
  const rateOptions = document.querySelectorAll('input[name="rate"]');
  const rateInfo = document.createElement('p');
  rateOptions.forEach((rate) => {
    if (rate.checked) {
      rateInfo.innerText = `Avaliação: ${rate.value}`;
    }
  });
  rateInput.remove();
  form.appendChild(rateInfo);
}

function showComment() {
  const commentInput = document.querySelector('.text-area');
  const comment = document.getElementById('textarea');
  const commentInfo = document.createElement('p');
  commentInfo.innerText = `Observações: ${comment.value}`;
  commentInput.remove();
  form.appendChild(commentInfo);
}

function showInputsValues() {
  showFullName();
  showEmail();
  showHouse();
  showFamily();
  showContent();
  showRate();
  showComment();
}

window.onload = () => {
  loginBtn.addEventListener('click', validateInput);
  agreementChecked.addEventListener('click', validateCheckbox);
  textAreaInput.addEventListener('keyup', charactersCount);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    showInputsValues();
  });
  createHouseOptions();
};
