const password = document.querySelector('.password');
const login = document.querySelector('.login');
const loginButton = document.querySelector('.login-button');

const preventDef = (event) => event.preventDefault();

loginButton.addEventListener('click', preventDef);

loginButton.addEventListener('click', () => {
  if (login.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', preventDef);

const getAgreement = document.getElementById('agreement');

getAgreement.onchange = function swap() {
  submitBtn.disabled = !this.checked;
};

const counter = parseInt(document.getElementById('counter').innerHTML, 10);
const textarea = document.getElementById('textarea');

const changeCounter = () => {
  document.getElementById('counter').innerHTML = counter - textarea.value.length;
};
textarea.addEventListener('keyup', changeCounter);
