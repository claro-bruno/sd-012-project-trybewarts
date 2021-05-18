const loginButton = document.getElementById('loginButton');
const loginInput = document.getElementById('login-input');
const passwordInput = document.getElementById('senha-input');

function stopDefAction(event) {
  event.preventDefault();

  if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', stopDefAction);
