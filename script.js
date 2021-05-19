const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const btn = document.querySelector('#buttonEntrar');
const btn2 = document.querySelector('#submit-btn');

function verificaLogin() {
  if(login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const inputsFamilia = document.getElementsByName('family');
const inputsConteudo = document.getElementsByName('conteudo');
const mainElement = document.getElementById('mainEl');
const inputAval = document.getElementsByName('rate');

function getFamily() {
  let textoFam = 'Família: '
  for (let index = 0; index < inputsFamilia.length; index += 1){
    if (inputsFamilia[index].checked) {
     let famSelec = inputsFamilia[index].value;
     textoFam += famSelec;
    }
  }
  return textoFam;
}

function getAvaliacao() {
  let textoAva = 'Avaliação: '
  for (let index = 0; index < inputAval.length; index += 1){
     if (inputAval[index].checked) {
     let rate = inputAval[index].value;
     textoAva += rate;
    }
  }
  return textoAva;
}

function getConteudo() {
  let textoCont = 'Matérias: '
  for (let index = 0; index < inputsConteudo.length; index += 1){
    if (inputsConteudo[index].checked) {
     let contSelec = inputsConteudo[index].value;
     textoCont += `${contSelec}, `;
    }
  }
  return textoCont;
}

  const evalForm = document.getElementById('evaluation-form')

function criaDiv() {
  let formDiv = document.createElement('div');
  formDiv.id = 'div2';
  evalForm.appendChild(formDiv);
  for (let index1 = 0; index1 < 7; index1 += 1){
    let pDiv = document.createElement('p');
    pDiv.id = 'formItens' + index1;
    pDiv.innerHTML = recebeValores(index1);
    formDiv.appendChild(pDiv);
  }
}

function recebeValores(num) {
  const inputName = document.getElementById('input-name').value;
  const inputLastName = document.getElementById('input-lastname').value;
  const inputEmail = document.getElementById('input-email').value;
  const inputHouse = document.getElementById('house').value;
  const comentText = document.getElementById('textarea').value;
  let fullName = `Nome: ${inputName} ${inputLastName}`;
  let textoEmail = `Email: ${inputEmail}`;
  let textoCasa = `Casa: ${inputHouse}`;
  let textoComent = `Observações: ${comentText}`;
  let array = [fullName, textoEmail, textoCasa, getFamily(), getConteudo(), getAvaliacao(), textoComent];
  return array[num];
}

const div1 = document.getElementById('div1');

function hideForm() {
  div1.style.display = 'none';
  criaDiv();
}

function preventDef(event) {
  event.preventDefault();
}

evalForm.addEventListener('submit', preventDef);
btn2.addEventListener('click', hideForm);
btn.addEventListener('click', verificaLogin);
const valor = document.querySelector('#agreement');

function habilitaBotão() {
  if(valor.checked) {
    btn2.disabled = false;
  } else {
    btn2.disabled = true;
  }
}

valor.addEventListener('click', habilitaBotão);

function limite_textarea(valor) {
  let quant = 500;
  let total = valor.length;
  if(total <= quant) {
    resto = quant - total;
    document.getElementById('counter').innerHTML = resto;
  } else {
    document.getElementById('textarea').value = valor.substr(0,quant);
  }
}
