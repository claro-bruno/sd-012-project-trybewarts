const inputLogin = document.getElementById('input-login');
const inputSenha = document.getElementById('input-senha');
const botaoLogar = document.getElementById('botao-logar');
const botaoEnviar = document.getElementById('submit-btn');

botaoLogar.addEventListener('click', () => {
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } if (inputLogin.value !== 'tryber@teste.com' || inputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  }
});

botaoEnviar.disabled = true;
botaoEnviar.addEventListener('input', () => {
  botaoEnviar;
  if (document.querySelectorAll('.subject:checked').length !== 0) {
    botaoEnviar.disabled = false;
  } if (document.querySelectorAll('.subject:checked').length === 0) {
    botaoEnviar.disabled = true;
  }
});
