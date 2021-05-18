const buttonLogin = document.getElementById('btn-login');
const login = document.getElementById('login');
const senha = document.getElementById('senha');

function logar() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', logar);

const buttonEnviar = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

function enviar() {
  if (buttonEnviar.disabled === true) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
}

agreement.addEventListener('click', enviar);

const textarea = document.getElementById('textarea');
textarea.addEventListener('input', () => {
  counter.innerText = 500 - textarea.value.length;
});
