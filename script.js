const loginForm = document.querySelector('.trybewarts-login');
const subscriptionForm = document.querySelector('#evaluation-form');
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

let subscriptionFormData;

const getFormData = (data) => {
  const form = {
    login: data.elements.login.value,
    password: data.elements.password.value,
  };
  return form;
};

function verifyForm(login, password, allow, deny) {
  return ((login === 'tryber@teste.com') && (password === '123456')) ? alert(allow) : alert(deny);
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const loginData = getFormData(event.target);
  verifyForm(loginData.login, loginData.password, 'Olá, Tryber!', 'Login ou senha inválidos.');
});

function activateButton() {
  if (agreement.checked) {
    submitBtn.disabled = false;
  } else submitBtn.disabled = true;
}
activateButton();

const getSubscriptionFormData = (data, content) => {
  const subscriptionData = {
    name: data.elements.name.value,
    lastName: data.elements.lastName.value,
    email: data.elements.email.value,
    house: data.elements.house.value,
    family: data.elements.family.value,
    subject: content,
    rate: data.elements.rate.value,
    comment: data.elements.comment.value,
  };
  return subscriptionData;
};

const verifyFamilySelect = (objectFamily) => {
  const formFamily = document.querySelectorAll('.family');
  for (let index = 0; index < formFamily.length; index += 1) {
    if (formFamily[index].value === objectFamily) formFamily[index].checked = true;
  }
};

/* const verifySubjectChecks = (objectSubject) => {
  const formSubject = document.querySelectorAll('.subject');
  for (let indexA = 0; indexA < formSubject.length; indexA += 1) {
    for (let indexB = 0; indexB < objectSubject.length; indexB += 1) {
      if (formSubject[indexA].value === objectSubject[indexB]) {
        formSubject[indexA].checked = true;
      }
    }
  }
}; */

const verifyRateSelect = (objectRate) => {
  const formRate = document.querySelectorAll('.rate');
  for (let index = 0; index < formRate.length; index += 1) {
    if (formRate[index].value === objectRate) formRate[index].checked = true;
  }
};

const setSubscriptionFormData = (objectFormData) => {
  const formName = document.querySelector('#input-name');
  const formLastName = document.querySelector('#input-lastname');
  const formEmail = document.querySelector('#input-email');
  const formHouse = document.querySelector('#house');
  const formComment = document.querySelector('#comment');
  formName.value = objectFormData.name;
  formLastName.value = objectFormData.lastName;
  formEmail.value = objectFormData.email;
  formHouse.value = objectFormData.house;
  verifyFamilySelect(objectFormData.family);
  // verifySubjectChecks(objectFormData.subject);
  verifyRateSelect(objectFormData.rate);
  formComment.value = objectFormData.comment;
};

const verifySubjectsChecked = () => {
  const markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked.subject');
  const content = [];
  for (let index = 0; index < markedCheckbox.length; index += 1) {
    content.push(markedCheckbox[index].value);
  }
  return content;
};

function remainingChar() {
  const counter = document.querySelector('#counter');
  const chars = document.querySelector('#textarea').value;
  const maxLength = 500;
  if (chars.length > 0) counter.innerHTML = (maxLength - chars.length);
  else counter.innerHTML = maxLength;
}
remainingChar();

subscriptionForm.addEventListener('submit', (event) => {
  subscriptionFormData = getSubscriptionFormData(event.target, verifySubjectsChecked());
  event.preventDefault();
  setSubscriptionFormData(subscriptionFormData);
});

/* if ($('div.check-content :checkbox:checked').length > 0) {
    alert('Marcou pelo menos uma opção!');
  } else alert('Marque uma opção'); */
