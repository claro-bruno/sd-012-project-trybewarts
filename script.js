function loginValidation(login, password) {
  if (login === 'tryber@teste.com' && password === '123456') {
    return true;
  }
  return false;
}

function showLoginResult() {
  const loginInput = document.querySelector('#login-input').value;
  const passwordInput = document.querySelector('#password-input').value;

  if (loginValidation(loginInput, passwordInput)) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function switchButtonOnOff() {
  const button = document.querySelector('#submit-btn');
  if (document.querySelector('#agreement').checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function changeCounterNum() {
  const textArea = document.querySelector('#textarea');
  const counter = document.querySelector('#counter');
  counter.innerHTML = parseInt(textArea.maxLength) - textArea.value.length;
}

captureInputsValue() {
  const firstNameInputValue = document.querySelector('#input-name');
  const lastNameInputValue = document.querySelector('#input-lastname');
  const emailInputValue = document.querySelector('#input-email');
  const houseInputValue = document.querySelector('#house').value;
  const familyInputValue = document.querySelector('[name=family]:checked').value;
  const subjectsInputValue = [];
  const subjectsList = document.querySelectorAll('.subject');
  for(let indexSubject = 0; indexSubject < subjectsList.length; indexSubject += 1){
    subjectsInputValue.push(subjectsList[indexSubject].value);
  }
  const rateInputValue = document.querySelector('[name=rate:checked').value;
  const commentInputValue = document.querySelector('#textarea').value;
  const inputsValue = {
    name : (firstName + lastName),
    email : email,
    house : house
  }
}

function createResults() {
  captureInputsValue();
  for (let formInputsIndex = 0; formInputsIndex < 7; formInputsIndex += 1) {
    const p = document.createElement('p');

  }
}

function showResults() {
  document.querySelector('#evaluation-form').style.display = 'none';
  createResults();
}

window.onload = () => {
  document.querySelector('#login-btn').addEventListener('click', (e) => {
    e.preventDefault();
    showLoginResult();
  });
  document.querySelector('#agreement').addEventListener('click', switchButtonOnOff);
  document.querySelector('#textarea').addEventListener('keyup', changeCounterNum);
  document.querySelector('#submit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    showResults();
  })
};
