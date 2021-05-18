const loginButton = document.getElementById('button-login');
const inputLogin = document.getElementById('input-login');
const agreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function loginButtonExec() {
  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputLogin.value.includes('@')) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

function submitButtonExec() {
  agreement.addEventListener('click', () => {
    if (agreement.checked) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
}

function textareaExec() {
  let countNum = 0;
  textarea.addEventListener('keyup', () => {
    countNum = 500 - textarea.value.length;
    counter.innerHTML = countNum;
  });
}

loginButtonExec();
textareaExec();
submitButtonExec();
