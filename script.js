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
  if (agreement) {
    submitBtn.disabled = false;
  }
});

const textArea = document.querySelector('#textarea');
const pCounter = document.querySelector('#counter');

textArea.addEventListener('input', () => {
  pCounter.innerText = 500 - textArea.value.length;
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value; // Correção 1
  const inputFamily = document.getElementsByName('family');
  let familyValue = "";
  const materia = document.getElementsByClassName('subject');
  let materiaSelecionadas = [];
  const avalicacao = document.getElementsByName('rate');
  let avaliacaoValue = "";
  const observacao = document.querySelector('#textarea').value;
  const printForm = document.querySelector("#print-form-container");

  for(let index =0; index < inputFamily.length; index += 1) {
    if (inputFamily[index].checked) {
      familyValue = inputFamily[index].value;
      console.log(familyValue); // Verificação
    };
  };
  
  for(let index =0; index < materia.length; index += 1) {
    if (materia[index].checked) {
      materiaSelecionadas.push(materia[index].value);
      console.log(materiaSelecionadas); // Verificação
    };
  };

  for(let index =0; index < avalicacao.length; index += 1) {
    if (avalicacao[index].checked) {
      avaliacaoValue = avalicacao[index].value;
      console.log(avaliacaoValue); // Verificação
    };
  };

  const addParagraph = document.createElement('p');
  printForm.appendChild(addParagraph);
  let formResult = `Nome: ${name} ${lastName} \n Email: ${email} \n Casa: ${house} \n Familia: ${familyValue} \n Matérias:${materiaSelecionadas} \n Avaliação: ${avaliacaoValue} \n Observações ${observacao}`; 
  console.log(formResult);
  addParagraph.innerText = formResult;
  
});
