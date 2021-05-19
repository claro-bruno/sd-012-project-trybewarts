const login = document.getElementById('input-login');
const senha = document.getElementById('input-senha');
const botao = document.getElementById('input-botao');
function mensagemFormulario() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!')
  } else {
    alert('Login ou senha inválidos.') 
         };
};
botao.addEventListener('click', mensagemFormulario);
