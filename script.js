function emailIsValid() {
  const inputEmail = document.getElementById('input-email-header');
  if (inputEmail.value === 'tryber@teste.com') {
    return true;
  }
  return false;
}

function passwordIsValid() {
  const inputPassword = document.getElementById('input-password');
  if (inputPassword.value === '123456') {
    return true;
  }
  return false;
}

function submitValidation() {
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (emailIsValid() && passwordIsValid()) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

submitValidation();
