const loginButton = document.getElementById('botao-login');

function checkLogin() {
  loginField = document.getElementById("login-field");
  senha = document.getElementById("senha");

  (loginField.value.toString() === 'tryber@teste.com') && (senha.value.toString() === '123456') ? alert('Olá, Tryber!') : alert('Login ou senha inválidos.');
}

loginButton.addEventListener('click', checkLogin);

