const submitButtom = document.getElementById('submit-button');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
// Botão de log
submitButtom.addEventListener('click', () => {
  const inputLogin = document.getElementById('input-login');
  const inputPassword = document.getElementById('input-password');

  if (inputLogin.value !== 'tryber@teste.com' && inputPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// Botão do formulário central
agreement.addEventListener('click', () => {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  }
});

const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function charactersCounter() {
  const maxLength = 500;
  const userCharLength = textArea.value.length;
  const remainingChar = maxLength - userCharLength;
  counter.innerHTML = remainingChar;
}

textArea.addEventListener('keyup', charactersCounter);

const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputFullName = document.getElementById('input-fullname');
const inputEmail = document.getElementById('input-email');
const inputEmailAndHouse = document.getElementById('input-email-house');
const inputHouse = document.getElementById('house');

const changeUserName = () => {
  const name = inputName.value;
  const lastName = inputLastName.value;
  const fullName = `Nome: ${name} ${lastName}`;
  inputFullName.innerHTML = fullName;
};

const changeUserEmail = () => {
  const createInfoEmail = document.createElement('p');
  const infoEmail = `Email: ${inputEmail.value}`;
  createInfoEmail.innerHTML = infoEmail;
  inputEmailAndHouse.appendChild(createInfoEmail);
  inputEmail.remove();
};

const changeUserHouse = () => {
  const createInfoHouse = document.createElement('p');
  const infoHouse = `Casa: ${inputHouse.value}`;
  createInfoHouse.innerHTML = infoHouse;
  inputEmailAndHouse.appendChild(createInfoHouse);
  inputHouse.remove();
};

const changeUserFamily = () => {
  const inputFamily = document.getElementById('userFamily');
  const inputOption = document.querySelector('input[name="family"]:checked').value;
  const infoFamily = `Família: ${inputOption}`;
  inputFamily.innerHTML = infoFamily;
};

const changeUserSubject = () => {
  const inputSubject = document.querySelector('.content');
  const inputSubjects = document.getElementsByClassName('subject');
  const selectedSubjects = [];
  for (let index = 0; index < inputSubjects.length; index += 1) {
    if (inputSubjects[index].checked) {
      const selected = inputSubjects[index].value;
      selectedSubjects.push(selected);
    }
  }
  const infoSubject = `Matérias: ${selectedSubjects.join(', ')}`;
  inputSubject.innerHTML = infoSubject;
};

const changeUserRate = () => {
  const inputRate = document.querySelector('.radio-container');
  const inputOptionRate = document.querySelector('input[name="rate"]:checked').value;
  const infoRate = `Avaliação: ${inputOptionRate}`;
  inputRate.innerHTML = infoRate;
};

const changeUserObs = () => {
  const inputCounter = document.getElementById('counter');
  const inputObs = document.querySelector('.textarea-container');
  const textValue = document.getElementById('textarea').value;
  const infoObs = `Observações: ${textValue}`;
  inputObs.innerHTML = infoObs;
  inputCounter.remove();
};

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  changeUserName();
  changeUserEmail();
  changeUserHouse();
  changeUserFamily();
  changeUserSubject();
  changeUserRate();
  changeUserObs();
});
