const loginButton = document.getElementById('login-button');
const emailInput = document.getElementById('trybewarts-email');
const passwordInput = document.getElementById('trybewarts-senha');

function verifyLogin(event) {
  console.log(emailInput.value);
  if (emailInput.value !== 'tryber@teste.com' || passwordInput.value !== '123456') {
    event.preventDefault();
  } else {
    console.log('Login feito');
  }
}

loginButton.addEventListener('click', verifyLogin);
