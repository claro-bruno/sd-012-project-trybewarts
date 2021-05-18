const login = document.getElementById('login-input');
const senha = document.getElementById('senha-input');
const logar = document.getElementById('logar-button');

function validaLogar() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

logar.addEventListener('click', validaLogar);
