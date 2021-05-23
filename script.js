const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');
const rate = document.getElementById('rate-container');

function login() {
  if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const formLoginHeader = document.getElementById('forms-login');
formLoginHeader.addEventListener('submit', login);

const agreement = document.getElementById('agreement');

function buttonStatus() {
  if (agreement.checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}
agreement.addEventListener('click', buttonStatus);

const formLogin = document.getElementsByClassName('trybewarts-login');
formLogin[0].addEventListener('submit', login);

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

function countCharacters() {
  const textEntered = textarea.value;
  const counter = maxCharacters - textEntered.length;
  const countRemaining = document.getElementById('counter');
  countRemaining.textContent = counter;
}

textarea.addEventListener('keyup', countCharacters);
