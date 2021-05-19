const containerInfos = document.getElementById('container-informacoes');

function alerta() {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  const botaoLogar = document.getElementById('logar');
  botaoLogar.addEventListener('click', () => {
    if (email.value !== 'tryber@teste.com' || senha.value !== '123456') {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  });
}

function submit() {
  const concorda = document.getElementById('agreement');
  const botaoEnviar = document.getElementById('submit-btn');
  concorda.addEventListener('click', () => {
    if (concorda.checked === true) {
      botaoEnviar.disabled = false;
    } else {
      botaoEnviar.disabled = true;
    }
  });
}

function contadorCaracteres() {
  const contador = document.getElementById('counter');
  const text = document.getElementById('textarea');
  text.addEventListener('keyup', () => {
    contador.innerText = `${500 - text.value.length} caracteres restantes.`;
  });
}

function mostraNome() {
  const inputName = document.getElementById('input-name');
  const inputLastname = document.getElementById('input-lastname');
  const paragrafo = document.createElement('p');
  paragrafo.innerText = `Nome: ${inputName.value} ${inputLastname.value}`;
  containerInfos.appendChild(paragrafo);
}

function mostraEmail() {
  const inputEmail = document.getElementById('input-email');
  const paragrafo = document.createElement('p');
  paragrafo.innerText = `Email: ${inputEmail.value}`;
  containerInfos.appendChild(paragrafo);
}

function mostraCasa() {
  const inputCasa = document.getElementById('house');
  const paragrafo = document.createElement('p');
  paragrafo.innerText = `Casa: ${inputCasa.value}`;
  containerInfos.appendChild(paragrafo);
}

function mostraFamilia() {
  const inputFamilia = document.getElementsByClassName('familia');
  const paragrafo = document.createElement('p');
  for (let i = 0; i < inputFamilia.length; i += 1) {
    if (inputFamilia[i].checked) {
      paragrafo.innerText = `Família: ${inputFamilia[i].value}`;
    }
  }
  containerInfos.appendChild(paragrafo);
}

function preencheMaterias() {
  const inputMaterias = document.getElementsByClassName('subject');
  let materias = '';
  for (let i = 0; i < inputMaterias.length; i += 1) {
    if (inputMaterias[i].checked) {
      if (materias === '') {
        materias = inputMaterias[i].value;
      } else {
        materias += `, ${inputMaterias[i].value}`;
      }
    }
  }
  return materias;
}

function mostraMaterias() {
  const paragrafo = document.createElement('p');
  paragrafo.innerText = `Matérias: ${preencheMaterias()}`;
  containerInfos.appendChild(paragrafo);
}

function mostraAvaliacao() {
  const inputAvaliacao = document.getElementsByClassName('rate');
  const paragrafo = document.createElement('p');
  for (let i = 0; i < inputAvaliacao.length; i += 1) {
    if (inputAvaliacao[i].checked) {
      paragrafo.innerText = `Avaliação: ${inputAvaliacao[i].value}`;
    }
  }
  containerInfos.appendChild(paragrafo);
}

function mostraObservacoes() {
  const inputTextarea = document.getElementById('textarea');
  const paragrafo = document.createElement('p');
  paragrafo.innerText = `Observações: ${inputTextarea.value}`;
  containerInfos.appendChild(paragrafo);
}

function exibeDados() {
  const botaoEnviar = document.getElementById('submit-btn');
  const containerFormulario = document.getElementById('container-forms');
  botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    containerFormulario.style.display = 'none';
    containerInfos.style.display = 'flex';
    mostraNome();
    mostraEmail();
    mostraCasa();
    mostraFamilia();
    mostraMaterias();
    mostraAvaliacao();
    mostraObservacoes();
  });
}

window.onload = function load() {
  alerta();
  submit();
  contadorCaracteres();
  exibeDados();
};
