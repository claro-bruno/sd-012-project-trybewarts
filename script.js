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

const checkbox = document.querySelector('#agreement');
function clickCheck() {
  const submit = document.querySelector('#submit-btn');
 
  if (checkbox.checked) {
    submit.style.backgroundColor = 'slateblue';
    submit.disabled = false;
  } else {
    submit.style.backgroundColor = 'dimgray';
    submit.disabled = true;
    
  }

}

checkbox.addEventListener('click', clickCheck);
