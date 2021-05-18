const inputLogin = document.getElementById('input-login');
const inputSenha = document.getElementById('input-senha');
const botaoLogar = document.getElementById('botao-logar');

function loginAlert() {
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } if (inputLogin.value !== 'tryber@teste.com' || inputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  }
}
botaoLogar.addEventListener('click', loginAlert);

const takeAgreement = document.getElementById('agreement');
const takeSubmitBtn = document.getElementById('submit-btn').disabled = true;

takeAgreement.addEventListener('input', function(event) {

  if (event.target !== null) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  };
});
