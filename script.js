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

function replaceFamilyElement() {
  const family = document.querySelector('input[name="family"]:checked');
  const familyCointainer = family.parentNode
  const familyParagraph = document.createElement('p');
  familyParagraph.innerHTML = `Família: ${family.value}`;
  while (familyCointainer.firstChild) {
    familyCointainer.removeChild(familyCointainer.firstChild)
  }
  familyCointainer.appendChild(familyParagraph);
  

}

submitButton.addEventListener('click', () => {
  replaceNameElement();

  replaceEmailElement();

  replaceHouseElement();

  replaceFamilyElement()
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
