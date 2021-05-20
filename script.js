const loginName = document.getElementById('login');
const loginSenha = document.getElementById('senha');
const logarBtn = document.getElementById('logar');
const sendBtn = document.getElementById('submit-btn');
const agreeCb = document.getElementById('agreement');
const counter = document.getElementById('counter');
const freeText = document.getElementById('textarea');
const abstractPlace = document.querySelector('.abstract');

// Código para validação do Login conforme especificado;
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

// Iniciar a página com o Botão enviar form desabilitado;
sendBtn.disabled = true;

// Habilitar o botão enviar quando selecionado o "aceite de termos";
function ableSend() {
  if (agreeCb.checked) { sendBtn.disabled = false; } else { sendBtn.disabled = true; }
}

agreeCb.addEventListener('click', ableSend);

// Contador de Char;
function countChar() {
  counter.innerText = `${500 - freeText.value.length}/500`;
}

freeText.addEventListener('keyup', countChar);

window.onload = countChar;

// Gerar textos após o clique do botão de envio;
function generateText(array) {
  let text = '';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].checked === true) { text += ` ${array[index].value},`; }
  }
  return text.slice(0, -1);
}

function generateElement(text) {
  const textElement = document.createElement('p');
  textElement.innerText = text;
  abstractPlace.appendChild(textElement);
}

function generateAbstract(event) {
  event.preventDefault();
  abstractPlace.innerHTML = '';
  abstractPlace.style.border = '1px solid black';
  const nameInput = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house');
  const family = document.getElementsByName('family');
  const subject = document.getElementsByClassName('subject');
  const rate = document.getElementsByName('rate');
  generateElement(`Nome: ${nameInput} ${lastName}`);
  generateElement(`Email: ${email}`);
  generateElement(`Casa: ${house.options[house.selectedIndex].innerText}`);
  generateElement(`Família: ${generateText(family)}`);
  generateElement(`Matérias: ${generateText(subject)}`);
  generateElement(`Avaliação: ${generateText(rate)}`);
  generateElement(`Observações: ${freeText.value}`);
}

sendBtn.addEventListener('click', generateAbstract);
