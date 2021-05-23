const loginField = document.getElementById('login-field');
const senhaField = document.getElementById('senha-field');
const botaoEntrar = document.getElementById('entrar');

function validate() {
  if (loginField.value === 'tryber@teste.com' && senhaField.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
botaoEntrar.addEventListener('click', validate);
// validate();

// btn enviar inicialmente desabilitado //
const btnEnviar = document.getElementById('submit-btn');
btnEnviar.disabled = true;

// feito com ajuda da repositório do colega Max alves.
const checkbox = document.getElementById('agreement');

function enableButton(event) {
  if (event.target.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}
checkbox.addEventListener('click', enableButton);
