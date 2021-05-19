const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

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

function loginValidation() {
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

function manageSubmit() {
  agreement.addEventListener('click', () => {
    if (agreement.checked === true) {
      submitButton.disabled = false;
    }
    if (agreement.checked === false) {
      submitButton.disabled = true;
    }
  });
}

function textCounter() {
  const text = document.getElementById('textarea');
  const counter = document.getElementById('counter');
  text.addEventListener('keyup', () => {
    const textCount = text.value.length;
    counter.innerText = `(${500 - textCount} restantes)`;
  });
}

manageSubmit();
loginValidation();
textCounter();
