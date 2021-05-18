const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const btn = document.querySelector('#buttonEntrar');

function verificaLogin() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btn.addEventListener('click', verificaLogin);
