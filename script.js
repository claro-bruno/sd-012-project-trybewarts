const loginName = document.getElementById('login');
const loginSenha = document.getElementById('senha');
const logarBtn = document.getElementById('logar');
const sendBtn = document.getElementById('submit-btn');
const agreeCb = document.getElementById('agreement');
const counter = document.getElementById('counter');
const freeText = document.getElementById('textarea');
const abstractPlace = document.querySelector('.abstract');

sendBtn.disabled = true;

function validaçãoLogin(event) {
  console.log(loginName, loginSenha);
  if (loginName.value === 'tryber@teste.com' && loginSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    event.preventDefault();
    alert('Login ou senha inválidos.');
  }
}

logarBtn.addEventListener('click', validaçãoLogin);

function sendForm() {
  if (agreeCb.checked) { sendBtn.disabled = false; } else { sendBtn.disabled = true; }
  generateText ();
}

agreeCb.addEventListener('click', sendForm);

function countChar() {
  counter.innerText = `${500 - freeText.value.length}/500`;
}

freeText.addEventListener('keyup', countChar);

window.onload = countChar;

function generateElement(text) {
  let textElement = document.createElement('p');
  textElement.innerText = text;
  abstractPlace.appendChild(textElement);
}

function generateText() {
  const nameInput = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house');
  const family = document.getElementsByName('family');
  const subject = document.getElementsByClassName('subject');
  
  generateElement(`Nome: ${nameInput} ${lastName}`);
  generateElement(`Email: ${email}`);
  generateElement(`Casa: ${house.options[house.selectedIndex].innerText}`);
  
  let checkedFamily = 0;
  for(let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {checkedFamily = index; index = family.length;}
  }
  generateElement(`Família: ${family[checkedFamily].value}`);
}
