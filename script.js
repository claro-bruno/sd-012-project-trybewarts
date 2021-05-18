const buttonLogin = document.getElementById('btn-login');
const login = document.getElementById('login');
const senha = document.getElementById('senha');

function logar() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', logar);

const buttonEnviar = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

function enviar() {
  if (buttonEnviar.disabled === true) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
}

agreement.addEventListener('click', enviar);

const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
textarea.addEventListener('input', () => {
  counter.innerText = 500 - textarea.value.length;
});

const form = document.querySelector('#evaluation-form');

function createDiv(dataForm) {
  form.innerHTML = '';
  console.log(dataForm);
  form.innerHTML = `<p>Nome: ${dataForm.nome} ${dataForm.sobrenome}</p>`;
  form.innerHTML += `<p>Email: ${dataForm.email}</p>`;
  form.innerHTML += `<p>Casa:  ${dataForm.casa}</p>`;
  form.innerHTML += `<p>Família: ${dataForm.family}</p>`;
  form.innerHTML += `<p>Matérias: ${dataForm.subject.toLocaleString().replaceAll(',', ', ')}</p>`;
  form.innerHTML += `<p>Avaliação: ${dataForm.rate}</p>`;
  form.innerHTML += `<p>Observações: ${dataForm.comentario}</p>`;
}

function handleFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const formJSON = Object.fromEntries(data.entries());
  formJSON.subject = data.getAll('subject');
  createDiv(formJSON);
}
form.addEventListener('submit', handleFormSubmit);
