const loginName = document.getElementById('login');
const loginSenha = document.getElementById('senha');
const logarBtn = document.getElementById('logar');
const sendBtn = document.getElementById('submit-btn');
const agreeCb = document.getElementById('agreement');

sendBtn.disabled = true;

function validaçãoLogin(event) {
  console.log(loginName, loginSenha);
  if (loginName.value === 'tryber@teste.com' && loginSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    event.preventDefault();
    alert('Login ou senha inválidos.');
  }
}

logarBtn.addEventListener('click', validaçãoLogin);

function sendForm() {
  if (agreeCb.checked) { sendBtn.disabled = false; } else { sendBtn.disabled = true; }
}

agreeCb.addEventListener('click', sendForm);
