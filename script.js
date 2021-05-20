function titleOnHeader() {
  const paiBody = document.querySelector('header');
  const title = document.createElement('h1');
  title.innerHTML = 'Trybewarts';
  paiBody.appendChild(title);
  title.id = 'trybewarts-header-title';
}
titleOnHeader();
// HeaderVAZIO foi criado só para adiantar, pode ser substituido futuramente.
function headerVazio() {
  const paiBody = document.querySelector('header');
  const teste = document.createElement('h1');
  teste.innerHTML = '';
  paiBody.appendChild(teste);
}
headerVazio();

function formularyOnBody() {
  const paiBody = document.querySelector('body');
  const main = document.createElement('main');
  const form = document.createElement('form');
  form.id = 'evaluation-form';
  form.innerHTML = 'FORMULARIO';
  paiBody.appendChild(main);
  main.appendChild(form);
  main.style.display = 'flex';
  form.style.display = 'flex';
  form.style.width = '675px';
}
formularyOnBody();
