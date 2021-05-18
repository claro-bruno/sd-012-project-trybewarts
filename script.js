const loginBtn = document.querySelector('form button');

function validateInput() {
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  if (emailInput.value === 'tryber@teste.com'
  && passwordInput.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Login ou senha inválidos.');
}

window.onload = () => {
  loginBtn.addEventListener('click', validateInput);
};
