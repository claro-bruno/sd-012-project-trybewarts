const email = document.querySelector('#mail');
const senha = document.querySelector('#password');
const submit = document.querySelector('#submit');
const subBtn = document.querySelector('#submit-btn');
const agreeCheck = document.querySelector('#agreement');
subBtn.disabled = true;
 
submit.addEventListener('click', () => {
 const loginTrybe = 'tryber@teste.com';
 const senhaTrybe = '123456';
 if (email.value !== loginTrybe && senha.value !== senhaTrybe) {
   window.alert('Login ou senha inválidos.');
 } else {
   window.alert('Olá, Tryber!');
 }
});
 
function sendForm() {
 if (agreeCheck.checked === true) {
   subBtn.disabled = false;
 } else {
   subBtn.disabled = true;
 }
}
agreeCheck.addEventListener('click', sendForm);