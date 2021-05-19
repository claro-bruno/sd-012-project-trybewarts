const logar = document.querySelector('.logar');
const agree = document.querySelector('#agreement');
const submit = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
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

function printSubjects() {
  let answer = 'Matérias: ';
  const allInputs = document.querySelectorAll('input[name="content"]:checked');
  console.log(allInputs);

  if (allInputs.length > 0) {
    answer += allInputs[0].value;
    for (let item = 1; item < allInputs.length; item += 1) {
      answer += `, ${allInputs[item].value}`;
    }
  }
  return answer;
}

function createInfos(infos) {
  document.querySelector('#fullname-list').innerHTML = `Nome: ${infos.fullName}`;
  document.querySelector('#email-list').innerHTML = `Email: ${infos.email}`;
  document.querySelector('#house-list').innerHTML = `Casa: ${infos.house}`;
  document.querySelector('#family-list').innerHTML = `Família: ${infos.family}`;
  document.querySelector('#rate-list').innerHTML = `Avaliação: ${infos.rate}`;
  document.querySelector('#comment-list').innerHTML = `Observações: ${infos.comment}`;
  document.querySelector('#subjects-list').innerHTML = printSubjects();
  document.querySelector('#form-results').style.display = 'flex';
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
    family: document.querySelector('input[name="family"]:checked').value,
    rate: document.querySelector('input[name="rate"]:checked').value,
  };

  createInfos(infos);
});
