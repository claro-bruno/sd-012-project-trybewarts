const inputLogin = document.querySelector('.input-login');
const inputSenha = document.querySelector('.input-senha');
const btnLogin = document.querySelector('.btn-login');
const agreement = document.querySelector('#agreement');
const enviar = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const count = document.querySelector('#counter');
const fName = document.querySelector('#input-name');
const lName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');
const labelFamily = document.querySelector('#label-family');
const labelContent = document.querySelector('#label-content');
const labelRate = document.querySelector('#label-rate');
const mainContainer = document.querySelector('main');
const arrayValues = [fName, lName, email, house, textarea];
const arrayElements = [labelFamily, labelContent, labelRate];

btnLogin.addEventListener('click', () => {
  if (inputLogin.value !== 'tryber@teste.com' && inputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
});

textarea.addEventListener('keyup', () => {
  count.innerHTML = 500 - textarea.value.length;
  textarea.innerHTML = count;
});

function apagarCampos() { mainContainer.innerHTML = ''; }

const getRadioChecked = () => {
  const arrayContent = [];
  for (let i = 0; i < arrayElements.length; i += 1) {
    //for (let index = 0; index < arrayElements[i].children.length; index += 1) {
      arrayContent.push(arrayElements[i].childNodes.filter((child) => {child.checked}));
      //if (arrayElements[i].children[index].checked) {
      //  arrayContent.push(arrayElements[i].children[index].value);
      //} 
    //}
  }
  return arrayContent;
};

const criarCampos = () => {
  const item = [];
  for (let index = 0; index < arrayValues.length; index += 1) {
    item.push(arrayValues[index].value);
  }
  item.push(getRadioChecked());
  console.log(item);
  const objValues = {
    Nome: `${item[0]} ${item[1]}`,
    Email: item[2],
    Casa: item[3],
    Familia: item[6],
    Matérias: item[7],
    Avaliação: item[5],
    Observações: item[4],
  };
  return objValues;
};

const adicionarCampos = (item) => {
  const campo = document.createElement('div')
  for (let index = 0; index < item.length; index += 1) {
    campo.innerHTML = item.innerHTML;
    mainContainer.appendChild(campo);
  }
};

enviar.addEventListener('click', () => {
  const cria = criarCampos();
  console.log(cria);

  const apaga = apagarCampos();
  // console.log(apaga);
  const adiciona = adicionarCampos(cria);
  // console.log(adiciona);
});
