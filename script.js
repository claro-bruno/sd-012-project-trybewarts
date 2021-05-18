window.onload = function() {
  let buttonLogin = document.getElementById('btn-login');
  buttonLogin.addEventListener('click', logar);
  let login = document.getElementById('login');
  let senha = document.getElementById('senha');

  function logar() {
    if(login.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    }
    else {
      alert('Login ou senha inválidos.');
    }
  }
}