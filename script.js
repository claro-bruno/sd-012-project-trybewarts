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
  if(event.target.checked) {
    // habilita botão de submit
    btnSubmit.removeAttribute('disabled');
  } else {
    // se não, desabilita botão submit
    btnSubmit.setAttribute('disabled', true);
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
  } else {
    // se não, exclua esse evento dos registros
    event.target.removeEventListener('click', listenerClick);
  }
}
// adiciona evento de click em toda a página
document.addEventListener('click', listenerClick);

// gerencia eventos de teclado na página
function listenerKey(event) {
  // se o alvo do click for o elemento com id 'textarea'
  if (event.target.id === 'textarea') {
    // acessa quantidade de caracteres em 'textarea'
    const quantidadeDeCaracteres = event.target.value.length;
    // acessa elemento com id 'contador'
    const contador = document.querySelector('#counter');
    // altera html interno do contador
    contador.innerHTML = 500 - quantidadeDeCaracteres;
  } else {
    // se não, exclua esse evento dos registros
    event.target.removeEventListener('keyup', listenerKey);
  }
}
// adiciona evento de teclado em toda página
document.addEventListener('keyup', listenerKey);
