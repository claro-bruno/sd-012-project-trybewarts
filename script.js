const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const btn = document.querySelector('#buttonEntrar');
const btn2 = document.querySelector('#submit-btn');

function verificaLogin() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

document.getElementById('input-name');
document.getElementById('input-lastname');
document.getElementById('input-email');
document.getElementById('house');

// function capturaDados () {
//   if (btn2.disabled === false) {

//   }
// }

btn.addEventListener('click', verificaLogin);
const valor = document.querySelector('#agreement');

function habilitaBotão() {
  if (valor.checked) {
    btn2.disabled = false;
  } else {
    btn2.disabled = true;
  }
}

valor.addEventListener('click', habilitaBotão);

function limite_textarea(valor) {
  quant = 500;
  total = valor.length;
  if(total <= quant) {
      resto = quant - total;
      document.getElementById('counter').innerHTML = resto;
  } else {
      document.getElementById('textarea').value = valor.substr(0,quant);
  }
}
// btn2.addEventListener('click', substituiForm)
