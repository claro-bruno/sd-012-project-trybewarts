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

function buttonSubmit(event){
  const statusButton = event.target.checked;
  const status = document.getElementById('submit-btn');
  if (statusButton === true){
    status.disabled = false;
  } else {
    status.enable = true;
  }
}

const check = document.getElementById('agreement');
check.addEventListener('change', buttonSubmit);
