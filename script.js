const catchSenhaInput = document.getElementById('senha');
const catchEmailInput = document.getElementById('email');

function validaSenhaEmail() {
  if (catchSenhaInput.value !== '123456' || catchEmailInput.value !== 'tryber@teste.com') {
    window.alert('Login ou senha inválidos.');
    return false;
  }
  window.alert('Olá, Tryber!');
  return true;
}

const catchSubmitButton = document.getElementById('button');
catchSubmitButton.addEventListener('click', validaSenhaEmail);
