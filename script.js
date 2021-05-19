const logar = document.querySelector('.logar');
const agree = document.querySelector('#agreement');
const submit = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const radios = document.querySelectorAll('#form2-left label input');
const checks = document.querySelectorAll('#form2-right label input');
const rates = document.querySelectorAll('#rate-div label input');
const maxLength = 500;

logar.addEventListener('click', () => {
  const login = document.querySelector('.login');
  const senha = document.querySelector('.senha');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Requisito 18
agree.addEventListener('click', () => {
  if (agree.checked) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});

textarea.addEventListener('keyup', () => {
  counter.innerHTML = maxLength - textarea.value.length;
});

function subjectExist(subjects) {
  let subjectString = `${subjects[0]}`;
  for (let item = 1; item < subjects.length; item += 1) {
    subjectString += `, ${subjects[item]}`;
  }
  document.querySelector('#subjects-list').innerHTML = `Matérias: ${subjectString}`;
}

function printSubjects() {
  const subjects = [];

  for (let index = 0; index < 6; index += 1) {
    if (checks[index].checked === true) {
      subjects.push(checks[index].value);
    }
  }

  if (subjects.length > 0) {
    subjectExist(subjects);
  } else {
    document.querySelector('#subjects-list').innerHTML = 'Matérias:';
  }
}

function createInfos(infos) {
  document.querySelector('#fullname-list').innerHTML = `Nome: ${infos.fullName}`;
  document.querySelector('#email-list').innerHTML = `Email: ${infos.email}`;
  document.querySelector('#house-list').innerHTML = `Casa: ${infos.house}`;
  document.querySelector('#family-list').innerHTML = `Família: ${infos.family}`;
  document.querySelector('#rate-list').innerHTML = `Avaliação: ${infos.rate}`;
  document.querySelector('#comment-list').innerHTML = `Observações: ${infos.comment}`;
  printSubjects();
  document.querySelector('#form-results').style.display = 'flex';
}

function createFamily(family) {
  for (let index = 0; index < 3; index += 1) {
    if (radios[index].checked === true) {
      family.push(radios[index].value);
    }
  }
}

function createRate(rate) {
  for (let index = 0; index < 10; index += 1) {
    if (rates[index].checked === true) {
      rate.push(rates[index].value);
    }
  }
}

submit.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#pre-form').style.display = 'none';
  const name = document.querySelector('#input-name').value;
  const lastname = document.querySelector('#input-lastname').value;

  const infos = {
    fullName: `${name} ${lastname}`,
    email: document.querySelector('#input-email').value,
    house: document.querySelector('#house').value,
    comment: document.querySelector('textarea').value,
    family: [],
    rate: [],
  };

  createFamily(infos.family);
  createRate(infos.rate);
  createInfos(infos);
});
