const login = document.getElementById('login');
const password = document.getElementById('password')

function loginCheck() {
  if (login.value === 'tryber@teste.com' && password.value === '123456'){
    alert('Olá, Tryber!');
    return;
  }
  alert('Login ou senha inválidos.');
  return;
}