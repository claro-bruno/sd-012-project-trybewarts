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

// gerencia os clicks na página
function listener(event) {
  // se o alvo do click for o elemento com id 'botaoLogin'
  if (event.target.id === 'botaoLogin') {
    // valida login e senha
    validacaoLoginSenha(event);
  }
  // se o alvo do click for o elemento com id 'agreement' (checkbox)
  if (event.target.id === 'agreement') {
    validaBotaoSubmit(event);
  }
}
// adiciona evento de click em toda a página
document.addEventListener('click', listener);
