const loginField = document.getElementById('login-field');
const senhaField = document.getElementById('senha-field');

function validate() {
    console.log(loginField.value)
  if (loginField.value === 'tryber@teste.com' && senhaField.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}


