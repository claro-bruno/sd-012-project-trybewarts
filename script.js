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
