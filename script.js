const header = document.querySelector('header');

function addHeaderImage() {
  const image = document.createElement('img');
  image.src = 'images/trybewarts-header-logo.svg';
  image.className = 'trybewarts-header-logo';
  header.appendChild(image);
}
addHeaderImage();

function addHeaderTitle() {
  const title = document.createElement('h1');
  title.innerHTML = 'Trybewarts';
  title.id = 'trybewarts-header-title';
  header.appendChild(title);
}
addHeaderTitle();

function addHeaderForm() {
  const form = document.createElement('form');
  form.id = 'headerForm';
  form.className = 'trybewarts-login';
  header.appendChild(form);
}
addHeaderForm();

function addHeaderFormFields() {
  const form = document.querySelector('#headerForm');
  const loginInput = document.createElement('input');
  loginInput.type = 'text';
  loginInput.placeholder = 'Login';
  loginInput.id = 'login';
  form.appendChild(loginInput);
  const passwordInput = document.createElement('input');
  passwordInput.type = 'text';
  passwordInput.placeholder = 'Senha';
  passwordInput.id = 'password';
  form.appendChild(passwordInput);
}
addHeaderFormFields();

function addHeaderButton() {
  const form = document.querySelector('#headerForm');
  const headerButton = document.createElement('button');
  headerButton.id = 'loginButton';
  headerButton.innerHTML = 'Logar';
  form.appendChild(headerButton);
}
addHeaderButton();

/* Function checkLogin checks if the login and password typed on header form is equal to default login and password. If true the function shows the alert saying "Ola Tryber". If false function shows the alert saying "Login ou senha invalidos"  */
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

/* Functione enableSubmit: by clicking on the #agreement check box the function changes its value to 'true' and if value === 'true' the submit button is enabled. If the checkbox its unchecked the function changes back the value to false and the button is disable */
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

/* Function countCharacters counts the characters typed on the textarea and shows how many characters the user can still enter on the textarea */
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

/* All the next functions with the name 'display' are complementary to the function submitInfos, they get the input values from their respective input fields and assign as innerHTML to their respective hidden <div> to be show after clicking on the submit button.   */
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

function displaySubject() {
  const subjectsField = document.querySelector('#userSubject');
  const inputSUbjects = document.getElementsByName('subject');
  const selectedSubjects = [];
  for (let index = 0; index < inputSUbjects.length; index += 1) {
    if (inputSUbjects[index].checked) {
      const selected = inputSUbjects[index].value;
      selectedSubjects.push(selected);
    }
  }
  const displaySubjects = `Matérias: ${selectedSubjects.join(', ')}`;
  subjectsField.innerHTML = displaySubjects;
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

/* Function showFrom changes the forms CSS atribute visibility to hide the form and show the informations typed before clicking submit  */
function showForm() {
  const filledForm = document.querySelector('.posSubmit');
  const unfilledForm = document.querySelector('.preSubmit');
  filledForm.style.visibility = 'visible';
  unfilledForm.style.visibility = 'hidden';
}

/* Function submitInfos calls all the auxiliary functions needed to fill the forms disabling the submit event so the user can see the informations typed on the forms  */
function submitInfos() {
  const submitButton = document.querySelector('#submit-btn');

  submitButton.addEventListener('click', (event) => {
    displayName();
    displayEmail();
    displayHouse();
    displayFamily();
    displaySubject();
    displayRateChecked();
    displayFeedback();
    showForm();
    event.preventDefault();
  });
}
submitInfos();
