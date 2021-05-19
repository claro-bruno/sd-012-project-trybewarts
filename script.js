const login = document.getElementById('login-button');

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
