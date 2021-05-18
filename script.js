const password = document.getElementById('password');
const correctPassword = (123456);
const login = document.getElementById('login');
const correctLogin = 'tryber@teste.com';
const logar = document.getElementById('login-button');

function verifyLogin() {
  if (password.value === correctPassword && login.value === correctLogin) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos');
  }
}

logar.addEventListener('click', verifyLogin);
