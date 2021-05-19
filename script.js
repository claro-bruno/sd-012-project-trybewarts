function logar() {
  const login = document.querySelector('#login').value;
  const senha = document.querySelector('#senha').value;

  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function changeBtnStatus(event) {
  const statusAgreement = event.target.checked;
  const btnAlterState = document.querySelector('#submit-btn');
  if (statusAgreement === true) {
    btnAlterState.disabled = false;
  } else {
    btnAlterState.disabled = true;
  }
}

function checkLengthArea(event) {
  const lengthTxtArea = event.target.textLength;
  const lblCounter = document.querySelector('#counter');
  lblCounter.innerHTML = (500 - Number(lengthTxtArea));
}

const btnLogin = document.querySelector('#logar');
btnLogin.addEventListener('click', logar);

const checkAgreement = document.querySelector('#agreement');
checkAgreement.addEventListener('change', changeBtnStatus);

const textArea = document.querySelector('textarea');
textArea.addEventListener('change', checkLengthArea);
