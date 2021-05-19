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
    btnAlterState.enable = true;
  } else {
    btnAlterState.enable = false;
  }
}

const btnLogin = document.querySelector('#logar');
btnLogin.addEventListener('click', logar);

const checkAgreement = document.querySelector('#agreement');
checkAgreement.addEventListener('change', changeBtnStatus);
