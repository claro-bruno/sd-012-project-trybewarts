const btnLogin = document.getElementById('btn-login');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const regexEmail = /^[\w.-]+@\w+\.\w+$/g;
const regexSenha = /^\d{6}$/g;
const checkInfos = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

function checkFormat(event) {
  event.preventDefault();
  if (!regexEmail.test(email.value) || !regexSenha.test(senha.value)) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

btnLogin.addEventListener('click', checkFormat);

function enabledAndDisabled(event) {
  if (event.target.checked === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

checkInfos.addEventListener('change', enabledAndDisabled);
