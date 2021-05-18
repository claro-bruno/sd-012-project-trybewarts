const selectButton = document.querySelector('.botaoSubmit');
const selectLogin = document.querySelector('#login');
const selectPassword = document.querySelector('#senha');

selectButton.addEventListener('click', function () {
  if (
    selectLogin.value === 'tryber@teste.com' &&
    selectPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
