const loginButton = document.getElementById('loginButton');
const loginInput = document.getElementById('login-input');
const passwordInput = document.getElementById('senha-input');
const submitButton = document.getElementById('submit-btn');
const resultForm = document.getElementById('result-form');

function stopDefAction(event) {
  event.preventDefault();

  if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', stopDefAction);

const rateSection = document.getElementById('radio-container');

function createRadioButtons() {
  for (let index = 1; index <= 10; index += 1) {
    const createInput = document.createElement('input');
    const createLabel = document.createElement('label');
    createInput.type = 'radio';
    createInput.className = 'form-check-input rate';
    createInput.value = index;
    createInput.name = 'rate';
    createInput.id = index;
    createLabel.className = 'form-label';
    createLabel.innerHTML = index;
    createLabel.htmlFor = index;
    rateSection.appendChild(createInput);
    rateSection.appendChild(createLabel);
  }
}

createRadioButtons();

const checkBoxAgree = document.getElementById('agreement');

checkBoxAgree.addEventListener('click', () => {
  if (document.getElementById('agreement').checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const count = 500;

const countUpdate = () => {
  const temp = count - textArea.textLength;
  counter.innerHTML = temp;
};

textArea.addEventListener('keyup', countUpdate);

function fillDiv(fill) {
  const createP = document.createElement('p');
  createP.innerHTML = fill;
  resultForm.appendChild(createP);
}

const name = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.querySelectorAll('.familyButtons');
const contents = document.querySelectorAll('.subject');
const rate = document.querySelectorAll('.rate');
const odd = document.getElementById('textarea');

let familyButtonsValue;
function catchValue() {
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      familyButtonsValue = family[index].value;
    }
  }
}

const contntArr = [];
function catchContent() {
  for (let index = 0; index < contents.length; index += 1) {
    if (contents[index].checked === true) {
      contntArr.push(contents[index].value);
    }
  }
}

let checkedRate;
function catchRate() {
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked === true) {
      checkedRate = rate[index].id;
    }
  }
}

function showForm(event) {
  event.preventDefault();
  document.getElementById('evaluation-form-container').style.display = 'none';
  catchRate();
  catchValue();
  catchContent();
  fillDiv(`Nome: ${name.value} ${lastName.value}`);
  fillDiv(`Email: ${email.value}`);
  fillDiv(`Casa: ${house.value}`);
  fillDiv(`Família: ${familyButtonsValue}`);
  fillDiv(`Matérias: ${contntArr.join(', ')}`);
  fillDiv(`Avaliação: ${checkedRate}`);
  fillDiv(`Observações: ${odd.value}`);
}

submitButton.addEventListener('click', showForm);
