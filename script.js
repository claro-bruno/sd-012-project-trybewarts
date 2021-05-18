const buttonLogin = document.getElementById('btn-login');
const login = document.getElementById('login');
const senha = document.getElementById('senha');

function logar() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  }else {
    alert('Login ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', logar);
