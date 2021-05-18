let botao = document.getElementById('botao');
let email = document.getElementById('email');
let senha = document.getElementById('senha');
console.log(email.value);

function validar () {
if ((email.value !== 'tryber@teste.com') || (senha.value !== '123456')) {
  alert('Login ou senha inválidos.')
} else {
  alert('Olá, Tryber!')};
}

function preventDef(event) {
  event.preventDefault();
}

botao.addEventListener('click', preventDef); 
botao.addEventListener('click', validar); 

function radio () {
  let divRadio = document.getElementById('radio-conteiner');
  for (let index = 1; index < 11; index += 1) {
    let criaInput = document.createElement('input');
    let criaLabel = document.createElement('label');
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
let checker = document.getElementById('agreement');
let sendbtn = document.getElementById('submit-btn');
checker.onchange = function() {
sendbtn.disabled = !this.checked;
};

