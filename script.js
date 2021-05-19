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
const senha = document.querySelector('#senha').value;
const email = document.querySelector('#email').value;
const botaoHeader = document.querySelector('#btnheader');
function verificaLogin() {
  const nSenha = document.querySelector('#senha').value;
  const nEmail = document.querySelector('#email').value;
  if (senha !== nSenha || email !== nEmail) {
    alert('Login ou senha inválidos.');
  } else if (senha === nSenha && email === nEmail) {
    alert('Olá, Tryber!');
  }
};
botaoHeader.addEventListener('click', verificaLogin)
