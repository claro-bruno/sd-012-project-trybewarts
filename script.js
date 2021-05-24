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
const inputHouse = document.getElementById('house');
const inputLabelFamily = document.getElementById('label-family');
const inputLabelContent = document.getElementById('label-content');
const inputLabelRate = document.getElementById('label-rate');
const inputTextArea = document.getElementById('textarea');
const evaluationForm = document.getElementById('evaluation-form');
const submittedData = document.getElementById('submitted-data');
// evaluationForm.style.display = 'none';


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
  let disciplines = document.getElementsByName('conteudo')
  // console.log(disciplines[0].checked)
  disciplines.forEach((discipline) => {
    if(discipline.checked) {
      selectedDisciplines.push(discipline.value);
    }
  });
  console.log('selectedDisciplines.join()', selectedDisciplines.join(', '));
  return selectedDisciplines.join(', ');
}






function getRadioButtonRate() {
  let radioButtonRate = document.querySelectorAll('input[name="rate"]');
//   radioButtonRate = Array.from(radioButtonRate)
//   const selectedRadioButtonRate = radioButtonRate.filter((element) => {
//   if (element.checked) {
//     // console.log(element.value)
//     // console.log(element.id.split('-')[1])
//     // return element.id.split('-')[1];
//     return element.value;
//   }
// });
  // console.log(selectedRadioButtonRate[0].value)
  // return selectedRadioButtonRate[0].value;
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
  Observações: ${getComment()}
  `
  // getRadioButtonRate();
  // console.log(rateHtmlElement)
  // document.body.appendChild(rateHtmlElement)
  // evaluationForm.classList.remove('is-visible');
  // evaluationForm.classList.add('is-not-visible')
  // submittedData.classList.remove('is-not-visible');
  // submittedData.classList.add('is-visible')
  
  // evaluationForm.innerHTML = `
  // ${inputName.value} ${inputLastName.value}<br>
  // ${inputEmail.value}<br>
  // `
}
submitButton.addEventListener('click', replaceForm);



// console.log(queryFamily)

// const radioButtonRate = document.querySelectorAll('input[name="rate"]');
// radioButtonRate.forEach((element) => {
//   if (element.id.split('-')[1] === queryRate) {
//     element.checked = true;
//   }
// });

const checkBoxContent = document.querySelectorAll('input[name="conteudo"]');
// console.log(checkBoxContent)

// for (let i = 0; i < queryConteudo.length; i += 1) {
//   queryConteudo[i] = queryConteudo[i].toLowerCase();
// }
// console.log('queryConteudo', queryConteudo);

// checkBoxContent.forEach((element) => {
//   if (queryConteudo.includes(element.id.toLowerCase())) {
//     element.checked = true;
//   }
// });

/* Credito: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams */
/* Credito: https://masteringjs.io/tutorials/fundamentals/foreach */
