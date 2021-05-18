function formHeader() {
  const login = document.querySelector('.input-login');
  const loginValue = login.value;
  const loginTexto = loginValue.toString();
  const password = document.querySelector('.input-senha');
  const passwordValue = password.value;
  const passwordSenha = parseInt(passwordValue, 10);
  if (loginTexto === 'tryber@teste.com' && passwordSenha === 123456) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const agreement = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');

function verificaCadastro() {
  if (agreement.checked === true) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}

agreement.addEventListener('click', verificaCadastro);

const btn = document.querySelector('.btn-submit');
btn.addEventListener('click', formHeader);
