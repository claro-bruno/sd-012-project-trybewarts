function getLogin() {
  const login = document.getElementById('input-login').value;
  return login;
}

function getSenha() {
  const senha = document.getElementById('input-senha').value;
  return senha;
}

function validateLogin(login, senha) {
  if ((login === 'tryber@teste.com') && (senha === '123456')) return true;
}

function loginButton() {
  const button = document.getElementById('btt-login');
  button.addEventListener('click', () => {
    if (validateLogin(getLogin(), getSenha())) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

function getAgreement() {
  const agreement = document.getElementById('agreement').checked;
  return agreement;
}

function enableButton() {
  const agreement = document.getElementById('agreement');
  agreement.addEventListener('input', () => {
    if (getAgreement()){
      document.getElementById('submit-btn').disabled = false;
    } else {
      document.getElementById('submit-btn').disabled = true;
    }
  });
}

window.onload = () => {
  loginButton();
  enableButton();
};
