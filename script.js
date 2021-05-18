const login = document.getElementById('login');
const password = document.getElementById('password');

function loginCheck() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
    return;
  }
  alert('Login ou senha inválidos.');
}
loginCheck();

//  referência : https://thisinterestsme.com/disable-button-checkbox-checked/

function habilitarBtn(checkBox) {
  if (checkBox.checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}
habilitarBtn();
