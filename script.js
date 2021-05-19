const botaoLogin = document.querySelector('#botao-login');
const inputLogin = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const inputAgreement = document.querySelector('#agreement');
const observacoes = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const botaoSubmit = document.querySelector('#submit-btn');
const formulario = document.querySelector('#evaluation-form');
const inputNome = document.querySelector('#input-name');
const inputSobrenome = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const inputCasa = document.querySelector('#house');
const informacoesPreenchidas = {
  nome: '',
  email: '',
  casa: '',
  familia: '',
  materias: [],
  avaliacao: '',
  observacoes: '',
};

function login() {
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

botaoLogin.addEventListener('click', login);

function habilitarBotao() {
  if (inputAgreement.value === 'habilitado') {
    botaoSubmit.disabled = false;
  }
}

inputAgreement.addEventListener('click', habilitarBotao);

function caracteresRestantes() {
  counter.innerHTML = 500 - observacoes.value.length;
}

observacoes.addEventListener('keyup', caracteresRestantes);

function removerConteudo() {
  while (formulario.firstChild) {
    formulario.removeChild(formulario.firstChild);
  }
}

function adicionarFamilia() {
  const family = document.querySelectorAll('.family');
  for (let index = 1; index < family.length; index += 1) {
    if (family[index].checked) {
      informacoesPreenchidas.familia = `Família: ${family[index].value}`;
    }
  }
}

function adicionarMaterias() {
  const subjects = document.querySelectorAll('.subject');
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      informacoesPreenchidas.materias.push(subjects[index].value);
    }
  }
}

function adicionarNota() {
  const notas = document.querySelectorAll('.nota');
  for (let index = 0; index < notas.length; index += 1) {
    if (notas[index].checked === true) {
      informacoesPreenchidas.avaliacao = `Avaliação: ${notas[index].value}`;
    }
  }
}

function adicionarInformações() {
  informacoesPreenchidas.nome = `Nome: ${inputNome.value} ${inputSobrenome.value}`;
  informacoesPreenchidas.email = `Email: ${inputEmail.value}`;
  informacoesPreenchidas.casa = `Casa: ${inputCasa.value}`;
  adicionarFamilia();
  adicionarMaterias();
  adicionarNota();
  informacoesPreenchidas.observacoes = `Observações: ${observacoes.value}`;
}

function escreverMaterias(key) {
  if (key === 'materias') {
    const informacao = document.createElement('p');
    informacao.innerHTML = `Matérias: ${informacoesPreenchidas.materias[0]}`;
    for (let index = 1; index < informacoesPreenchidas.materias.length; index += 1) {
      informacao.innerHTML = `${informacao.innerHTML}, ${informacoesPreenchidas.materias[index]}`;
    }
    formulario.appendChild(informacao);
  } else {
    const informacao = document.createElement('p');
    informacao.innerHTML = informacoesPreenchidas[key];
    formulario.appendChild(informacao);
  }
}

function escreverInformacoes() {
  const indice = ['nome', 'email', 'casa', 'familia', 'materias', 'avaliacao', 'observacoes'];
  for (let index = 0; index < indice.length; index += 1) {
    const key = indice[index];
    escreverMaterias(key);
  }
}

botaoSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  adicionarInformações();
  removerConteudo();
  escreverInformacoes();
});
