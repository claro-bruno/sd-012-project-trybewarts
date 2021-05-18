const botaoLogar = document.querySelector('#botaoLogar');
const login = document.querySelector('#login');
const senha = document.querySelector('#senha');

botaoLogar.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
