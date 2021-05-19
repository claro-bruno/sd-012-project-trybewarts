function checkLogin() {
  const loginButton = document.querySelector('#loginButton');
  const defaultLogin = 'tryber@teste.com';
  const defaultPassword = '123456';
  const loginInput = document.querySelector('#login');
  const passwordInput = document.querySelector('#password');

  loginButton.addEventListener('click', () => {
    const login = loginInput.value;
    const password = passwordInput.value;
    if (login === defaultLogin && password === defaultPassword) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
checkLogin();

function enableSubmit() {
  const submitButton = document.getElementById('submit-btn');
  const checkbox = document.querySelector('#agreement');

  checkbox.addEventListener('click', () => {
    const condition = checkbox.value;
    if (condition === 'false') {
      submitButton.disabled = false;
      checkbox.value = 'true';
    }
    if (condition === 'true') {
      submitButton.disabled = true;
      checkbox.value = 'false';
    }
  });
}
enableSubmit();

function countCharacters() {
  const textArea = document.querySelector('#textarea');

  textArea.addEventListener('keyup', () => {
    const typed = document.querySelector('#textarea').value;
    const typedLength = typed.length;
    if (typed === '') {
      document.querySelector('#counter').innerHTML = 500;
    }
    const maxCharacters = 500;
    const remains = maxCharacters - typedLength;
    document.querySelector('#counter').innerHTML = remains;
  });
}
countCharacters();

function displaySelected() {
  const subjectsField = document.querySelector('#userSubject');
  const inputSUbjects = document.getElementsByName('subject');
  const selectedSubjects = [];
  for (let index = 0; index < inputSUbjects.length; index += 1) {
    if (inputSUbjects[index].checked) {
      const selected = inputSUbjects[index].value;
      selectedSubjects.push(selected);
    }
  }
  const displaySubjects = `Matérias: ${selectedSubjects}`;
  subjectsField.innerHTML = displaySubjects;
}

function displayName() {
  const nameField = document.querySelector('#userFullName');
  const inputName = document.querySelector('#input-name').value;
  const inputLastName = document.querySelector('#input-lastname').value;
  const displayfullName = `Nome: ${inputName} ${inputLastName}`;
  nameField.innerHTML = displayfullName;
}

function displayEmail() {
  const emailField = document.querySelector('#userEmail');
  const inputEmail = document.querySelector('#input-email').value;
  const displayUserEmail = `Email: ${inputEmail}`;
  emailField.innerHTML = displayUserEmail;
}

function displayHouse() {
  const houseField = document.querySelector('#userHouse');
  const inputHouse = document.querySelector('#house').value;
  const displayUserHouse = `Casa: ${inputHouse}`;
  houseField.innerHTML = displayUserHouse;
}

function displayFamily() {
  const familyField = document.querySelector('#userFamily');
  const inputOption = document.querySelector('input[name="family"]:checked').value;
  const displayOption = `Família: ${inputOption}`;
  familyField.innerHTML = displayOption;
}

function displayRateChecked() {
  const rateField = document.querySelector('#userRateChecked');
  const inputRate = document.querySelector('input[name="rate"]:checked').value;
  const displayRate = `Avaliação: ${inputRate}`;
  rateField.innerHTML = displayRate;
}

function displayFeedback() {
  const feedbackField = document.querySelector('#userFeedback');
  const inputFeedback = document.querySelector('textarea').value;
  const displayUserFeedback = `Observações: ${inputFeedback}`;
  feedbackField.innerHTML = displayUserFeedback;
}

function submitInfos() {
  const submitButton = document.querySelector('#submit-btn');

  submitButton.addEventListener('click', () => {
    displayName();
    displayEmail();
    displayHouse();
    displayFamily();
    displaySelected();
    displayRateChecked();
    displayFeedback();
  });
}
submitInfos();
