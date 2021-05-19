const loginButton = document.querySelector('.login-validation');

loginButton.addEventListener('click', () => {
  const login = document.querySelector('#login');
  const password = document.querySelector('#password');
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const submitButton = document.querySelector('#submit-btn');
const checkAgreement = document.querySelector('#agreement');

checkAgreement.addEventListener('change', (event) => {
  if (event.target.checked) {
    submitButton.disabled = false;
  }
});

const textAreaInput = document.querySelector('#textarea');

textAreaInput.addEventListener('keyup', () => {
  textAreaInput.nextElementSibling.innerHTML = 500 - textAreaInput.value.length;
});

const firstName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');
const evaluation = document.querySelector('.evaluation-note');

function getRadioValue(radioClass) {
  const radios = document.querySelectorAll(radioClass);
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked) {
      return radios[index].value;
    }
  }
}

function replaceNameElement() {
  const nameParagraph = document.createElement('p');
  nameParagraph.innerHTML = `Nome: ${firstName.value} ${lastName.value}`;
  firstName.parentNode.removeChild(firstName.parentNode.lastElementChild);
  firstName.parentNode.replaceChild(nameParagraph, firstName);
}

function replaceEmailElement() {
  const emailParagraph = document.createElement('p');
  emailParagraph.innerHTML = `Email: ${email.value}`;
  email.parentNode.replaceChild(emailParagraph, email);
}

function replaceHouseElement() {
  const houseParagraph = document.createElement('p');
  houseParagraph.innerHTML = `Casa: ${house.value}`;
  house.parentNode.replaceChild(houseParagraph, house);
}

function replaceRateElement() {
  const replaceParagraph = document.createElement('p');
  replaceParagraph.innerHTML = `Avaliação: ${getRadioValue('.eval')}`;
  evaluation.parentNode.replaceChild(replaceParagraph, evaluation);
}

function replaceFamilyElement() {
  const family = document.querySelector('input[name="family"]:checked');
  const familyCointainer = family.parentNode;
  const familyParagraph = document.createElement('p');
  familyParagraph.innerHTML = `Família: ${family.value}`;
  while (familyCointainer.firstChild) {
    familyCointainer.removeChild(familyCointainer.firstChild);
  }
  familyCointainer.appendChild(familyParagraph);
}

function replaceContentElement() {
  const content = document.querySelectorAll('input[class=subject]:checked');
  const contentContainer = content[0].parentNode.parentNode;
  const contentParagraph = document.createElement('p');
  const checkedArray = [];
  for (let tech = 0; tech < content.length; tech += 1) {
    checkedArray.push(content[tech].value);
  }
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }
  contentParagraph.innerHTML = `Matérias: ${checkedArray.join(', ')}`;
  contentContainer.appendChild(contentParagraph);
}

submitButton.addEventListener('click', () => {
  replaceNameElement();

  replaceEmailElement();

  replaceHouseElement();

  replaceRateElement();

  replaceFamilyElement();

  replaceContentElement();
});

//   const families = document.querySelectorAll('.input-family')
//   for (let family of families) {
//       if (families[family].checked) {
//         const familyParagraph = document.createElement('p');
//       }

//   }

// const evaluationNote = document.querySelector('#label-rate');
// for (let note = 1; note <= 10; note += 1) {
//     let input = document.createElement('input');
//     let label = document.createElement('label');
//     input.type = 'radio';
//     input.name = 'rate';
//     input.value = note;
//     label.innerText = note;
//     evaluationNote.appendChild(label);
//     evaluationNote.appendChild(input);
// }
