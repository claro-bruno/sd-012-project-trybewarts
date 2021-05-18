const submitButtom = document.getElementById('submit-button');

function submit() {
  const inputLogin = document.getElementById('input-login');
  const inputPassword = document.getElementById('input-password');

  if (inputLogin.value !== 'tryber@teste.com' && inputPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

submitButtom.addEventListener('click', submit);
