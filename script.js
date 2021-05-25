const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const completeForm = document.getElementById('evaluation-form');

function emailIsValid() {
  const inputEmail = document.getElementById('input-email-header');
  if (inputEmail.value === 'tryber@teste.com') {
    return true;
  }
  return false;
}

function passwordIsValid() {
  const inputPassword = document.getElementById('input-password');
  if (inputPassword.value === '123456') {
    return true;
  }
  return false;
}

function loginValidation() {
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (emailIsValid() && passwordIsValid()) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

function manageSubmit() {
  agreement.addEventListener('click', () => {
    if (agreement.checked === true) {
      submitButton.disabled = false;
    }
    if (agreement.checked === false) {
      submitButton.disabled = true;
    }
  });
}

function textCounter() {
  const text = document.getElementById('textarea');
  const counter = document.getElementById('counter');
  text.addEventListener('keyup', () => {
    const textCount = text.value.length;
    counter.innerText = `(${500 - textCount} restantes)`;
  });
}

function createSpaceResult() {
  const formSpace = document.createElement('div');
  completeForm.insertBefore(formSpace, completeForm.children[0]);
  const formTitle = document.createElement('h3');
  formTitle.innerHTML = 'Suas respostas:';
  formSpace.appendChild(formTitle);
  return formSpace;
}

function createResultP(divResult, valueResult) {
  const ResultP = document.createElement('p');
  divResult.appendChild(ResultP);
  ResultP.innerText = valueResult;
}

function optionSelectedValue(className) {
  const optionList = document.getElementsByClassName(className);
  for (let index = 0; index < optionList.length; index += 1) {
    if (optionList[index].selected) {
      return optionList[index].value;
    }
  }
}

function optionCheckedValue(className) {
  const optionList = document.getElementsByClassName(className);
  for (let index = 0; index < optionList.length; index += 1) {
    if (optionList[index].checked) {
      return optionList[index].value;
    }
  }
}

function optionCheckboxValue(className) {
  const optionList = document.getElementsByClassName(className);
  const checkboxValue = [];
  for (let index = 0; index < optionList.length; index += 1) {
    if (optionList[index].checked) {
      checkboxValue.push(` ${optionList[index].value}`);
    }
  }
  return checkboxValue.toString();
}

function valueForm() {
  const divResult = document.createElement('div');
  divResult.className = 'divResult';
  createSpaceResult().appendChild(divResult);
  const name = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  createResultP(divResult, `Nome: ${name} ${lastname}`);
  const email = document.getElementById('input-email').value;
  createResultP(divResult, `Email: ${email}`);
  createResultP(divResult, `Casa: ${optionSelectedValue('house')}`);
  createResultP(divResult, `Família: ${optionCheckedValue('family')}`);
  createResultP(divResult, `Matérias:${optionCheckboxValue('subject')}`);
  createResultP(divResult, `Avaliação: ${optionCheckedValue('rate')}`);
  const comment = document.getElementById('textarea').value;
  createResultP(divResult, `Observações: ${comment}`);
}

function resultForm() {
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    for (let index = 0; index < completeForm.children.length; index += 1) {
      completeForm.children[index].style.display = 'none';
    }
    valueForm();
  });
}

manageSubmit();
loginValidation();
textCounter();
resultForm();
