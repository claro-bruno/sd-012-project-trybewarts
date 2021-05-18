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
botaoHeader.addEventListener('click', function() {
  const novaSenha = document.querySelector('#senha').value;
  const novoEmail = document.querySelector('#email').value;
  if (senha !== novaSenha || email !== novoEmail) {
    alert('Login ou senha inválidos.');
  } else if (senha === novaSenha && email === novoEmail) {
    alert('Olá, Tryber!');
  }
});
