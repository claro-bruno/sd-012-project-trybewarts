const login = document.getElementById('login');
const password = document.getElementById('password');
const loginButton = document.getElementById('login-btn');
const loginInput = 'tryber@teste.com';
const passwordInput = '123456';

function loginValidate() {
  if (login.value === loginInput && password.value === passwordInput) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', loginValidate);
