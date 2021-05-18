const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botaoLogar = document.getElementById('logar');

botaoLogar.addEventListener('click', verificaLogin);

function verificaLogin() {
  if (email.value !== 'tryber@teste.com' || senha.value !== '123456') {
    return alert('Login ou senha inválidos.');
  } else {
    return alert('Olá, Tryber!');
  }
}
