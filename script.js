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
