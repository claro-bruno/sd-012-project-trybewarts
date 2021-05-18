const login = document.querySelector('#login');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#login-btn');
const loginInput = 'tryber@teste.com';
const passwordInput = '123456';
const submitButton = document.querySelector('#submit-btn');

function loginValidate() {
  if (login.value === loginInput && password.value === passwordInput) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', loginValidate);

function enableButtonSubmit(checkbox) {
  if (checkbox.checked) {
    submitButton.disabled = false;
  }
}
enableButtonSubmit();
