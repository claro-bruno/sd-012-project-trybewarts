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

const inputName = document.getElementById('input-name').value;
const inputLastName = document.getElementById('input-lastname').value;
const inputEmail = document.getElementById('input-email').value;
const inputHouse = document.getElementById('house').value;
const inputsFamilia = document.getElementsByName('family');
const inputsConteudo = document.getElementsByName('conteudo');
const mainElement = document.getElementById('mainEl');

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
  let quant = 500;
  let total = valor.length;
  if(total <= quant) {
    resto = quant - total;
    document.getElementById('counter').innerHTML = resto;
  } else {
    document.getElementById('textarea').value = valor.substr(0,quant);
  }
}

let nome = document.querySelector('#input-name').value;
let sobrenome = document.querySelector('#nput-lastname').value;
nome.innerHTML = nome + sobrenome;
