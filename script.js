const login = document.getElementById('login');
const senha = document.getElementById('senha');
const botao = document.getElementById('btn');

function alerta() {
  if (login.value != 'tryber@teste.com' || senha.value != '123456') {
    alert('Login ou senha inválidos');
  } else {
    alert('Olá, Tryber!');
  }
}

botao.addEventListener('click', alerta);
