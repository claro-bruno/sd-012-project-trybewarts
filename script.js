const emailLogin = document.getElementById('email-login');
const senhaLogin = document.getElementById('senha-login');
const submitLogin = document.getElementById('submit-login');
const formLogin = document.getElementsByClassName('trybewarts-login');

formLogin.addEventListener('submit', (event) => {
  event.preventDefault();
});

function validaLogin() {
  if (emailLogin.value === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else if (senhaLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

submitLogin.addEventListener('click', validaLogin);
