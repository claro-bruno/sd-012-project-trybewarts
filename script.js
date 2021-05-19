// acessa formulário de avaliação
const evaluationForm = document.querySelector('#evaluation-form');

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

function mostrarNomeCompleto() {
  const nome = document.querySelector('#input-name');
  const sobrenome = document.querySelector('#input-lastname');
  const paragrafoNomeCompleto = document.createElement('p');
  paragrafoNomeCompleto.innerHTML = `Nome: ${nome.value} ${sobrenome.value}`;
  nome.remove();
  sobrenome.remove();
  evaluationForm.appendChild(paragrafoNomeCompleto);
}

function mostrarEmail() {
  const email = document.querySelector('#input-email');
  const paragrafoEmail = document.createElement('p');
  paragrafoEmail.innerHTML = `Email: ${email.value}`;
  email.remove();
  evaluationForm.appendChild(paragrafoEmail);
}

function mostrarCasa() {
  const casa = document.querySelector('#house');
  const option = document.getElementById(house.value);
  const paragrafoCasa = document.createElement('p');
  casa.remove();
  evaluationForm.appendChild(paragrafoCasa);
}

function mostrarFamilia() {
  const familia = document.querySelector('#family-input');
  const opcoesFamilia = document.getElementsByName('family');
  const paragrafoFamilia = document.createElement('p');
  for(let opcao of opcoesFamilia) {
    if(opcao.checked) {
      paragrafoFamilia.innerHTML = `Família: ${opcao.value}`;
    }
  }
  familia.remove();
  evaluationForm.appendChild(paragrafoFamilia);
}

function mostrarConteudo() {
  const conteudo = document.querySelector('#content-inputs');
  const opcoesConteudo = document.getElementsByName('content');
  const paragrafoConteudo = document.createElement('p');
  const conteudosMarcados = [];
  for(let opcao of opcoesConteudo) {
    if(opcao.checked) {
      conteudosMarcados.push(opcao.defaultValue);
    }
  }
  paragrafoConteudo.innerHTML = `Matérias: ${conteudosMarcados.join(', ')}`;
  conteudo.remove();
  evaluationForm.appendChild(paragrafoConteudo);
}

function mostrarAvaliacao() {
  const avaliacao = document.querySelector('#avaliacao-input');
  const opcoesAvaliacao = document.getElementsByName('rate');
  const paragrafoAvaliacao = document.createElement('p');
  for(let opcao of opcoesAvaliacao) {
    if(opcao.checked) {
      paragrafoAvaliacao.innerHTML = `Avaliação: ${opcao.value}`;
    }
  }
  avaliacao.remove();
  evaluationForm.appendChild(paragrafoAvaliacao);
}

function mostrarComentario() {
  const divTextArea = document.querySelector('.text-area');
  const comentario = document.querySelector('#textarea');
  const paragrafoComentario = document.createElement('p');
  paragrafoComentario.innerHTML = `Observações: ${comentario.value}`;
  divTextArea.remove();
  evaluationForm.appendChild(paragrafoComentario);
}

function mostrarValores() {
  mostrarNomeCompleto();
  mostrarEmail();
  mostrarCasa();
  mostrarFamilia();
  mostrarConteudo();
  mostrarAvaliacao();
  mostrarComentario();
}

window.onload = () => {
  evaluationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    mostrarValores();
  });
}
