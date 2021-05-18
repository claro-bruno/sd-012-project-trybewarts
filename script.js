const btnSubmit = document.querySelector('#submit-login');

function verificationInputsLogin() {
  const inputLogin = document.querySelector('#input-login');
  const inputPassword = document.querySelector('#input-password');

  if (
    inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnSubmit.addEventListener('click', () => {
  verificationInputsLogin();
});
