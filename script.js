const pegabotao = document.querySelector('#botao');
function clicarLogar() {
  let email1 = document.getElementById('email').value.toLowerCase();
  let password2 = document.getElementById('password').value;
  if (email1 === 'tryber@teste.com' && password2 === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
    email1 = '';
    password2 = '';
  }
}

pegabotao.addEventListener('click', clicarLogar);
