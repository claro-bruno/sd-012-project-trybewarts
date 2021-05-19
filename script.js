const loginButton = document.getElementById('loginButton');
const loginInput = document.getElementById('login-input');
const passwordInput = document.getElementById('senha-input');

function stopDefAction(event) {
  event.preventDefault();

  if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', stopDefAction);

const rateSection = document.getElementById('radio-container');

function createRadioButtons() {
  for (let index = 1; index <= 10; index += 1) {
    const createInput = document.createElement('input');
    const createLabel = document.createElement('label');
    createInput.type = 'radio';
    createInput.value = index;
    createInput.name = 'rate';
    createInput.id = index;
    createLabel.innerHTML = index;
    createLabel.htmlFor = index;
    rateSection.appendChild(createInput);
    rateSection.appendChild(createLabel);
  }
}

createRadioButtons();

const submitButton = document.getElementById('agreement');

submitButton.addEventListener('click', () => {
  if (document.getElementById('agreement').checked === true) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
});

const textArea = document.getElementById('textarea');
textArea.addEventListener('keypress', () => {
  const counter = document.getElementById('counter');
  if (counter.innerText !== '0') {
    counter.innerText = parseInt(counter.innerText, 10) - 1;
  }
});

textArea.addEventListener('keydown', (event) => {
  const counter = document.getElementById('counter');
  const { key } = event;
  if (key === 'Backspace' && counter.innerText !== '500') {
    counter.innerText = parseInt(counter.innerText, 10) + 1;
  }
});
