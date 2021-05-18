function checkLogin() {
  const loginButton = document.querySelector('#loginButton');
  const defaultLogin = 'tryber@teste.com';
  const defaultPassword = '123456';
  const loginInput = document.querySelector('#login');
  const passwordInput = document.querySelector('#password');

  loginButton.addEventListener('click', () => {
    const login = loginInput.value;
    const password = passwordInput.value;
    if (login === defaultLogin && password === defaultPassword) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
checkLogin();
