const botao = document.getElementById('botao');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

function validar() {
  if ((email.value !== 'tryber@teste.com') || (senha.value !== '123456')) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

function preventDef(event) {
  event.preventDefault();
}

botao.addEventListener('click', preventDef);
botao.addEventListener('click', validar);

function radio() {
  const divRadio = document.getElementById('radio-conteiner');
  for (let index = 1; index < 11; index += 1) {
    const criaInput = document.createElement('input');
    const criaLabel = document.createElement('label');
    criaInput.type = 'radio';
    criaInput.name = 'rate';
    criaLabel.innerText = index;
    criaLabel.for = index;
    criaLabel.appendChild(criaInput);
    criaInput.id = index;
    criaInput.value = index;
    divRadio.appendChild(criaLabel);
  }
}
radio();

// Encontramos resolução através do link : https://stackoverflow.com/questions/18110865/how-to-disable-enable-a-button-with-a-checkbox-if-checked
const checker = document.getElementById('agreement');
const sendbtn = document.getElementById('submit-btn');
sendbtn.disabled = true;
checker.addEventListener('click', () => {
  if (checker.checked) {
    sendbtn.disabled = false;
    sendbtn.style.opacity = '1';
  } else {
    sendbtn.disabled = true;
    sendbtn.style.opacity = '0.5';
  }
});

const textArea = document.getElementById('textarea');
const p = document.getElementById('counter');

textArea.addEventListener('input', () => {
  const maxCaracter = 500;
  const digitado = maxCaracter - textArea.value.length;
  p.innerText = digitado;
});

//  Requisito 21

const getSelectedRadio = (name) => {
  const radios = document.getElementsByName(name);

  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked) {
      return radios[index].value;
    }
  }
};

const getSelectedCheckbox = (name) => {
  const checkboxes = document.getElementsByClassName(name);
  const checkValues = [];

  for (let index = 0; index < checkboxes.length; index += 1) {
    if (checkboxes[index].checked) {
      checkValues.push(checkboxes[index].value);
    }
  }

  return checkValues;
};

function collectInfo() {
  const firstName = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const inputEmail = document.getElementById('input-email').value;
  const inputHouse = document.getElementById('house').value;
  const inputFamily = getSelectedRadio('family');
  const inputSubject = getSelectedCheckbox('subject');
  const inputRating = getSelectedRadio('rate');
  const inputObs = document.getElementById('textarea').value;

  const name = `${firstName} ${lastName}`;
  const result = [name, inputEmail, inputHouse, inputFamily, inputSubject, inputRating, inputObs];
  return result;
}

function displayInfo() {
  const result = collectInfo();
  const divUserData = document.createElement('div');
  const form = document.getElementById('evaluation-form');
  divUserData.id = 'user-data';
  const paragraph = document.createElement('p');
  const materiasStr = result[4].join(', ');
  paragraph.innerHTML = `Nome: ${result[0]} <br>`;
  paragraph.innerHTML += `Email: ${result[1]} <br>`;
  paragraph.innerHTML += `Casa: ${result[2]} <br>`;
  paragraph.innerHTML += `Família: ${result[3]} <br>`;
  paragraph.innerHTML += `Matérias: ${materiasStr} <br>`;
  paragraph.innerHTML += `Avaliação: ${result[5]} <br>`;
  paragraph.innerHTML += `Observações: ${result[6]} <br>`;

  divUserData.appendChild(paragraph);
  form.innerHTML = '';
  form.innerHTML = divUserData.innerHTML;
  form.style.alignItems = 'center';
}

sendbtn.addEventListener('click', preventDef);
sendbtn.addEventListener('click', displayInfo);
