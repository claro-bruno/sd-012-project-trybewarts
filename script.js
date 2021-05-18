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