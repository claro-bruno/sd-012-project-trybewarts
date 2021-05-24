const inputLogin = document.querySelector('.input-login');
const inputSenha = document.querySelector('.input-senha');
const btnLogin = document.querySelector('.btn-login');
const agreement = document.querySelector('#agreement');
const enviar = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const count = document.querySelector('#counter');

btnLogin.addEventListener('click', () => {
  if (inputLogin.value !== 'tryber@teste.com' && inputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
});

textarea.addEventListener('keyup', () => {
  count.innerHTML = 500 - textarea.value.length;
  textarea.innerHTML = count;
});
const form = document.querySelector('#evaluation-form');
function createDiv(dataForm) {
  form.innerHTML = '';
  form.innerHTML = `<p>Nome: ${dataForm.name} ${dataForm.lastname}</p>`;
  form.innerHTML += `<p>Email: ${dataForm.email}</p>`;
  form.innerHTML += `<p>Casa: ${dataForm.house}</p>`;
  form.innerHTML += `<p>Família: ${dataForm.family}</p>`;
  form.innerHTML += `<p>Matérias: ${dataForm.subject.join(', ')}</p>`;
  form.innerHTML += `<p>Avaliação: ${dataForm.rate}</p>`;
  form.innerHTML += `<p>Observações: ${dataForm.textarea}</p>`;
}

function handleFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const formJSON = Object.fromEntries(data.entries());
  formJSON.subject = data.getAll('subject');
  createDiv(formJSON);
}
form.addEventListener('submit', handleFormSubmit);
