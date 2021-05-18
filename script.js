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

if (checkAgreement.checked) {
  submitButton.disabled = false;
}

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
