// Declara variáveis comuns para as diferentes funções
const submitBtn = document.getElementById('submit-btn');
const inputName = document.querySelector('#input-name');
const inputLastN = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const house = document.querySelector('#house');
const textArea = document.querySelector('#textarea');

// Login do usuário
function CheckLogin() {
  const loginBtn = document.querySelector('#login-btn');
  const validLogin = 'tryber@teste.com';
  const validPw = '123456';
  loginBtn.addEventListener('click', () => {
    const login = document.querySelector('#login').value;
    const password = document.querySelector('#password').value;
    if (login === validLogin && password === validPw) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

// Ativa o botão
function ActivateButton() {
  submitBtn.disabled = false;
}

// Desativa o botão
function DeactivateButton() {
  submitBtn.disabled = true;
}

// Checa se o usuário concorda com os termos ticando a checkbox
function CheckAgreement() {
  const checkAgreement = document.getElementById('agreement');
  checkAgreement.addEventListener('change', () => {
    if (checkAgreement.checked) {
      ActivateButton();
    } else {
      DeactivateButton();
    }
  });
}

// Faz o contador da textarea contar
function CharacterLimit() {
  const counter = document.querySelector('textarea').value.length;
  const tMaxLength = document.getElementById('textarea').maxLength;
  const pCounter = document.getElementById('counter');
  pCounter.innerHTML = tMaxLength - counter;
}

// Busca o valor de familia selecionada
function GetFamilySelected() {
  const family = document.getElementsByName('family');
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      return family[index].value;
    }
  }
}

// Busca o valor de matéria selecionadas
function GetSubjectsSelected() {
  const subjects = document.getElementsByClassName('subject');
  let subjectsSelected = '';
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      subjectsSelected += `${subjects[index].value}, `;
    }
  }
  return subjectsSelected;
}

// Busca o resultado da avaliação do usuário
function GetUserEvaluation() {
  const evaluation = document.getElementsByName('rate');
  for (let index = 0; index < evaluation.length; index += 1) {
    if (evaluation[index].checked) {
      return evaluation[index].value;
    }
  }
}

// Ao clicar no botão enviar, preenche as informações que o usuário completou
function FillInputs() {
  const familySelected = GetFamilySelected();
  const subjectsSelected = GetSubjectsSelected();
  const userEvaluation = GetUserEvaluation();
  const form = document.getElementsByTagName('form')[1];
  form.innerHTML = '';
  form.innerHTML += `Nome: ${inputName.value} ${inputLastN.value} <br>`;
  form.innerHTML += `Email: ${inputEmail.value} <br>`;
  form.innerHTML += `Casa: ${house.value} <br>`;
  form.innerHTML += `Família: ${familySelected} <br>`;
  form.innerHTML += `Matérias: ${subjectsSelected} <br>`;
  form.innerHTML += `Avaliação: ${userEvaluation} <br>`;
  form.innerHTML += `Observações: ${textArea.value}`;
}

// Função que chama todas as funções do site
function Onload() {
  CheckLogin();
  CharacterLimit();
  submitBtn.addEventListener('click', FillInputs);
  CheckAgreement();
}

// Ao carregar toda a página, chama a função responsável por todas as funções
window.onload = Onload;
