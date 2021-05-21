const submitButtom = document.getElementById('submit-button');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
// Botão de login
submitButtom.addEventListener('click', () => {
  const inputLogin = document.getElementById('input-login');
  const inputPassword = document.getElementById('input-password');

  if (inputLogin.value !== 'tryber@teste.com' && inputPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// Botão do formulário central
agreement.addEventListener('click', () => {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  }
});

const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function charactersCounter() {
  const maxLength = 500;
  const userCharLength = textArea.value.length;
  const remainingChar = maxLength - userCharLength;
  counter.innerHTML = remainingChar;
}

textArea.addEventListener('keyup', charactersCounter);
