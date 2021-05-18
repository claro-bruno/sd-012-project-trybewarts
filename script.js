const button = document.querySelector('.submit-btn');

function login() {
  const email = document.querySelector('.email-input').value;
  const senha = document.querySelector('.senha-input').value;

  if (email !== 'tryber@teste.com' || senha !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

button.addEventListener('click', login);
