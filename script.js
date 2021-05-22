
const email = document.querySelector('#mail');
const senha = document.querySelector('#password');
const submit = document.querySelector('#submit');

submit.addEventListener('click', () =>{
  const loginTrybe = 'tryber@teste.com'; 
  const senhaTrybe = '123456';
  if(email.value !== loginTrybe && senha.value !== senhaTrybe){
      window.alert( "Login ou senha inválidos.")
  } else {
      window.alert( "Olá, Tryber!")
  }    
});

function sendForm() {
  document.getElementById("submit-btn").disabled = false;
}


