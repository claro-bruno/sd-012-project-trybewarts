// Captura elementos
const loginBtn = document.querySelector('#login-btn');
const loginInput = document.querySelector('#login-input');
const loginPass = document.querySelector('#login-pass');
const agreementCheck = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
submitBtn.disabled = true;
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

// Valida o login
const validateLogin = () => loginInput.value === 'tryber@teste.com'
  && loginPass.value === '123456';

// Adiciona evento ao botão login
loginBtn.addEventListener('click', () => {
  if (validateLogin()) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Adiciona evento ao checkbox
agreementCheck.addEventListener('click', () => {
  if (agreementCheck.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

// Atualiza contador on-the-fly
textArea.addEventListener('input', (event) => {
  const newLength = event.target.value.length;
  counter.innerText = 500 - newLength;
});

// Retorna os dados do forms
// O código a seguir foi retirado de: https://www.learnwithjason.dev/blog/get-form-values-as-json
const form = document.querySelector('#evaluation-form');

const renderInfo = (obj) => {
  form.innerHTML = '';
  form.innerHTML = `<p> Nome: ${obj.name} ${obj.lastName} </p>
  <p>Email: ${obj.email}</p>
  <p>Casa: ${obj.house}</p>
  <p>Família: ${obj.family}</p>
  <p>Matérias: ${obj.techs.join(', ')}</p>
  <p>Avaliação: ${obj.rate}</p>
  <p>Observações: ${obj.textarea}</p>
  `;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());
  value.techs = data.getAll('techs');
  renderInfo(value);
};

form.addEventListener('submit', handleSubmit);
