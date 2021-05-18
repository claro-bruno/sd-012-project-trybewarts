const botaoLogar = document.querySelector('#botaoLogar');
const login = document.querySelector('#login');
const senha = document.querySelector('#senha');

botaoLogar.addEventListener('click', function verificaLogin() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
});
