const login = document.getElementById('login');
const senha = document.getElementById('senha');

document.addEventListener('click', (event) => {
  if (event.target.id === 'button-logar') {
    if (login.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  }
});
