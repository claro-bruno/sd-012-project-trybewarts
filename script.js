const loginButton = document.getElementById('botao-login');

function checkLogin() {
  const login = document.getElementById('login-field');
  const senha = document.getElementById('senha');

  if ((login.value.toString() === 'tryber@teste.com') && (senha.value.toString() === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
loginButton.addEventListener('click', checkLogin);
