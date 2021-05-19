// Captura elementos
const loginBtn = document.querySelector('#login-btn');
const loginInput = document.querySelector('#login-input');
const loginPass = document.querySelector('#login-pass');
const agreementCheck = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
submitBtn.disabled = true;
const textArea = document.querySelector('#textarea-txt');
const counter = document.querySelector('#counter');

// Valida o login
const validateLogin = () => loginInput.value === 'tryber@teste.com'
  && loginPass.value === '123456';

// Adiciona evento ao botão submit
loginBtn.addEventListener('click', () => {
  if (validateLogin()) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Adiciona evento ao checkbox
agreementCheck.addEventListener('click', () => {
  if (agreementCheck.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

// Atualiza contador on-the-fly
textArea.addEventListener('input', (event) => {
  const newLength = event.target.value.length;
  counter.innerText = 500 - newLength;
});
