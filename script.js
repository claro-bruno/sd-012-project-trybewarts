const loginBtn = document.querySelector('#login-btn');
const loginInput = document.querySelector('#login-input');
const loginPass = document.querySelector('#login-pass');

const validateLogin = () => loginInput.value === 'tryber@teste.com'
  && loginPass.value === '123456';

loginBtn.addEventListener('click', () => {
  if (validateLogin()) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
