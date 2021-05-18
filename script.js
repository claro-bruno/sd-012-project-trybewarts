function loginCheck() {
  const inputLogin = document.querySelector('#login');
  const inputPassword = document.querySelector('#password');

  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

window.onload = () => {
  document.querySelector('#login-button').addEventListener('click', loginCheck);
};
