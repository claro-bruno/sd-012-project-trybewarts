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

const inputsFamilia = document.getElementsByName('family');
const inputsConteudo = document.getElementsByName('conteudo');
const inputAval = document.getElementsByName('rate');
const div1 = document.getElementById('div1');
const evalForm = document.getElementById('evaluation-form');
const valor = document.querySelector('#agreement');

function getFamily() {
  let textoFam = 'Família: ';
  for (let index = 0; index < inputsFamilia.length; index += 1) {
    if (inputsFamilia[index].checked) {
      const famSelec = inputsFamilia[index].value;
      textoFam += famSelec;
    }
  }
  return textoFam;
}

function getAvaliacao() {
  let textoAval = 'Avaliação: ';
  for (let index = 0; index < inputAval.length; index += 1) {
    if (inputAval[index].checked) {
      const rate = inputAval[index].value;
      textoAval += rate;
    }
  }
  return textoAval;
}

function getConteudo() {
  let textoCont = 'Matérias: ';
  for (let index = 0; index < inputsConteudo.length; index += 1) {
    if (inputsConteudo[index].checked) {
      const contSelec = inputsConteudo[index].value;
      textoCont += `${contSelec}, `;
    }
  }
  return textoCont;
}

function recebeValores(num) {
  const inputName = document.getElementById('input-name').value;
  const inputLastName = document.getElementById('input-lastname').value;
  const inputEmail = document.getElementById('input-email').value;
  const inputHouse = document.getElementById('house').value;
  const comentText = document.getElementById('textarea').value;
  const fullName = `Nome: ${inputName} ${inputLastName}`;
  const tEmail = `Email: ${inputEmail}`;
  const tCasa = `Casa: ${inputHouse}`;
  const tComent = `Observações: ${comentText}`;
  const array = [fullName, tEmail, tCasa, getFamily(), getConteudo(), getAvaliacao(), tComent];
  return array[num];
}

function criaDiv() {
  const formDiv = document.createElement('div');
  formDiv.id = 'div2';
  evalForm.appendChild(formDiv);
  for (let index1 = 0; index1 < 7; index1 += 1) {
    const pDiv = document.createElement('p');
    pDiv.innerHTML = recebeValores(index1);
    formDiv.appendChild(pDiv);
  }
}

const hideForm = () => {
  div1.style.display = 'none';
  criaDiv();
}

const preventDef = (event) => event.preventDefault();

function habilitaBotão() {
  if (valor.checked) {
    btn2.disabled = false;
  } else {
    btn2.disabled = true;
  }
}

evalForm.addEventListener('submit', preventDef);
btn2.addEventListener('click', hideForm);
btn.addEventListener('click', verificaLogin);
valor.addEventListener('click', habilitaBotão);

const limite = (valor1) => {
  const quant = 500;
  const total = valor1.length;
  if (total <= quant) {
    const resto = quant - total;
    document.getElementById('counter').innerHTML = resto;
  } else {
    document.getElementById('textarea').value = quant;
  }
  return true;
};

let usefunction = limite('');
if (usefunction === true) {
  usefunction += false;
}
