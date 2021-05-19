const button = document.querySelector('#botao-login');
const familys = ['Frontend', 'Backend', 'FullStack'];
const houses = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
const tech = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];

function botaoLoginPassword() {
  const loginTrybewarts = document.querySelector('#login');
  const senhaTrybewarts = document.querySelector('#password');
  if (loginTrybewarts.value !== 'tryber@teste.com' || senhaTrybewarts.value !== '123456') {
    alert('Login ou senha inválidos.');
  }
  if (loginTrybewarts.value === 'tryber@teste.com' && senhaTrybewarts.value === '123456') {
    alert('Olá, Tryber!');
  }
}

function preventD() {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    botaoLoginPassword();
  });
}

preventD();

function createHouses() {
  const getTagHouse = document.getElementById('house');
  for (let index = 0; index < houses.length; index += 1) {
    const createOption = document.createElement('option');
    createOption.value = houses[index];
    createOption.innerText = houses[index];
    const lowCase = houses[index].toLowerCase();
    const lowCase1 = lowCase.normalize('NFD').replace(/[^a-zA-Zs]/g, '');
    const lowCase2 = '-house';
    const familyId = lowCase1 + lowCase2;
    createOption.id = familyId;
    getTagHouse.appendChild(createOption);
  }
}

createHouses();

function createFamily() {
  const getTagFamily = document.getElementById('family-input');
  for (let index = 0; index < familys.length; index += 1) {
    const createLabelFamily = document.createElement('label');
    const createInput = document.createElement('input');
    createLabelFamily.innerText = familys[index];
    createInput.className = 'family';
    createInput.type = 'radio';
    createInput.name = 'family'
    createInput.name = 'family';
    createInput.value = familys[index];
    getTagFamily.appendChild(createLabelFamily);
    getTagFamily.appendChild(createInput);
  }
}

createFamily();

function createTech() {
  const getDivTech = document.getElementById('radio-button-container');
  for (let index = 0; index < tech.length; index += 1) {
    const createLabelTech = document.createElement('label');
    const createInputTech = document.createElement('input');
    createLabelTech.innerText = tech[index];
    createInputTech.type = 'checkbox';
    createInputTech.className = 'subject';
    createInputTech.value = tech[index];
    getDivTech.appendChild(createLabelTech);
    getDivTech.appendChild(createInputTech);
  }
}

createTech();

document.querySelector('#agreement').addEventListener('input', () => {
  const conteudo = document.querySelector('#agreement');
  if (conteudo.checked === true) {
    document.querySelector('#submit-btn').disabled = false;
  } else {
    document.querySelector('#submit-btn').disabled = true;
  }
});
