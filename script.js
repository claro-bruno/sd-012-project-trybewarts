function verificaLogin() {
  const login = document.querySelector('#login');
  const textoLogin = login.value;
  const senha = document.querySelector('#senha');
  const textoSenha = senha.value;

  if (textoLogin !== 'tryber@teste.com' && textoSenha !== '123456') {
    alert('Login ou senha inválidos.');
  } else if (textoLogin === 'tryber@teste.com' && textoSenha === '123456') {
    alert('Olá, Tryber!');
  }
}
const botaoLogar = document.querySelector('#botaoLogar');
botaoLogar.addEventListener('click', verificaLogin);
