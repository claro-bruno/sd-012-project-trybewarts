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
  counter.innerHTML = parseInt(textArea.maxLength, 10) - textArea.value.length;
}

function filterInputList(nodeList) {
  const arr = [];
  for (let indexSubject = 0; indexSubject < nodeList.length; indexSubject += 1) {
    arr.push(` ${nodeList[indexSubject].value}`);
  }
  return arr;
}

function captureInputsValue() {
  const firstNameInputValue = document.querySelector('#input-name').value;
  const lastNameInputValue = document.querySelector('#input-lastname').value;
  const emailInputValue = document.querySelector('#input-email').value;
  const houseInputValue = document.querySelector('#house').value;
  const familyInputValue = document.querySelector('[name=family]:checked').value;
  const subjectsInputValue = filterInputList(document.querySelectorAll('.subject:checked'));
  const rateInputValue = document.querySelector('[name=rate]:checked').value;
  const commentInputValue = document.querySelector('#textarea').value;
  const inputsValue = {
    Nome: (`${firstNameInputValue} ${lastNameInputValue}`),
    Email: emailInputValue,
    Casa: houseInputValue,
    Família: familyInputValue,
    Matérias: subjectsInputValue,
    Avaliação: rateInputValue,
    Observações: commentInputValue,
  };
  return inputsValue;
}

function createResults() {
  const results = captureInputsValue();
  Object.keys(results).forEach((result) => {
    const element = document.createElement('p');
    element.innerHTML = (`${result}: ${results[result]}`).trim();
    const parent = document.querySelector('#evaluation-form');
    parent.appendChild(element);
  });
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
    createResults();
  });
};
