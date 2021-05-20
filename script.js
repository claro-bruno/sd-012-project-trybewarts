function titleOnHeader() {
  const paiHeader = document.querySelector('header');
  const title = document.createElement('h1');
  title.innerHTML = 'Trybewarts';
  paiHeader.appendChild(title);
  title.id = 'trybewarts-header-title';
}
titleOnHeader();
// HeaderVAZIO foi criado só para adiantar, pode ser substituido futuramente.
function headerVazio() {
  const paiHeader = document.querySelector('header');
  const teste = document.createElement('h1');
  teste.innerHTML = '';
  paiHeader.appendChild(teste);
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
  // Desafio 6.
  form.style.flexDirection = 'column';
  form.method = 'GET';
}
formularyOnBody();

function inserImageLogo() {
  const paiBody = document.querySelector('body');
  const image = document.createElement('img');
  image.id = 'trybewarts-forms-logo';
  image.src = 'images/trybewarts-colored.svg';
  image.style.height = '500px';
  paiBody.appendChild(image);
}
inserImageLogo();
