const captureEmail = document.getElementById('login');
const capturePassword = document.getElementById('senha');
const captureBtnLogin = document.getElementById('logar');
const captureBtnSubmit = document.getElementById('submit-btn');
const captureCheckbox = document.getElementById('agreement');
const whatWasTyped = document.getElementById('textarea');
const counter = document.getElementById('counter');
captureBtnSubmit.disabled = true;
//  Para acessar Login e Senha
function acessLogin(event) {
  console.log(captureEmail, capturePassword);
  if (captureEmail.value === 'tryber@teste.com' && capturePassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    event.preventDefault();
    alert('Login ou senha inválidos.');
  }
}

captureBtnLogin.addEventListener('click', acessLogin);

//  Para habilitar/desabilitar botão submit

function controlBtn() {
  if (captureCheckbox.checked) {
    captureBtnSubmit.disabled = false;
  } else {
    (captureBtnSubmit.disabled = true);
  }
}

captureCheckbox.addEventListener('click', controlBtn);

whatWasTyped.addEventListener('input', (e) => {
  const {
    target,
  } = e;

  const maxLength = target.getAttribute('maxlength');

  const currentLength = target.value.length;

  counter.innerHTML = maxLength - currentLength;

});
