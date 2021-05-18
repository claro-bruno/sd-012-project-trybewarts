// Requisito 3
const loginSubmitBtn = document.getElementById('login-submit');
const loginUser = document.getElementById('login-name');
const loginPwd = document.getElementById('login-pwd');
function validateLogin(e) {
  e.preventDefault();
  const user = loginUser.value;
  const pwd = loginPwd.value;
  if (user === 'tryber@teste.com' && pwd === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
loginSubmitBtn.addEventListener('click', validateLogin);
