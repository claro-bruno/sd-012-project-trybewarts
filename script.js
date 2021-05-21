const login = document.getElementById('login');
const senha = document.getElementById('senha');
const botao = document.getElementById('btn');
const enviar = document.getElementById('submit-btn');
const agree = document.getElementById('agreement');

function alerta() {
  if (login.value !== 'tryber@teste.com' || senha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

botao.addEventListener('click', alerta);

enviar.disabled = true;

function turnOnButton() {
  if (enviar.disabled === true) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
}

agree.addEventListener('click', turnOnButton);
