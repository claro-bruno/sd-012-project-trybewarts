const loginButton = document.querySelector('#login-button');
const loginInput = document.querySelector('#login-input');
const passInput = document.querySelector('#pass-input');
const escolheCasa = document.querySelector('#house');
const nota = document.querySelector('#rate');
const checkboxAgreement = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
const getTextArea = document.getElementById('textarea');
const getCounter = document.getElementById('counter');
const nameInput = document.getElementById('input-name');
const lastNameInput = document.getElementById('input-lastname');
const emailInput = document.getElementById('input-email');
const finalForm = document.querySelector('.form');
const family = document.getElementsByName('family');
const skills = document.getElementsByClassName('subject');
const avaliacao = document.getElementsByClassName('nota');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (loginInput.value !== 'tryber@teste.com' || passInput.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
    loginInput.value = '';
    passInput.value = '';
  }
});

getTextArea.addEventListener('keyup', (event) => {
  const currentLength = event.target.value.length;
  getCounter.innerText = `Caracteres restantes: ${
    event.target.maxLength - currentLength
  }`;
});

function escolherCasa() {
  const casas = [
    { casa: 'Gitnória', id: 'gitnoria-house' },
    { casa: 'Reactpuff', id: 'reactpuff-house' },
    { casa: 'Corvinode', id: 'corvinode-house' },
    { casa: 'Pytherina', id: 'pytherina-house' },
  ];

  for (let index = 0; index < casas.length; index += 1) {
    const novaCasa = document.createElement('option');
    novaCasa.innerHTML = casas[index].casa;
    novaCasa.id = casas[index].id;
    escolheCasa.appendChild(novaCasa);
  }
}

function rate() {
  for (let index = 1; index <= 10; index += 1) {
    const notaLabel = document.createElement('label');
    notaLabel.innerHTML = index;
    const novaNota = document.createElement('input');
    novaNota.name = 'rate';
    novaNota.type = 'radio';
    novaNota.className = 'nota';
    novaNota.value = index;
    nota.append(novaNota);
    nota.appendChild(notaLabel);
  }
}

function isChecked() {
  if (checkboxAgreement.checked === true) {
    submitButton.disabled = 0;
    submitButton.style.opacity = 1;
  } else {
    submitButton.disabled = 1;
    submitButton.style.opacity = 0.5;
  }
}

function someForm() {
  const some = document.getElementsByClassName('some');
  for (let index = 0; index < some.length; index += 1) {
    some[index].style.display = 'none';
  }
}

function skillsChecked() {
  const skillsArray = [];
  for (let index = 0; index < skills.length; index += 1) {
    if (skills[index].checked === true) {
      skillsArray.push(` ${skills[index].value}`);
    }
  }
  return skillsArray;
}

function familyChecked() {
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      return family[index].value;
    }
  }
}

function rateChecked() {
  for (let index = 0; index < avaliacao.length; index += 1) {
    if (avaliacao[index].checked === true) {
      return avaliacao[index].value;
    }
  }
}

function preencheForm() {
  const dados = [
    { dado: 'Nome', value: `${nameInput.value} ${lastNameInput.value}`, class: 'nome' },
    { dado: 'Email', value: emailInput.value, class: 'email' },
    { dado: 'Casa', value: escolheCasa.value, class: 'casa' },
    { dado: 'Família', value: familyChecked(), class: 'familia' },
    { dado: 'Matérias', value: skillsChecked(), class: 'subject' },
    { dado: 'Avaliação', value: rateChecked(), class: 'nota' },
    { dado: 'Observações', value: getTextArea.value, class: 'observacao' },
  ];

  for (let index = 0; index < dados.length; index += 1) {
    const novoDado = document.createElement('p');
    novoDado.innerHTML = `${dados[index].dado}: ${dados[index].value}`;
    novoDado.className = dados[index].class;
    finalForm.appendChild(novoDado);
  }
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  someForm();
  preencheForm();
});

escolherCasa();
rate();
isChecked();
