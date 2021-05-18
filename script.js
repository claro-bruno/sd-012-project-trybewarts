const logar = document.querySelector('.logar');

logar.addEventListener('click', () => {
  const login = document.querySelector('.login');
  const senha = document.querySelector('.senha');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
