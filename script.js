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

const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const inputTextArea = document.getElementById('textarea');
const evaluationForm = document.getElementById('evaluation-form');

const house = document.getElementById('house');
function getHouseValue() {
  // console.log(house.value)
  return house.value;
}

function getRadioButtonFamily() {
  const radioButtonFamily = document.querySelectorAll('input[name="family"]');
  // console.log(radioButtonFamily)
  let selectedRadioButtonFamily;
  for (let index = 0; index < radioButtonFamily.length; index += 1) {
    // console.log(radioButtonFamily[index])
    if (radioButtonFamily[index].checked) {
      // console.log(radioButtonFamily[index])
      selectedRadioButtonFamily = radioButtonFamily[index];
      // console.log(selectedRadioButtonFamily.value)
    }
  }
  return selectedRadioButtonFamily.value;
}

function getDisciplines() {
  const selectedDisciplines = [];
  const disciplines = document.getElementsByName('conteudo');
  // console.log(disciplines[0].checked)
  disciplines.forEach((discipline) => {
    if (discipline.checked) {
      selectedDisciplines.push(discipline.value);
    }
  });
  console.log('selectedDisciplines.join()', selectedDisciplines.join(', '));
  return selectedDisciplines.join(', ');
}

function getRadioButtonRate() {
  const radioButtonRate = document.querySelectorAll('input[name="rate"]');
  let selectedRadioButtonRate;
  for (let index = 0; index < radioButtonRate.length; index += 1) {
    if (radioButtonRate[index].checked) {
      selectedRadioButtonRate = radioButtonRate[index];
      // console.log('selectedRadioButtonRate', selectedRadioButtonRate)
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

/* Credito: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams */
/* Credito: https://masteringjs.io/tutorials/fundamentals/foreach */
