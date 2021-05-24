const pegabotao = document.querySelector('#botao');
function clicarLogar() {
  const email1 = document.getElementById('email').value;
  const password2 = document.getElementById('password').value;
  if (email1 === 'tryber@teste.com' && password2 === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

pegabotao.addEventListener('click', clicarLogar);

const checkzinho = document.getElementsByClassName('abriu')[0];

function clickbait() {
  const botaocheck = document.querySelector('.fechou');
  botaocheck.disabled = false;
  if (botaocheck.disable) {
    botaocheck.style.backgroundColor = 'slateblue';
  }
}

checkzinho.addEventListener('click', clickbait);
