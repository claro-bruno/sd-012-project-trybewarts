function verificaLogin() {
  const login = document.querySelector('#login');
  const textoLogin = login.value;
  const senha = document.querySelector('#senha');
  const textoSenha = senha.value;

  if (textoLogin !== 'tryber@teste.com' && textoSenha !== '123456') {
    alert('Login ou senha inválidos.');
  } else if (textoLogin === 'tryber@teste.com' && textoSenha === '123456') {
    alert('Olá, Tryber!');
  }
}

const botaoLogar = document.querySelector('#botaoLogar');
botaoLogar.addEventListener('click', verificaLogin);

// Função contarCaracters inspirada na explicação vista no link http://www.mattmorgante.com/technology/textarea-remaining-characters-javascript

function contarCaracters() {
  const textoDigitado = document.querySelector('#textarea').value;
  const valorContador = (500 - (textoDigitado.length));
  const contador = document.querySelector('#counter');
  contador.innerText = `${valorContador}/500`;
}

const contador = document.querySelector('#counter');
contador.innerText = '500/500';
const textArea = document.querySelector('#textarea');
textArea.addEventListener('keyup', contarCaracters);
