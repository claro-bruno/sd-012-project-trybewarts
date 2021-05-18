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
    labelNota.innerText = nota;
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

window.onload = () => {
  habilitandoBotaoEnviar();
  criandoRadiosNota();
  validandoCabecalho();
  botaoSubmit.disabled = true;
};
