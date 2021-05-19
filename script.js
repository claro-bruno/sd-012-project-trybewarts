const btnLogin = document.querySelector('#submit-login');
const checkboxAgreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function verificationInputsLogin() {
  const inputLogin = document.querySelector('#input-login');
  const inputPassword = document.querySelector('#input-password');

  if (
    inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', () => {
  verificationInputsLogin();
});

checkboxAgreement.addEventListener('click', () => {
  if (checkboxAgreement.checked) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', 'disabled');
  }
});

counter.innerText = 500;
textarea.addEventListener('input', () => {
  const maxCaracteres = textarea.getAttribute('maxLength');
  const caracteresDigitados = textarea.value.length;
  const caracteresRestantes = maxCaracteres - caracteresDigitados;

  counter.innerText = caracteresRestantes;
});
