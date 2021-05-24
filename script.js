const botaoLogar = document.querySelector('#botaoLogar');
const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const submitBtn = document.getElementById('submit-btn');

botaoLogar.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

function ActivateButton() {
  submitBtn.disabled = false;
}

function DeactivateButton() {
  submitBtn.disabled = true;
}

const checkAgreement = document.getElementById('agreement');
checkAgreement.addEventListener('change', () => {
  if (checkAgreement.checked) {
    ActivateButton();
  } else {
    DeactivateButton();
  }
});
