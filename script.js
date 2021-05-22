function titleOnHeader() {
  const paiHeader = document.querySelector('header');
  const title = document.createElement('h1');
  title.innerHTML = 'Trybewarts';
  paiHeader.appendChild(title);
  title.id = 'trybewarts-header-title';
}
titleOnHeader();

function altenticationInput() {
  const paiHeader = document.querySelector('header');
  const form = document.createElement('form');
  form.action = '';
  form.className = 'trybewarts-login';
  form.style.display = 'flex';
  paiHeader.appendChild(form);
  const paiForm = document.querySelector('.trybewarts-login');
  const inputNameL = document.createElement('label');
  inputNameL.for = 'full-name';
  inputNameL.innerHTML = 'Name';
  paiForm.appendChild(inputNameL);
  const inputNameI = document.createElement('input');
  inputNameI.type = 'text';
  inputNameI.name = 'name';
  inputNameI.id = 'full-name';
  inputNameI.placeholder = 'Login';
  paiForm.appendChild(inputNameI);
  const inputSenhaL = document.createElement('label');
  inputSenhaL.for = 'pwd';
  inputSenhaL.innerHTML = 'Senha';
  paiForm.appendChild(inputSenhaL);
  const inputSenhaI = document.createElement('input');
  inputSenhaI.type = 'password';
  inputSenhaI.name = 'pwd';
  inputSenhaI.id = 'pwd';
  inputSenhaI.placeholder = 'Senha';
  paiForm.appendChild(inputSenhaI);
  const loginButton = document.createElement('button');
  loginButton.type = 'submit';
  loginButton.innerHTML = 'SUBMITER';
  paiForm.appendChild(loginButton);
  // Lint dando erro de quantidade de linhas. Precisamos dividir em 2 funções ou passar os estilos para css e html.
}
altenticationInput();

function formularyOnBody() {
  const paiBody = document.querySelector('body');
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

function insertInputs() {
  const paiForm = document.querySelectorAll('form')[1];
  const inputName = document.createElement('input');
  const inputLastName = document.createElement('input');
  const inputEmail = document.createElement('input');
  inputName.id = 'input-name';
  inputName.type = 'text';
  inputName.placeholder = 'Nome';
  paiForm.appendChild(inputName);
  inputLastName.id = 'input-lastname';
  inputLastName.type = 'text';
  inputLastName.placeholder = 'Sobrenome';
  paiForm.appendChild(inputLastName);
  inputEmail.id = 'input-email';
  inputEmail.type = 'text';
  inputEmail.placeholder = 'Email';
  paiForm.appendChild(inputEmail);
}
insertInputs();
