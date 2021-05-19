const loginField = document.getElementsByClassName('login-field');
const senhaField = document.getElementsByClassName('senha-field');

function validate() {
  if (loginField.value === 'tryber@teste.com' && senhaField.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

document.getElementById('entrar').addEventListener('click', validate);
