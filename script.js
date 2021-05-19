const botaoLogin = document.querySelector('#botao-login');
const inputLogin = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
// const formulario = document.querySelector('#evaluation-form');
// const botaoSubmit = document.querySelector('#submit-btn');
// const inputNome = document.querySelector('#input-name');
// const inputSobrenome = document.querySelector('#input-lastname');
// const inputEmail = document.querySelector('#input-email');
// const inputCasa = document.querySelector('#house');
// let informacoesPreenchidas = {
//   nome: '',
//   email: '',
//   casa: '',
//   familia: '',
//   materias: '',
//   avaiacao: '',
//   observacoes: ''
// };

function login() {
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

botaoLogin.addEventListener('click', login);

// function removerConteudo() {
//   const conteudoForm = formulario.children;
//   for (let index = 0; index < conteudoForm.length; index += 1) {
//     formulario.removeChild(conteudoForm[index]);
//   }
// }

// function adicionarInformações() {
//   informacoesPreenchidas.nome = inputNome.value + ' ' + inputSobrenome.value;
//   informacoesPreenchidas.email = inputEmail.value;
//   informacoesPreenchidas.casa = inputCasa.value;
// }

// botaoSubmit.addEventListener('click', adicionarInformações);

// botaoSubmit.disabled = false;
