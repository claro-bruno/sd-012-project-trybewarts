function checar() {
  const valorEmail = document.getElementById('login').value;
  const valorSenha = document.getElementById('senha').value;
  const emailDefault = 'tryber@teste.com';
  const senhaDefault = '123456';

  if (valorEmail === emailDefault && valorSenha === senhaDefault) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const botao = document.getElementById('botao');
botao.addEventListener('click', checar);

const botaoSubmit = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');

function ativarBotao() {
  if (checkBox.checked) {
    botaoSubmit.disabled = false;
  } else {
    botaoSubmit.disabled = true;
  }
}

checkBox.addEventListener('click', ativarBotao);

const areaTexto = document.getElementById('textarea');
areaTexto.addEventListener('keyup', (event) => {
  const sub = event.target.maxLength - event.target.textLength;
  document.getElementById('counter').innerHTML = sub;
}, false);


