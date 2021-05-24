const botao = document.getElementById('botao');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

function validar() {
  if ((email.value !== 'tryber@teste.com') || (senha.value !== '123456')) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

function preventDef(event) {
  event.preventDefault();
}

botao.addEventListener('click', preventDef);
botao.addEventListener('click', validar);

function radio() {
  const divRadio = document.getElementById('radio-conteiner');
  for (let index = 1; index < 11; index += 1) {
    const criaInput = document.createElement('input');
    const criaLabel = document.createElement('label');
    criaInput.type = 'radio';
    criaInput.name = 'rate';
    criaLabel.innerText = index;
    criaLabel.for = index;
    criaLabel.appendChild(criaInput);
    criaInput.id = index;
    criaInput.value = index;
    divRadio.appendChild(criaLabel);
  }
}
radio();

// Encontramos resolução através do link : https://stackoverflow.com/questions/18110865/how-to-disable-enable-a-button-with-a-checkbox-if-checked
const checker = document.getElementById('agreement');
const sendbtn = document.getElementById('submit-btn');
sendbtn.disabled = true;
checker.addEventListener('click', () => {
  if (checker.checked) {
    sendbtn.disabled = false;
  } else {
    sendbtn.disabled = true;
  }
});

const textArea = document.getElementById('textarea');
const p = document.getElementById('counter');

textArea.addEventListener('input', () => {
  const maxCaracter = 500;
  const digitado = maxCaracter - textArea.value.length;
  p.innerText = digitado;
});

const capturaRadio = (name) => {
  const capRadio = document.getElementsByName(name);
  for (let index = 0; index < capRadio.length; index += 1) {
    if (capRadio[index].checked) {
      return capRadio[index].value;
    }
  }
};

const capturaMaterias = (classe) => {
  const capMaterias = document.getElementsByClassName(classe);
  const array = [];
  for (let i = 0; i < capMaterias.length; i += 1) {
    if (capMaterias[i].checked) {
      array.push(capMaterias[i].value);
    }
  }
  return array;
};

const capturaItens = () => {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const capmail = document.getElementById('input-email').value;
  const capCasa = document.getElementById('house').value;
  const capFam = capturaRadio('family');
  const clasMat = capturaMaterias('subject');
  const capRte = capturaRadio('rate');
  const capText = document.getElementById('textarea').value;
  const capTods = [name, lastName, capmail, capCasa, capFam, clasMat, capRte, capText];
  return capTods;
};

const criaParagrafo = () => {
  const paragrafo = document.createElement('p');
  const armazena = capturaItens();
  const materias = armazena[5].join(', ');
  paragrafo.innerHTML = `Nome: ${armazena[0]} ${armazena[1]}<br>`;
  paragrafo.innerHTML += `Email: ${armazena[2]} <br>`;
  paragrafo.innerHTML += `Casa: ${armazena[3]}<br>`;
  paragrafo.innerHTML += `Família: ${armazena[4]} <br>`;
  paragrafo.innerHTML += `Matérias: ${materias}<br>`;
  paragrafo.innerHTML += `Avaliação: ${armazena[6]}<br>`;
  paragrafo.innerHTML += `Observações: ${armazena[7]}<br>`;

  const capturaForm = document.getElementById('evaluation-form');
  capturaForm.innerHTML = '';
  capturaForm.innerHTML = paragrafo.innerHTML;
};

sendbtn.addEventListener('click', preventDef);
sendbtn.addEventListener('click', criaParagrafo);
