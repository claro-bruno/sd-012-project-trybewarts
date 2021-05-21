const inputLogin = document.getElementById('login');
const inputSenha = document.getElementById('senha');
const botaoLogar = document.getElementById('logar');

function login() {
  const loginCerto = 'tryber@teste.com';
  const senhaCerta = '123456';
  if (inputLogin.value === loginCerto && inputSenha.value === senhaCerta) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

botaoLogar.addEventListener('click', login);

const checkBox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

function activateSubmit() {
  if (checkBox.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

checkBox.addEventListener('click', activateSubmit);

const count = 500;
const divCounter = document.getElementById('counter');
divCounter.innerHTML = count;
const textBox = document.getElementById('textarea');

function countChar() {
  const textLength = textBox.value.length;
  divCounter.innerHTML = count - textLength;
}

textBox.addEventListener('keyup', countChar);

const searchParams = new URLSearchParams(window.location.search);
const queryName = searchParams.get('name');
const queryLastName = searchParams.get('lastname');
const queryEmail = searchParams.get('email');
const queryHouse = searchParams.get('casa');
const queryFamily = searchParams.get('family');
const queryConteudo = searchParams.getAll('conteudo');
const queryRate = searchParams.get('rate');
const queryComment = searchParams.get('comentario');

const submittedName = document.getElementById('submitted-name');
const submittedEmail = document.getElementById('submitted-email');
const submittedHouse = document.getElementById('submitted-house');
const submittedFamily = document.getElementById('submitted-family');
const submittedTopics = document.getElementById('submitted-topics');
const submittedRating = document.getElementById('submitted-rating');
const submittedObservation = document.getElementById('submitted-observation');

// if(queryName === null && queryLastName == null && queryEmail === null && queryHouse === null && queryFamily === null && queryConteudo === null && queryRate === null && queryComment === null) {
if (queryName === null) {
  submittedName.innerHTML = '';
  submittedEmail.innerHTML = '';
  submittedHouse.innerHTML = '';
  submittedFamily.innerHTML = '';
  submittedTopics.innerHTML = '';
  submittedRating.innerHTML = '';
  submittedObservation.innerHTML = '';
} else {
  submittedName.innerHTML = `Nome: ${queryName} ${queryLastName}`;
  submittedEmail.innerHTML = `Email: ${queryEmail}`;
  submittedHouse.innerHTML = `Casa: ${queryHouse}`;
  submittedFamily.innerHTML = `Família: ${queryFamily}`;
  submittedTopics.innerHTML = `Matérias: ${queryConteudo}`;
  submittedRating.innerHTML = `Avaliação: ${queryRate}`;
  submittedObservation.innerHTML = `Observações: ${queryComment}`;
}

/*
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const inputHouse = document.getElementById('house');
const inputLabelFamily = document.getElementById('label-family');
const inputLabelContent = document.getElementById('label-content');
const inputLabelRate = document.getElementById('label-rate');
const inputTextArea = document.getElementById('textarea');

inputName.value = queryName;
inputLastName.value = queryLastName;
inputEmail.value = queryEmail;
inputHouse.value = queryHouse;
inputLabelFamily.value = queryFamily;
inputLabelContent.value = queryConteudo;
inputLabelRate.value = queryRate;
inputTextArea.value = queryComment;

// console.log(queryFamily)
const radioButtonFamily = document.querySelectorAll('input[name="family"]');
radioButtonFamily.forEach((element) => {
  if (queryFamily && element.id === queryFamily.toLowerCase()) {
    element.checked = true;
  }
});

const radioButtonRate = document.querySelectorAll('input[name="rate"]');
radioButtonRate.forEach((element) => {
  if (element.id.split('-')[1] === queryRate) {
    element.checked = true;
  }
});

const checkBoxContent = document.querySelectorAll('input[name="conteudo"]');
// console.log(checkBoxContent)

for (let i = 0; i < queryConteudo.length; i += 1) {
  queryConteudo[i] = queryConteudo[i].toLowerCase();
}
// console.log('queryConteudo', queryConteudo);

checkBoxContent.forEach((element) => {
  if (queryConteudo.includes(element.id.toLowerCase())) {
    element.checked = true;
  }
});
 */
/* Credito: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams */
/* Credito: https://masteringjs.io/tutorials/fundamentals/foreach */
