const loginButton = document.getElementById('login-button');
const emailInput = document.getElementById('trybewarts-email');
const passwordInput = document.getElementById('trybewarts-senha');

function verifyLogin(event) {
  if (emailInput.value !== 'tryber@teste.com' || passwordInput.value !== '123456') {
    event.preventDefault();
    window.alert("Login ou senha inválidos.")
  } else {
    window.alert("Olá, Tryber!");
  }
}

loginButton.addEventListener('click', verifyLogin);
