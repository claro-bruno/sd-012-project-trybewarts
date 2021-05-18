const login = document.getElementById('login');
const password = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');

function loginCheck() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
    return;
  }
  alert('Login ou senha inválidos.');
}

function enableSubmit() {
  submitButton.disabled = false;
}

if (0 === 1) {
  loginCheck();
  enableSubmit();
}
