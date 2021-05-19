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
checker.onchange = function funcao() {
sendbtn.disabled = !this.checked;
};
