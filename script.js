const button = document.getElementsByClassName('trybewarts-login')[0].lastElementChild;

function checkLogin() {
  const emailInput = document.getElementsByClassName('trybewarts-login')[0].firstElementChild;
  const passInput = emailInput.nextElementSibling;

  if (emailInput.value === 'tryber@teste.com' && passInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
button.addEventListener('click', checkLogin);

function gerarNumero() {
  const divAvaliacao = document.getElementById('avaliacao');
  for (let index = 1; index <= 10; index += 1) {
    const inputRadio = document.createElement('input');
    const inputLabels = document.createElement('label');
    inputRadio.type = 'radio';
    inputRadio.name = 'rate';
    inputRadio.id = index;
    inputRadio.value = index;
    inputLabels.htmlFor = index;
    inputLabels.innerText = index;
    divAvaliacao.appendChild(inputLabels);
    divAvaliacao.appendChild(inputRadio);
  }
}
gerarNumero();

const inputCheckbox = document.getElementById('agreement');

function agreement() {
  const buttonCheckbox = document.getElementById('submit-btn');
  if (inputCheckbox.checked) {
    buttonCheckbox.disabled = false;
  } else {
    buttonCheckbox.disabled = true;
  }
}
inputCheckbox.addEventListener('click', agreement);

const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
counter.innerHTML = textArea.maxLength;

function counterTextArea() {
  counter.innerHTML = textArea.maxLength - textArea.value.length;
}
textArea.addEventListener('keyup', counterTextArea);

function valueList(nodeList) {
  let list = '';
  nodeList.forEach((node) => { list += `${node.value}, `; });
  return list.substring(0, list.length - 2);
}

const saveData = () => {
  const nameInput = document.getElementById('input-name');
  const lastNameInput = document.getElementById('input-lastname');
  const inputEmail = document.getElementById('input-email');
  const houseInput = document.getElementById('house');
  const familyRadio = document.querySelector('input[name="family"]:checked');
  const subjectChecks = document.querySelectorAll('.subject:checked');
  const subjects = valueList(subjectChecks);
  const rateInput = document.querySelector('input[name="rate"]:checked');
  return {
    name: `Nome: ${nameInput.value} ${lastNameInput.value}`,
    email: `Email: ${inputEmail.value}`,
    house: `Casa: ${houseInput.value}`,
    family: `Família: ${familyRadio.value}`,
    subjects: `Matérias: ${subjects}`,
    rating: `Avaliação: ${rateInput.value}`,
    comment: `Observações: ${textArea.value}`,
  };
};

const submitBtn = document.getElementById('submit-btn');
function summary(event) {
  event.preventDefault();
  const data = saveData();
  const form = document.getElementById('evaluation-form');
  form.innerHTML = '';
  form.classList.add('summary');
  Object.values(data).forEach((value) => { // source https://www.30secondsofcode.org/blog/s/eslint-refactor-for-in
    const span = document.createElement('span');
    span.innerHTML = value;
    form.appendChild(span);
  });
}

submitBtn.addEventListener('click', summary);
