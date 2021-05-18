const inputLogin = document.getElementById('input-login');
const inputSenha = document.getElementById('input-senha');
const botaoLogar = document.getElementById('botao-logar');
const botaoEnviar = document.getElementById('submit-btn');
const checkBoxAgree = document.getElementById('agreement');

botaoLogar.addEventListener('click', () => {
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } if (inputLogin.value !== 'tryber@teste.com' || inputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  }
});

botaoEnviar.disabled = true;
checkBoxAgree.addEventListener('input', () => {
  if (document.querySelectorAll('#agreement:checked').length !== 0) {
    botaoEnviar.disabled = false;
  } if (document.querySelectorAll('#agreement:checked').length === 0) {
    botaoEnviar.disabled = true;
  }
});
