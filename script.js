const loginField = document.getElementById('login-field');
const senhaField = document.getElementById('senha-field');

function validate() {
  if (loginField.value !== 'tryber@teste.com' && senhaField.value !== '123456') {
    return;
  }
  if (loginField.value === 'tryber@teste.com' && senhaField.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

validate();
