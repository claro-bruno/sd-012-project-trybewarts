function login() {
  const btLogin = document.querySelector('#btLogin');
  btLogin.addEventListener('click', () => {
    const inputEmail = document.querySelector('#email-login');
    const inputPasswd = document.querySelector('#passwd-login');
    if (inputEmail.value === 'tryber@teste.com' && inputPasswd.value === '123456') {
      alert('Olá, Tryber!');
      inputEmail.value = '';
      inputPasswd.value = '';
    } else {
      alert('Login ou senha inválidos.');
    }
    inputEmail.value = '';
    inputPasswd.value = '';
  });
}
login();
