const btnEl = document.querySelector('.btn');
const inputEmail = document.querySelector('.email');
const inputPassword = document.querySelector('.senha');
const botaoSubmit = document.querySelector('#submit-btn');
const botaoCheck = document.querySelector('#agreement');
const textareaEl = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

btnEl.addEventListener('click', () => {
  if (inputEmail.value !== 'tryber@teste.com' && inputPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

botaoSubmit.disabled = true;
botaoCheck.addEventListener('click', () => {
  if (botaoCheck.checked) {
    botaoSubmit.disabled = false;
  }
});

function charCounter() {
  const lng = `${500 - textareaEl.value.length}`;
  counter.textContent = lng;
}
textareaEl.addEventListener('keyup', charCounter);
window.onload = charCounter;
