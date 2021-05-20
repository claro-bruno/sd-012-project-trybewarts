const catchSenhaInput = document.getElementById('senha');
const catchEmailInput = document.getElementById('email');

function validaSenhaEmail() {
  if (catchSenhaInput.value !== '123456' || catchEmailInput.value !== 'tryber@teste.com') {
    window.alert('Login ou senha inválidos.');
    return false;
  }
  window.alert('Olá, Tryber!');
  return true;
}

const catchSubmitButton = document.getElementById('button');
catchSubmitButton.addEventListener('click', validaSenhaEmail);

const catchradioSatisfaction = document.getElementById('radioSatisfaction');
function createRadioButtons() {
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let index = 0; index < 10; index += 1) {
    const newRadio = document.createElement('input');
    const newLabel = document.createElement('label');
    newLabel.htmlFor = `radio${index}`;
    newLabel.innerText = numbersArray[index];
    newRadio.value = numbersArray[index];
    newRadio.type = 'radio';
    newRadio.id = `radio${index}`;
    newRadio.name = 'rate';
    catchradioSatisfaction.appendChild(newLabel);
    catchradioSatisfaction.appendChild(newRadio);
  }
}
createRadioButtons();

const catchButton2 = document.getElementById('submit-btn');
const catchCheckbox = document.getElementById('agreement');
catchCheckbox.addEventListener('change', () => {
  catchButton2.disabled = !catchCheckbox.checked;
});

const catchTextArea = document.getElementById('textarea');
const catchCounter = document.getElementById('counter');
catchTextArea.addEventListener('keyup', () => {
  catchCounter.innerText = 500 - catchTextArea.value.length;
});

const catchInputName = document.getElementById('input-name');
const catchInputLastName = document.getElementById('input-lastname');
const catchInputCasa = document.getElementById('house');
const catchInputTextarea = document.getElementById('textarea');
const catchInputEmail2 = document.getElementById('input-email');
const evaluationForm = document.getElementById('evaluation-form');

const createDivAnswers = (event) => {
  event.preventDefault();
  const catchInputMaterias = document.querySelectorAll('input[name="content"]:checked');
  const materias = [];
  for (let index = 0; index < catchInputMaterias.length; index += 1) {
    materias.push(catchInputMaterias[index].value);
  }
  const catchInputFamily = document.querySelector('input[name="family"]:checked');
  const catchInputRate = document.querySelector('input[name="rate"]:checked');
  const newDiv = document.createElement('div');
  newDiv.innerText = `Nome: ${catchInputName.value} ${catchInputLastName.value};
  Email: ${catchInputEmail2.value};
  Casa: ${catchInputCasa.value};
  Família: ${catchInputFamily.value};
  Matérias: ${materias.join(', ')};
  Avaliação: ${catchInputRate.value};
  Observações: ${catchInputTextarea.value}`;
  evaluationForm.innerHTML = '';
  evaluationForm.appendChild(newDiv);
};

catchButton2.addEventListener('click', createDivAnswers);
