const botao = document.querySelector('#singUp');

function validandoCabecalho() {
  botao.addEventListener('click', () => {
    const login = document.querySelector('#login');
    const senha = document.querySelector('#senha');
    if (login.value === 'tryber@teste.com' && senha.value === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Login ou senha inválidos.');
    }
  });
}

const divNotas = document.querySelector('#rate-div');

function criandoRadiosNota() {
  for (let nota = 1; nota <= 10; nota += 1) {
    const notaRadio = document.createElement('input');
    const labelNota = document.createElement('label');
    notaRadio.type = 'radio';
    notaRadio.id = `rate-${nota}`;
    notaRadio.value = nota;
    notaRadio.name = 'rate';
    notaRadio.classList.add('form-check-input');
    labelNota.innerText = nota;
    labelNota.classList.add('form-check-label');
    if (nota === 10) notaRadio.checked = true;
    divNotas.appendChild(notaRadio);
    divNotas.appendChild(labelNota);
  }
}

const botaoSubmit = document.querySelector('#submit-btn');
const checkboxSubmit = document.querySelector('#agreement');

function habilitandoBotaoEnviar() {
  checkboxSubmit.addEventListener('click', () => {
    if (checkboxSubmit.checked) botaoSubmit.disabled = false;
    else botaoSubmit.disabled = true;
  });
}

const textarea = document.querySelector('#textarea');
const contador = document.querySelector('#counter');

function contadorDeCaracteres() {
  textarea.addEventListener('keyup', () => {
    contador.innerText = `${500 - textarea.value.length}`;
  });
}

const form = document.querySelector('#evaluation-form');

const valoresInputs = {
  Nome: document.querySelector('#input-name').value,
  Sobrenome: document.querySelector('#input-lastname').value,
  Email: document.querySelector('#input-email').value,
  Casa: document.querySelector('#house').value,
  Familia: document.querySelector('input[name="family"]:checked').value,
  Materias: 0,
  Avaliacao: 0,
  Observacao: textarea.value,
}

window.onload = () => {
  habilitandoBotaoEnviar();
  criandoRadiosNota();
  validandoCabecalho();
  contadorDeCaracteres();
  botaoSubmit.disabled = true;
  valoresInputs.Avaliacao = document.querySelector('input[name="rate"]:checked').value;
};
