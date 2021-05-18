function formLogin() {
  const loginInput = document.getElementById('loginInput');
  const loginButton = document.getElementById('loginButton');
  const passwordInput = document.getElementById('passwordInput');
  loginButton.addEventListener('click', () => {
    if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

window.onload = function loadPage() {
  formLogin();
};
