const selectButton = document.querySelector('.botaoSubmit');
const selectLogin = document.querySelector('#login');
const selectPassword = document.querySelector('#senha');

function verificarLogin() {
  if (selectLogin.value === 'tryber@teste.com' && selectPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
selectButton.addEventListener('click', verificarLogin);
