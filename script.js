const inputNome = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const listaDeCasas = document.getElementsByName('casa');
for(let casa of listaDeCasas) {
  if(casa.checked) {
    console.log(casa);
  }
}

// guarda valores dos campos em localStorage
// // function guardarCampos() {
  
// }

// valida login e senha
function validacaoLoginSenha(event) {
  // acessa elemento com id 'inputSenha'
  const inputSenha = document.querySelector('#inputSenha');
  // acessa elemento com id 'inputLogin'
  const inputLogin = document.querySelector('#inputLogin');
  // se o valor do login e o valor da senha corresponderem aos valores definidos no requisito
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    // mostra alerta de sucesso e envia formulário
    alert('Olá, Tryber!');
  } else {
    // se não, mostra alerta de login/senha inválidos
    alert('Login ou senha inválidos.');
    // impede que o formulário seja enviado
    event.preventDefault();
  }
}
// valida botão submit
function validaBotaoSubmit(event) {
  // acessa elemento com id 'submit-btn'
  const btnSubmit = document.querySelector('#submit-btn');
  // se o checkbox estiver marcado
  if (event.target.value === 'on') {
    // habilita botão de submit
    btnSubmit.disabled = false;
    // altera estado do checkbox para desmarcado
    event.target.value = 'off';
  } else {
    // se não, desabilita botão submit
    btnSubmit.disabled = true;
    // altera estado do checkbox para marcado
    event.target.value = 'on';
  }
}

// gerencia eventos de clicks na página
function listenerClick(event) {
  // se o alvo do click for o elemento com id 'botaoLogin'
  if (event.target.id === 'botaoLogin') {
    // valida login e senha
    validacaoLoginSenha(event);
  } else if (event.target.id === 'agreement') {
    // se não, se o alvo do click for o elemento com id 'agreement' (checkbox)
    validaBotaoSubmit(event);
  } else if (event.target.id === 'submit-btn') {
    // se não, se o alvo do click for o elemento com id 'submit-btn'
    guardarCampos();
  } else {
    // se não, exclua esse evento dos registros
    event.target.removeEventListener('click', listenerClick);
  }
}
// adiciona evento de click em toda a página
document.addEventListener('click', listenerClick);

function quantidadeDeCaracteresDisponíveis(quantidadeDeCaracteres) {
  return 500 - quantidadeDeCaracteres;
}

// gerencia eventos de teclado na página
function listenerKey(event) {
  // se o alvo do click for o elemento com id 'textarea'
  if (event.target.id === 'textarea') {
    // acessa quantidade de caracteres em 'textarea'
    const quantidadeDeCaracteres = event.target.value.length;
    // acessa elemento com id 'contador'
    const contador = document.querySelector('#counter');
    // altera html interno do contador
    contador.innerHTML = quantidadeDeCaracteresDisponíveis(quantidadeDeCaracteres);
  } else {
    // se não, exclua esse evento dos registros
    event.target.removeEventListener('keyup', listenerKey);
  }
}

// adiciona evento de teclado em toda página
document.addEventListener('keyup', listenerKey);

console.log("oioioioioi");