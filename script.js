function verifyLogin(login, password) {
  if (login === 'tryber@teste.com') {
    if (password === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  } else {
    alert('Login ou senha inválidos.');
  }
}

function addEvents() {
  const headerForm = document.querySelector('.trybewarts-login');
  const headerChildren = headerForm.children;
  const headerFormButton = headerChildren[2];

  headerFormButton.addEventListener('click', () => {
    verifyLogin(headerChildren[0].value, headerChildren[1].value);
  });
}

addEvents();
/* const loginButton = document.getElementById('botao-login');

function checkLogin() {
  const login = document.getElementById('login-field');
  const senha = document.getElementById('senha');

  if ((login.value.toString() === 'tryber@teste.com') && (senha.value.toString() === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
loginButton.addEventListener('click', checkLogin);
*/
