const loginButton = document.getElementById('botao-login');

function checkLogin() {
  const loginField = document.getElementById('login-field');
  const senha = document.getElementById('senha');

  if ((loginField.value.toString() === 'tryber@teste.com') && (senha.value.toString() === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
loginButton.addEventListener('click', checkLogin);
