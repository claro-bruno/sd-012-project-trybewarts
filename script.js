const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');

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
