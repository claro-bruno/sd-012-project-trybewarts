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

function pegandoMaterias() {
  const materiasEscolhidas = document.querySelectorAll('input[name="content"]:checked');
  let textoMaterias = '';
  materiasEscolhidas.forEach((element) => {
    textoMaterias += `${element.value}, `;
  });
  return textoMaterias;
}

const valoresInputs = {
  Nome: '',
  Sobrenome: '',
  Email: '',
  Casa: '',
  Familia: '',
  Materias: '',
  Avaliacao: '',
  Observacao: '',
};

function preenchendoObjetoValores() {
  valoresInputs.Nome = document.querySelector('#input-name').value;
  valoresInputs.Sobrenome = document.querySelector('#input-lastname').value;
  valoresInputs.Email = document.querySelector('#input-email').value;
  valoresInputs.Casa = document.querySelector('#house').value;
  valoresInputs.Familia = document.querySelector('input[name="family"]:checked').value;
  valoresInputs.Observacao = textarea.value;
  valoresInputs.Avaliacao = document.querySelector('input[name="rate"]:checked').value;
  valoresInputs.Materias = pegandoMaterias();
}

function colocandoInfoNasLis() {
  const fullname = document.querySelector('#li-fullname');
  fullname.innerText = `Nome: ${valoresInputs.Nome} ${valoresInputs.Sobrenome}`;
  document.querySelector('#li-email').innerText = `Email: ${valoresInputs.Email}`;
  document.querySelector('#li-casa').innerText = `Casa: ${valoresInputs.Casa}`;
  document.querySelector('#li-familia').innerText = `Família: ${valoresInputs.Familia}`;
  document.querySelector('#li-materias').innerText = `Matérias: ${valoresInputs.Materias}`;
  document.querySelector('#li-avaliacao').innerText = `Avaliação: ${valoresInputs.Avaliacao}`;
  document.querySelector('#li-observacao').innerText = `Observações: ${valoresInputs.Observacao}`;
}

function gerandoDadosForms() {
  botaoSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#container-forms').style.display = 'none';
    document.querySelector('#lista-form').style.display = 'flex';
    preenchendoObjetoValores();
    colocandoInfoNasLis();
  });
}

window.onload = () => {
  habilitandoBotaoEnviar();
  criandoRadiosNota();
  validandoCabecalho();
  contadorDeCaracteres();
  gerandoDadosForms();
  botaoSubmit.disabled = true;
};
