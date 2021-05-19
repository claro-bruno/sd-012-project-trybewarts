const inputLogin = document.querySelector('#login');
const inputSenha = document.querySelector('#senha');

const botao = document.querySelector('#btn-login');

botao.addEventListener('click', () => {
  console.log(inputLogin.value, inputSenha.value);

  const login = 'tryber@teste.com';
  const senha = '123456';

  if (inputLogin.value !== login && inputSenha.value !== senha) {
    window.alert('Login ou senha inválidos.');
  } else {
    window.alert('Olá, Tryber!');
  }
});

const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

const textArea = document.querySelector('#textarea');
const pCounter = document.querySelector('#counter');

textArea.addEventListener('input', () => {
  pCounter.innerText = 500 - textArea.value.length;
});

function getFamilyValue() {
  const inputFamily = document.getElementsByName('family');
  let familyValue = '';
  for (let index = 0; index < inputFamily.length; index += 1) {
    if (inputFamily[index].checked) {
      familyValue = inputFamily[index].value;
    }
  }
  return familyValue;
}

function getMaterias() {
  const materia = document.getElementsByClassName('subject');
  const materiaSelecionadas = [];
  for (let index = 0; index < materia.length; index += 1) {
    if (materia[index].checked) {
      materiaSelecionadas.push(materia[index].value);
      console.log(materiaSelecionadas);
    }
  }
  return materiaSelecionadas;
}

function getAvaliacao() {
  const avalicacao = document.getElementsByName('rate');
  let avaliacaoValue = '';
  for (let index = 0; index < avalicacao.length; index += 1) {
    if (avalicacao[index].checked) {
      avaliacaoValue = avalicacao[index].value;
      console.log(avaliacaoValue);
    }
  }
  return avaliacaoValue;
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value; // Correção 1
  const observacao = document.querySelector('#textarea').value;
  const printForm = document.querySelector('#print-form-container');
  const addform = document.createElement('form');
  const addParagraph = document.createElement('p');
  printForm.appendChild(addform);
  addform.appendChild(addParagraph);
  const formResult = `Nome: ${name} ${lastName} \n Email: ${email} \n Casa: ${house} 
  \n Familia: ${getFamilyValue()} \n Matérias:${getMaterias()} \n 
  Avaliação: ${getAvaliacao()} \n Observações ${observacao}`;
  console.log(formResult);
  addParagraph.innerText = formResult;
});
