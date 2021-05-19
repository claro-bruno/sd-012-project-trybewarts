const getLoginButton = document.querySelector('#login-btn');
const getLoginInput = document.querySelector('#login-input');
const getSenhaInput = document.querySelector('#senha-input');
const getAgreementCheck = document.querySelector('#agreement');
const getFormButton = document.querySelector('#submit-btn');

function validaLogin() {
  if (
    getLoginInput.value === 'tryber@teste.com'
    && getSenhaInput.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
getLoginButton.addEventListener('click', validaLogin);

function enableButton(event) {
  if (event.target.checked) {
    getFormButton.disabled = false;
  } else {
    getFormButton.disabled = true;
  }
}
getAgreementCheck.addEventListener('click', enableButton);

function counterFunction {
  let contador = 500;
  let getTextArea = document.querySelectorAll(#textarea);
  if (getTextAra !== '') {
    for (let index = 500; index < getTextArea.length; index -= 1) {
      contador = contador - getTextArea.length;
    }
  } else {
      for (let index = 500; index < getTextArea.length; index += 1) {
        contador = index;
    }
  }
  console.log(contador);
}