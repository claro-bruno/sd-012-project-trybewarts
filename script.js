const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const btn = document.querySelector('#buttonEntrar');
const btn2 = document.querySelector('#submit-btn');

function verificaLogin() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const inputName = document.getElementById('input-name').value;
const inputLastName = document.getElementById('input-lastname').value;
const inputEmail = document.getElementById('input-email').value;
const inputHouse = document.getElementById('house').value;
const inputsFamilia = document.getElementsByName('family');
const inputsConteudo = document.getElementsByName('conteudo');
const mainElement = document.getElementById('mainEl');

<<<<<<< HEAD
=======
function getFamily() {
  let textoFam = 'Família: '
  for (index = 0; index < inputsFamilia.length; index += 1){
    if (inputsFamilia[index].checked) {
     let famSelec = inputsFamilia[index].value;
     textoFam += famSelec;
    }
  }
  return textoFam;
}

getFamily();

function getConteudo() {
  let textoCont = 'Matérias: '
  for (index = 0; index < inputsConteudo.length; index += 1){
    if (inputsConteudo[index].checked) {
     let contSelec = inputsConteudo[index].value;
     textoCont += contSelec + ', '
    }
  }
  return textoCont;
}

getConteudo();

function criaDiv () {
  let formDiv = document.createElement('div');
  mainElement.appendChild(formDiv);
  
  for (index1 = 0; index1 < 7; index1 += 1){
    let pDiv = document.createElement('p');
    pDiv.className = 'formItens';
    formDiv.appendChild(pDiv);
  }

  let textoNomeSobrenome = 'Nome: ' + inputName + ' ' + inputLastName;
  let textoEmail = 'Email: ' + inputEmail;
  let textoCasa = 'Casa: ' + inputHouse;
  getFamily();
  getConteudo();
}

const evalForm = document.getElementById('evaluation-form');

function hideForm() {
  evalForm.style.display='none';
  criaDiv();
}

function preventDef (event) {
  event.preventDefault();
}

evalForm.addEventListener('submit', preventDef);

btn2.addEventListener('click', hideForm);

>>>>>>> f8c527ed617c6caf99b44e961ee9956ea5b70bb6
btn.addEventListener('click', verificaLogin);
const valor = document.querySelector('#agreement');

function habilitaBotão() {
  if (valor.checked) {
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
<<<<<<< HEAD
<<<<<<< HEAD

let nome = document.querySelector('#input-name').value;
let sobrenome = document.querySelector('#nput-lastname').value;
nome.innerHTML = nome + sobrenome;
=======
// btn2.addEventListener('click', substituiForm)
>>>>>>> 1d83929432f6fca90b6a896762e51690cfcc3e4c
>>>>>>> f8c527ed617c6caf99b44e961ee9956ea5b70bb6
=======

>>>>>>> e4bccd70a4c02ad3c50d1ae02da1d3891f2ff019
