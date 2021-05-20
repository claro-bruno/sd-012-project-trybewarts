const login = document.querySelector('.login-button');
login.addEventListener('click', () => {
  if (document.getElementById('input-login').value !== 'tryber@teste.com'
  || document.getElementById('input-senha').value !== '123456') {
    window.alert('Login ou senha inválidos.');
  } else {
    window.alert('Olá, Tryber!');
  }
});
