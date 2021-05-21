const login = document.getElementById('login-button');
const envio = document.getElementById('agreement');

function validation() {
  const email = 'tryber@teste.com';
  const senha = '123456';
  const caixaEmail = document.getElementById('email').value;
  const caixaSenha = document.getElementById('senha').value;
  if (caixaEmail === email && caixaSenha === senha) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
}
login.addEventListener('click', validation);

function displayenviar() {
  const submit = document.getElementById('submit-btn');
  if (submit.className === 'submit1') {
    submit.className = ('submit-none');
  } else {
    submit.className = 'submit1';
    submit.disabled = false;
  }
}

envio.addEventListener('click', displayenviar);
