const login = document.getElementById('login');
const password = document.getElementById('password');
const counter = document.getElementById('counter');
let charCounter = 500;

function loginCheck() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
    return;
  }
  alert('Login ou senha inválidos.');
}

function habilitarBtn(checkBox) { //  referência : https://thisinterestsme.com/disable-button-checkbox-checked/
  if (checkBox.checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}

function updateCounter(element) {
  charCounter = 500 - element.value.length;
  counter.innerHTML = `${charCounter} restantes`;
}

counter.innerHTML = `${charCounter} restantes`;

if (0 === 1) {
  loginCheck();
  habilitarBtn();
  updateCounter();
}
