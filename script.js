const inputLogin = document.querySelector('#input-login');
const inputPass = document.querySelector('#input-pass');
const btnLogin = document.querySelector('.submit-btn-login');

function alertLogin() {
  if (inputLogin.value === 'tryber@teste.com' && inputPass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
btnLogin.addEventListener('click', alertLogin);
