const inputLogin = document.querySelector('.input-login');
const inputSenha = document.querySelector('.input-senha');
const btnLogin = document.querySelector('.btn-login');
const agreement = document.querySelector('#agreement');
const enviar = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const count = document.querySelector('#counter');

btnLogin.addEventListener('click', () => {
  if (inputLogin.value !== 'tryber@teste.com' && inputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
});

textarea.addEventListener('keyup', () => {
  count.innerHTML = 500 - textarea.value.length;
  textarea.innerHTML = count;
});
