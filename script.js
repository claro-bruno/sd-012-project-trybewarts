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
