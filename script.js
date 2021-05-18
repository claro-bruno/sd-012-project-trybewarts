<<<<<<< HEAD

function alerta() {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  const botaoLogar = document.getElementById('logar');

  botaoLogar.addEventListener('click', () => {
=======
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botaoLogar = document.getElementById('logar');

botaoLogar.addEventListener('click', verificaLogin);

function verificaLogin() {
>>>>>>> 41d44eda9472013f492250d4ba0299e6c8cbab87
  if (email.value !== 'tryber@teste.com' || senha.value !== '123456') {
    return alert('Login ou senha inválidos.');
  } else {
    return alert('Olá, Tryber!');
  }
 });
}

window.onload = function load () {
  alerta()
};
