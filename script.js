const getLoginButton = document.querySelector('#login-btn');
const getLoginInput = document.querySelector('#login-input');
const getSenhaInput = document.querySelector('#senha-input');
const getAgreementCheck = document.querySelector('#agreement');
const getFormButton = document.querySelector('#submit-btn');
const getOutputDiv = document.querySelector('#form-output');
const getInputDiv = document.querySelector('#form-input');

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

//  function counterFunction () {
//  let contador = 500;
//  let referencia = 500;
//  let counterChar = document.getElementById('counter').value;
//  let textArea = document.querySelectorAll('#textarea');
//  if (textArea.value !== '') {
//    for (let index = 0; index < 500; index += 1) {
//      contador = 500 - textArea.length;
//    }
//
//  }
//  counterChar = contador;
//  console.log(contador);
// }

function formOutput() {
  event.preventDefault();
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  let pName = document.createElement('p');
  let pEmail = document.createElement('p');
  let pHouse = document.createElement('p');

  pName.innerHTML = `Nome: ${name} ${lastName}`;
  getOutputDiv.appendChild(pName);
  pEmail.innerHTML = `Email: ${email}`;
  getOutputDiv.appendChild(pEmail);
  pHouse.innerHTML = `Casa: ${house}`;
  getOutputDiv.appendChild(pHouse);

  getInputDiv.style.display = 'none';
  getOutputDiv.style.display = 'flex';
}
getFormButton.addEventListener('click', formOutput);
