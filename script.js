const inputLogin = document.querySelector('#login');
const inputSenha = document.querySelector('#senha');

const botao = document.querySelector('#btn-login');
botao.addEventListener('click', () => {
  console.log(inputLogin.value, inputSenha.value);

  const login = 'tryber@teste.com';
  const senha = '123456';

  if (inputLogin.value !== login && inputSenha.value !== senha) {
    window.alert('Login ou senha inválidos.');
  } else {
    window.alert('Olá, Tryber!');
  }
});
