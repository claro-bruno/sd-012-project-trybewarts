const password = document.querySelector('.password');
const login = document.querySelector('.login');
const loginButton = document.querySelector('.login-button');

function preventDef(event) {
  event.preventDefault();
}

loginButton.addEventListener('click', () => {
  preventDef();
  if (login.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
