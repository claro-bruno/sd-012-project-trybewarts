const login = document.querySelector('#login');
const senha = document.querySelector('#password');

const botao = document.querySelector('#buttonSubmit');
botao.addEventListener('click', () => {
  const loginTrybe = 'tryber@teste.com';
  const senhaTrybe = '123456';
  if (login.value !== loginTrybe && senha.value !== senhaTrybe) {
    window.alert('Login ou senha inválidos.');
  } else {
    window.alert('Olá, Tryber!');
  }
});
