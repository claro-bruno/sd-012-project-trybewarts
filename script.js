const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');
const formLogin = document.getElementById('form-login');
const submitButton = document.getElementById('submit-btn');

function login() {
  if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

formLogin.addEventListener('submit', login);

const agreement = document.getElementById('agreement');

function buttonStatus() {
  if (agreement.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

agreement.addEventListener('click', buttonStatus);

const rate = document.getElementById('rate-container');

function rates() {
  for (let index = 1; index <= 10; index += 1) {
    const rateOption = document.createElement('input');
    const rateLabel = document.createElement('label');
    rateOption.value = index;
    rateOption.name = 'rate';
    rateOption.type = 'radio';
    rateOption.className = 'form-check-input';
    rateLabel.innerHTML = index;
    rateLabel.className = 'form-check-label';
    rate.appendChild(rateOption);
    rate.appendChild(rateLabel);
  }
}

rates();

const textarea = document.getElementById('textarea');
const maxCharacters = textarea.maxLength;
const countRemaining = document.getElementById('counter');

function countCharacters() {
  const textEntered = textarea.value;
  const counter = maxCharacters - textEntered.length;
  countRemaining.textContent = counter;
}

textarea.addEventListener('keyup', countCharacters);

function getCheckedSubjects() {
  const checkboxes = document.getElementsByName('subject');
  let checkboxesValues = '';

  for (let index = 0; index < checkboxes.length; index += 1) {
    if (checkboxes[index].checked) {
      checkboxesValues += ` ${checkboxes[index].value}`;
    }
  }
  return checkboxesValues;
}

function getFormItems() {
  const form = document.getElementById('evaluation-form');
  const elementsForm = form.elements;
  const obj = {};
  for (let i = 0; i < elementsForm.length; i += 1) {
    const item = elementsForm.item(i);
    obj[item.name] = item.value;
  }
  return obj;
}

function test(event) {
  event.preventDefault();
  const rateValue = document.querySelector('input[name="rate"]:checked').value;
  const familyValue = document.querySelector('input[name="family"]:checked').value;
  const subjectValue = getCheckedSubjects();
  const obj = getFormItems();

  document.getElementById('evaluation-form').innerHTML = `<p>Nome: ${obj.name} ${obj.lastname}<br>
  Email: ${obj.email} <br>Casa: ${obj.house} <br>Família: ${familyValue}<br>
  Matérias: ${subjectValue} <br>Avaliação: ${rateValue} <br>Observações: ${obj.obs}</p>`;
}

submitButton.addEventListener('click', test);
