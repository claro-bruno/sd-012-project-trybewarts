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

submit.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#evaluation-form').style.display = "none";

  let name = document.querySelector('#input-name').value;
  let lastname = document.querySelector('#input-lastname').value;

  let fullname = name + ' ' + lastname;
  let email = document.querySelector('#input-email').value;
  let house = document.querySelector('#house').value;
  let comment = document.querySelector('textarea').value;
  let subjects = [];
  let family = [];
  let rate = [];

  for (let index = 0; index < 3; index += 1) {
    if (radios[index].checked === true) {
      family.push(radios[index].value);
    }
  }

  for (let index = 0; index < 6; index += 1) {
    if (checks[index].checked === true) {
      subjects.push(checks[index].value);
    }
  }

  for (let index = 0; index < 10; index += 1) {
    if (rates[index].checked === true) {
      rate.push(rates[index].value);
    }
  }

  document.querySelector('#fullname-list').innerHTML = `Nome: ${fullname}`;
  document.querySelector('#email-list').innerHTML = `Email: ${email}`;
  document.querySelector('#house-list').innerHTML = `Casa: ${house}`;
  document.querySelector('#family-list').innerHTML = `Família: ${family}`;
  document.querySelector('#subjects-list').innerHTML = `Matérias: ${subjects}`;
  document.querySelector('#rate-list').innerHTML = `Avaliação: ${rate}`;
  document.querySelector('#comment-list').innerHTML = `Observações ${comment}`;

  document.querySelector('#form-results').style.display = "flex";
})