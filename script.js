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

function clickbait () {
  let botaocheck = document.querySelector('.fechou');
  botaocheck.disabled = false;
}

checkzinho.addEventListener('click', clickbait);
