const button = document.getElementsByClassName('trybewarts-login')[0].lastElementChild;

function checkLogin() {
  const emailInput = document.getElementsByClassName('trybewarts-login')[0].firstElementChild;
  const passInput = emailInput.nextElementSibling;

  if (emailInput.value === 'tryber@teste.com' && passInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
button.addEventListener('click', checkLogin);

function gerarNumero() {
  const divAvaliacao = document.getElementById('avaliacao');
  for (let index = 1; index <= 10; index += 1) {
    const inputRadio = document.createElement('input');
    const inputLabels = document.createElement('label');
    inputRadio.type = 'radio';
    inputRadio.name = 'rate';
    inputRadio.id = index;
    inputRadio.value = index;
    inputLabels.htmlFor = index;
    inputLabels.innerText = index;
    divAvaliacao.appendChild(inputLabels);
    divAvaliacao.appendChild(inputRadio);
  }
}
gerarNumero();

const inputCheckbox = document.getElementById('agreement');

function agreement() {
  const buttonCheckbox = document.getElementById('submit-btn');
  if (inputCheckbox.checked) {
    buttonCheckbox.disabled = false;
  } else {
    buttonCheckbox.disabled = true;
  }
}
inputCheckbox.addEventListener('click', agreement);
