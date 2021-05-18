const login = document.querySelector('#login');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#login-btn');
const loginInput = 'tryber@teste.com';
const passwordInput = '123456';
const submitButton = document.querySelector('#submit-btn');
const agreementCheckbox = document.querySelector('#agreement');

function loginValidate() {
  if (login.value === loginInput && password.value === passwordInput) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', loginValidate);

function enableButtonSubmit() {
  if (agreementCheckbox.checked === true) {
    submitButton.disabled = false;
    console.log('teste1');
  } else {
    submitButton.disabled = true;
    console.log('teste2');
  }
}

agreementCheckbox.addEventListener('change', enableButtonSubmit);
