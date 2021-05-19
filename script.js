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
    submitBtn.disabled = false;
  }
});

const textArea = document.querySelector('#textarea');
const pCounter = document.querySelector('#counter');

textArea.addEventListener('input', () => {
  pCounter.innerText = 500 - textArea.value.length;
});

const printForm = document.querySelector("#print-form-container");

submitBtn.addEventListener('click', () => {
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house option:selected');
  const inputFamily = document.getElementsByName('family');
  let familyValue = "";
  const materia = document.getElementsByClassName('subject');
  let materiaSelecionadas = "";
  const avalicacao = document.getElementsByName('rate');
  let avaliacaoValue = "";
  const observacao = document.querySelector('#textarea').value;

  for(let index =0; index < inputFamily.length; index += 1) {
    if (inputFamily[index].checked) {
      familyValue = inputFamily[index].value;
    };
  };
  
  for(let index =0; index < materia.length; index += 1) {
    if (materia[index] === true) {
      materiaSelecionadas += ` ${materia[index].value}`;
    }
  }

  for(let index =0; index < avalicacao.length; index += 1) {
    if (avalicacao[index].checked) {
      avaliacaoValue = avalicacao[index].value;
    };
  };



  // const form = {
  //   nome: `${name} ${lastName}`,
  //   email: `${email}`,
  //   casa: `${house}`,
  //   familia: "",
  //   materias: "",
  //   avaliacao: "",
  //   observacoes: ""
  // }

  const addP = document.createElement('p');
  printForm.appendChild(addP);
  addP.innerText = `nome: ${name} ${lastName} \n email: ${email} \n casa: ${house} \n familia: ${familyValue} \n matérias:${materiaSelecionadas} \n avaliação: ${avaliacaoValue} \n observações ${observacao}`; 
  console.log("aqui");
});
