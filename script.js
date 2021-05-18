const button = document.getElementsByClassName('trybewarts-login')[0].lastElementChild;

function checkLogin() {
  const emailInput = document.getElementsByClassName('trybewarts-login')[0].firstElementChild;
  const passInput = emailInput.nextElementSibling;

  if (emailInput.value === 'tryber@teste.com' && passInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
button.addEventListener('click', checkLogin);
