const selectButtonLogin = document.querySelector('.botaoLogin');
const selectLogin = document.querySelector('#login');
const selectPassword = document.querySelector('#senha');

function verificarLogin() {
  if (
    selectLogin.value === 'tryber@teste.com'
  ) {
    alert('Olá, Tryber!');
  } else if (selectPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

selectButtonLogin.addEventListener('click', verificarLogin);

const selectButtonSubmit = document.querySelector('#submit-btn');
const checkBox = document.querySelector('#agreement');
selectButtonSubmit.disabled = true;

function verificaCheckbox() {
  if (checkBox.checked === true) {
    selectButtonSubmit.disabled = false;
  } else {
    selectButtonSubmit.disabled = true;
  }
}
checkBox.addEventListener('click', verificaCheckbox);
