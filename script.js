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
    submitButton.style.backgroundColor = 'rgb(115, 5, 115)';
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = 'rgb(180, 180, 180)';
  }
}

agreementCheckbox.addEventListener('change', enableButtonSubmit);
