const butto = document.querySelector('#botao');
const log = document.querySelector('#input-login');
const senha = document.querySelector('#input-senha');

butto.addEventListener('click', () => {
  if (log.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
