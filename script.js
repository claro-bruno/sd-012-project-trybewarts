const inputLogin = document.getElementById('login');
const inputSenha = document.getElementById('senha');
const botaoLogar = document.getElementById('logar');
const checkBox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const divCounter = document.getElementById('counter');
const textBox = document.getElementById('textarea');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const inputTextArea = document.getElementById('textarea');
const evaluationForm = document.getElementById('evaluation-form');
const house = document.getElementById('house');
const radioButtonFamily = document.querySelectorAll('input[name="family"]');
const radioButtonRate = document.querySelectorAll('input[name="rate"]');
const disciplines = document.getElementsByName('conteudo');

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

function activateSubmit() {
  if (checkBox.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
checkBox.addEventListener('click', activateSubmit);

const count = 500;

divCounter.innerHTML = count;
function countChar() {
  const textLength = textBox.value.length;
  divCounter.innerHTML = count - textLength;
}
textBox.addEventListener('keyup', countChar);

function getHouseValue() {
  return house.value;
}

function getRadioButtonFamily() {
  let selectedRadioButtonFamily;
  for (let index = 0; index < radioButtonFamily.length; index += 1) {
    if (radioButtonFamily[index].checked) {
      selectedRadioButtonFamily = radioButtonFamily[index];
    }
  }
  return selectedRadioButtonFamily.value;
}

function getDisciplines() {
  const selectedDisciplines = [];
  disciplines.forEach((discipline) => {
    if (discipline.checked) {
      selectedDisciplines.push(discipline.value);
    }
  });
  console.log('selectedDisciplines.join()', selectedDisciplines.join(', '));
  return selectedDisciplines.join(', ');
}

function getRadioButtonRate() {
  let selectedRadioButtonRate;
  for (let index = 0; index < radioButtonRate.length; index += 1) {
    if (radioButtonRate[index].checked) {
      selectedRadioButtonRate = radioButtonRate[index];
    }
  }
  return selectedRadioButtonRate.value;
}

function getComment() {
  return inputTextArea.value;
}

function replaceForm(event) {
  event.preventDefault();
  evaluationForm.innerHTML = `
  Nome: ${inputName.value} ${inputLastName.value}<br>
  Email: ${inputEmail.value}<br>
  Casa: ${getHouseValue()}<br>
  Família: ${getRadioButtonFamily()}<br>
  Matérias: ${getDisciplines()}<br>
  Avaliação: ${getRadioButtonRate()}<br>
  Observações: ${getComment()}`;
}
submitButton.addEventListener('click', replaceForm);

/* Credito: https://masteringjs.io/tutorials/fundamentals/foreach */
