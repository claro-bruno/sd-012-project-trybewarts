const pegabotao = document.querySelector('#botao');
function clicarLogar() {
  let email1 = document.getElementById('email').value;
  let password2 = document.getElementById('password').value;
  if (email1 === 'tryber@teste.com' && password2 === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');

  }
}

pegabotao.addEventListener('click', clicarLogar);

const checkzinho = document.getElementsByClassName('abriu');
const botaocheck = doxument.querySelector('.fechou').disabled = 'true';

function clickbait () {
botaocheck.disabled = 'false';  
}
checkzinho.addEventListener('click', clickbait);