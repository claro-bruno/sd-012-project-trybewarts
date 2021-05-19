const login = document.querySelector('#login');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#login-btn');
const loginInput = 'tryber@teste.com';
const passwordInput = '123456';
const textarea = document.querySelector('#textarea');
const submitButton = document.querySelector('#submit-btn');
const agreementCheckbox = document.querySelector('#agreement');
const counter = document.querySelector('#counter');
const counterStartValue = parseInt(counter.innerHTML, 10);

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

function calculateCounter() {
  const textValue = textarea.value.length;
  const counterValue = counterStartValue - textValue;
  counter.innerHTML = counterValue;
}

textarea.addEventListener('input', calculateCounter);
