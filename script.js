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
  botaocheck.disabled = false
  if(botaocheck.disabled == false) {
    botaocheck.style.backgroundColor = 'slateblue';
  }
}

checkzinho.addEventListener('click', clickbait);

/* const textArea = document.querySelector('#text-area')
function calculoText() {
const visor = document.querySelector('#counter')
visor.innerText = '500';
const length = document.querySelector('#text-area')
.value.length;
const valueNum = paseInt(length);
const cont = 500 - valueNum;
visor.innerText = cont ;

}
textArea.addEventListener('input', calculoText);
 */
const textArea = document.querySelector('#text-area')
function calculoText() {
let contador = document.querySelector('#counter').innerText = '500';
let valueTxt = textArea.innerText.value;
const valueNum = parseInt(valueTxt)
const cont = 500 - valueNum;
contador.innerText = cont;

}

textArea.addEventListener('keypress', calculoText)