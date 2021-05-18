const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botaoLogar = document.getElementById('logar');

botaoLogar.addEventListener("click", alerta);

function alerta() {
  if (email.value !== 'tryber@teste.com' || senha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
