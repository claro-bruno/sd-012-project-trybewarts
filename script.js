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

const formLogin = document.getElementById('forms-login');
formLogin.addEventListener('submit', login);

const agreement = document.getElementById('agreement');

function buttonStatus(agreement) {
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
  for(let index = 1; index <= 10; index += 1) {
    let rateOption = document.createElement('input');
    let rateLabel = document.createElement('label');
    rateOption.value = index;
    rateOption.name = "rate";
    rateOption.type = "radio";
    rateLabel.innerHTML = index;
    rate.appendChild(rateOption);
    rate.appendChild(rateLabel);
  }
}

rates();
