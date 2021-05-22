function login() {
  const email = document.getElementById('user').value;
  const senha = document.getElementById('senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function check() {
  const agreed = document.getElementById('agreement');
  const send = document.getElementById('submit-btn');
  if (agreed.checked) {
    send.removeAttribute('disabled');
  } else {
    send.setAttribute('disabled', 'disabled');
  }
}

function familia() {
  const famil = document.getElementsByName('family');
  const change = document.getElementById('familiaEscolhida');
  for (let index = 0; index < famil.length; index += 1) {
    if (famil[index].checked) {
      change.innerHTML = `Família: ${famil[index].value}`;
    }
  }
}

function muda() {
  const cont = document.getElementsByName('conteudo');
  const change = document.getElementById('conteudo');
  const array = [];
  for (let index = 0; index < cont.length; index += 1) {
    if (cont[index].checked) {
      array.push(` ${cont[index].value}`);
    }
  }
  change.innerHTML = `Matérias: ${array}`;
}

function avaliacao() {
  const rate = document.getElementsByName('rate');
  const change = document.getElementById('rate');
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      change.innerHTML = `Avaliação: ${rate[index].value}`;
    }
  }
}

function submited() {
  const nome = document.getElementById('nomeDoTryber');
  const emailCasa = document.getElementById('casaEmail');
  const personName = document.getElementById('input-name').value;
  const text = document.getElementById('textarea').value;
  const textArea = document.getElementById('coment');
  const lastName = document.getElementById('input-lastname').value;
  const mail = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  nome.innerHTML = `Nome: ${personName} ${lastName}`;
  emailCasa.innerHTML = `Email: ${mail} Casa: ${casa}`;
  familia();
  muda();
  avaliacao();
  textArea.innerHTML = `Observações: ${text}`;
}
window.onload = function main() {
  const counter = document.getElementById('counter');
  const textArea = document.getElementById('textarea');
  const maxCaracter = 500;
  counter.innerHTML = maxCaracter;
  textArea.addEventListener('input', () => {
    counter.innerHTML = maxCaracter - textArea.value.length;
  });
  const logar = document.querySelector('.acess');
  logar.addEventListener('click', login);
  const agreed = document.getElementById('agreement');
  agreed.addEventListener('click', check);
  const submit = document.getElementById('submit-btn');
  submit.addEventListener('click', (Event) => {
    Event.preventDefault();
    submited();
  });
};
