const btnLogin = document.getElementById('btn-login');

function signIn() {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  if (login === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', signIn);
