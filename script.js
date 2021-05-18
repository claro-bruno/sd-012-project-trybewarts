const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const btn = document.querySelector('#buttonEntrar');
const form = document.querySelector('.trybewarts-login');

function verificaLogin () {
  if(login.value !== 'tryber@teste.com' && senha.value !== '123456') {
    alert('Login ou senha inválidos.');
  }
  else {
    alert('Olá, Tryber!');
  }
}

btn.addEventListener('click', verificaLogin);
