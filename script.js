// Validação do login e da senha
const inputButton = document.getElementById('inputButton');

function validateLogin() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
inputButton.addEventListener('click', validateLogin);

// requisito 18 add evento ao checkbox
const check = document.getElementById('agreement');
function buttonSubmit(event) {
  const statusButton = event.target.checked;
  const status = document.getElementById('submit-btn');
  if (statusButton === true) {
    status.disabled = false;
  } else {
    status.enable = true;
  }
}

check.addEventListener('change', buttonSubmit);

// requisito 20
const contador = document.getElementById('counter');
const textArea = document.getElementById('textarea');

const funCounter = () => { contador.innerText = 500 - textArea.value.length; };
funCounter();
textArea.addEventListener('input', funCounter);

// requisito 21
// código passado pelo Gabriel Bueno, source: https://www.learnwithjason.dev/blog/get-form-values-as-json
const renderInfo = (obj) => {
  console.log(obj);
  form.innerHTML = '';
}

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());
  value.techs = data.getAll('techs');
  console.log({ value });
}
const form = document.querySelector('#evaluation-form');
form.addEventListener('submit', handleSubmit);

// agora tem que para cada item o template literals p adicionar esses valores q q ele pegou. Pode ser em uma nova div, ou criar vários p's dentro dessa div.
