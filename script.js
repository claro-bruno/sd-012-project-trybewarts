const login = document.getElementById('login');
const password = document.getElementById('password');

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

if (0 === 1) {
  loginCheck();
  habilitarBtn();
}
