const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');

function login() {
  if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const formLogin = document.getElementsByClassName('trybewarts-login');
formLogin[0].addEventListener('submit', login);
