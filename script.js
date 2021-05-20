const btnEl = document.querySelector('.btn');
const inputEmail = document.querySelector('.email');
const inputPassword = document.querySelector('.senha');

btnEl.addEventListener('click', () => {
  if (inputEmail.value !== 'tryber@teste.com' && inputPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

const botaoSubmit = document.querySelector('#submit-btn');
const botaoCheck = document.querySelector('#agreement');

botaoSubmit.disabled=true
botaoCheck.addEventListener('click', () => {
  if (botaoCheck.checked) {
    botaoSubmit.disabled=false
  }
})