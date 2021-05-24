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
const comment = document.querySelector('#textarea');
const evaluation = document.querySelector('.evaluation-note');

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
  const rate = document.querySelector('input[name="rate"]:checked');
  const rateParagraph = document.createElement('p');
  rateParagraph.innerHTML = `Avaliação: ${rate.value}`;
  while (evaluation.firstChild) {
    evaluation.removeChild(evaluation.firstChild);
  }
  evaluation.appendChild(rateParagraph);
}

function replaceFamilyElement() {
  const family = document.querySelector('input[name="family"]:checked');
  const familyContainer = document.querySelector('.family');
  const familyParagraph = document.createElement('p');
  familyParagraph.innerHTML = `Família: ${family.value}`;
  while (familyContainer.firstChild) {
    familyContainer.removeChild(familyContainer.firstChild);
  }
  familyContainer.appendChild(familyParagraph);
}

function replaceContentElement() {
  const content = document.querySelectorAll('input[class=subject]:checked');
  const contentContainer = document.querySelector('#content-container');
  const contentParagraph = document.createElement('p');
  let checkedArray = '';
  for (let index = 0; index < content.length; index += 1) {
    if (index === content.length - 1) {
      checkedArray += `${content[index].value}`;
    } else {
      checkedArray += `${content[index].value}, `;
    }
  }
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }
  contentParagraph.innerHTML = `Matérias: ${checkedArray}`;
  contentContainer.appendChild(contentParagraph);
}

function replaceCommentElement() {
  const commentParagraph = document.createElement('p');
  const commentContainer = comment.parentNode;
  while (commentContainer.firstChild) {
    commentContainer.removeChild(commentContainer.firstChild);
  }
  commentParagraph.innerHTML = `Observações: ${comment.value}`;
  commentContainer.appendChild(commentParagraph);
}

submitButton.addEventListener('click', () => {
  replaceNameElement();

  replaceEmailElement();

  replaceHouseElement();

  replaceRateElement();

  replaceFamilyElement();

  replaceContentElement();

  replaceCommentElement();
});
