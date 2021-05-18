const botaoLogin = document.querySelector('#botao-login');
const inputLogin = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');

function login() {
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

botaoLogin.addEventListener('click', login);
