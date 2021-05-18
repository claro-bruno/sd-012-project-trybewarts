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
