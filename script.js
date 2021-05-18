const loginButton = document.getElementById('button-login');
const inputLogin = document.getElementById('input-login');

function loginButtonExec() {
  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputLogin.value.includes('@')) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

loginButtonExec();
