window.onload = function () {
<<<<<<< HEAD
  let buttonLogin = document.getElementById('btn-login');
  buttonLogin.addEventListener('click', logar);
  let login = document.getElementById('login');
  let senha = document.getElementById('senha');

  function logar () {
=======
  const buttonLogin = document.getElementById('btn-login');
  const login = document.getElementById('login');
  const senha = document.getElementById('senha');

  function logar() {
>>>>>>> e4b1a3f484db2e0b416472abb7b24790a230d995
    if (login.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    }else {
      alert('Login ou senha inválidos.');
    }
  }
<<<<<<< HEAD
=======
  buttonLogin.addEventListener('click', logar);
>>>>>>> e4b1a3f484db2e0b416472abb7b24790a230d995
};
