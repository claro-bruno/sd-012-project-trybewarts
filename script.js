const inputLogin = document.querySelector('#input-login');
const inputPass = document.querySelector('#input-pass');
const btnLogin = document.querySelector('.submit-btn-login');
const checkAgree = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');

function alertLogin() {
  if (inputLogin.value === 'tryber@teste.com' && inputPass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
btnLogin.addEventListener('click', alertLogin);

btnSubmit.disabled = true;
function checkSelected() {
  if (checkAgree.checked === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
checkAgree.addEventListener('click', checkSelected);
