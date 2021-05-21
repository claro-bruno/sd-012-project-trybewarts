const login = document.querySelector('.login-button');
const submitButton = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
login.addEventListener('click', () => {
  if (document.getElementById('input-login').value !== 'tryber@teste.com'
  || document.getElementById('input-senha').value !== '123456') {
    window.alert('Login ou senha inválidos.');
  } else {
    window.alert('Olá, Tryber!');
  }
});

function submitButtonAvailable() {
  if (checkbox.checked === false) {
    submitButton.setAttribute('disabled', '');
  } else if (checkbox.checked === true) {
    submitButton.removeAttribute('disabled');
  }
}
submitButtonAvailable();
checkbox.addEventListener('click', submitButtonAvailable);
