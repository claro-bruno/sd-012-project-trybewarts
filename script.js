const inputLogin = document.querySelector('.input-login');
const inputSenha = document.querySelector('.input-senha');
const btnLogin = document.querySelector('.btn-login');

btnLogin.addEventListener('click', () => {
  if (inputLogin.value !== 'tryber@teste.com' && inputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
  const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', validate);

const agreement = document.querySelector('#agreement');
const enviar = document.querySelector('#submit-btn');
agreement.addEventListener('click', () => {
  if (agreement.checked) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
});
});
