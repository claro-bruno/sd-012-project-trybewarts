const botao = document.getElementById('submit-btn');
const confirma = document.getElementById('agreement');
botao.disabled = true;
confirma.addEventListener('change', () => {
  if (confirma.checked === false) {
    botao.disabled = true;
  } else {
    botao.disabled = false;
  }
});
const senha = document.querySelector('#senha');
const email = document.querySelector('#email');
const botaoHeader = document.querySelector('#btnheader');
function verificaLogin() {
  const novaSenha = '123456';
  const novaEmail = 'tryber@teste.com';
  if (senha.value !== novaSenha || email.value !== novaEmail) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
botaoHeader.addEventListener('click', verificaLogin);
