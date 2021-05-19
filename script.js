const inputLogin = document.querySelector('#input-login');
const inputSenha = document.querySelector('#input-senha');
const btnLogin = document.querySelector('#btn-login');
// Validação de login
btnLogin.addEventListener('click', () => {
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
// Habilita botão Enviar quando usuário marcar checkbox de uso de informações
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', 'disabled');
  }
});
// Configura contador de caracteres do campo de comentário
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const maxLength = 500;
counter.innerHTML = maxLength;
textArea.addEventListener('input', () => {
  counter.innerHTML = maxLength - textArea.value.length;
});
