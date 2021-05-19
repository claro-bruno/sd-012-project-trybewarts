function loginValidation(login, password) {
  if (login === 'tryber@teste.com' && password === '123456') {
    return true;
  }
  return false;
}

function showLoginResult() {
  const loginInput = document.querySelector('#login-input').value;
  const passwordInput = document.querySelector('#password-input').value;

  if (loginValidation(loginInput, passwordInput)) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function switchButtonOnOff() {
  const button = document.querySelector('#submit-btn');
  if (document.querySelector('#agreement').checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

window.onload = () => {
  document.querySelector('#login-btn').addEventListener('click', (e) => {
    e.preventDefault();
    showLoginResult();
  });
  document.querySelector('#agreement').addEventListener('click', switchButtonOnOff);
};

//Requisito 20. Contador de caracteres Utilizando a função onkeyup
const conta_caracteres = (valor) => {
  quant = 500;
  total = valor.length;
  if(total <= quant) {
      resto = quant - total;
      document.getElementById('counter').innerHTML = resto;
  } else {
      document.getElementById('textarea').value = valor.substr(0,quant);
  }
}