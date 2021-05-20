function logar() {
  const login = document.getElementById('input-login');
  const senha = document.getElementById('input-password');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const botao = document.getElementById('submit-login');
botao.addEventListener('click', logar);

function enviar(event) {
  const sendButton = document.getElementById('submit-btn');
  if (event.target.value === 'on') {
    sendButton.disabled = false;
    event.target.value = 'off';
  } else {
    sendButton.disabled = true;
    event.target.value = 'on';
  }
}

function concorda(event) {
  if (event.target.id === 'agreement') {
    enviar(event);
  } else {
    event.target.removeEventListener('click', concorda);
  }
}

document.addEventListener('click', concorda);
