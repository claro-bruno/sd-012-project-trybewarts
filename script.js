const password = document.getElementById('password');
const correctPassword = '123456';
const login = document.getElementById('login');
const correctLogin = 'tryber@teste.com';
const logar = document.getElementById('login-button');
const agreeBox = document.getElementById('agreement');

function verifyLogin() {
  if (password.value === correctPassword && login.value === correctLogin) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

logar.addEventListener('click', verifyLogin);

function ableButton() {
  const button = document.getElementById('submit-btn');
  if (agreeBox.checked === true) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', 'disabled');
  }
}

agreeBox.addEventListener('click', ableButton);
