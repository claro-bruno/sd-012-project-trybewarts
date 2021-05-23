function titleOnHeader() {
  const paiHeader = document.querySelector('header');
  const title = document.createElement('h1');
  title.innerHTML = 'Trybewarts';
  paiHeader.appendChild(title);
  title.id = 'trybewarts-header-title';
}
titleOnHeader();

function createFormLogin() {
  const paiHeader = document.querySelector('header');
  const form = document.createElement('form');
  form.action = '';
  form.className = 'trybewarts-login';
  form.style.display = 'flex';
  paiHeader.appendChild(form);
}
createFormLogin();

const paiForm = document.querySelector('.trybewarts-login');

function createLogin() {
  const inputNameI = document.createElement('input');
  inputNameI.type = 'text';
  inputNameI.name = 'name';
  inputNameI.id = 'full-name';
  inputNameI.placeholder = 'Login';
  paiForm.appendChild(inputNameI);
}
createLogin();

function createPwd() {
  const inputSenhaI = document.createElement('input');
  inputSenhaI.type = 'password';
  inputSenhaI.name = 'pwd';
  inputSenhaI.id = 'pwd';
  inputSenhaI.placeholder = 'Senha';
  paiForm.appendChild(inputSenhaI);
}
createPwd();

function buttonSubmit() {
  const loginButton = document.createElement('button');
  loginButton.type = 'submit';
  loginButton.innerHTML = 'ENVIAR';
  paiForm.appendChild(loginButton);
  loginButton.addEventListener('click', () => {
    const boxText = document.querySelector('#full-name').value;
    const boxPwd = document.querySelector('#pwd').value;
    if (boxText === 'tryber@teste.com' && boxPwd === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
buttonSubmit();
const paiBody = document.querySelector('body');
const main = document.createElement('main');
const form = document.createElement('form');
function formularyOnBody() {
  form.id = 'evaluation-form';
  form.innerHTML = 'FORMULARIO';
  paiBody.appendChild(main);
  main.appendChild(form);
  main.style.display = 'flex';
  form.style.display = 'flex';
  form.style.width = '675px';
  form.style.flexDirection = 'column';
  form.method = 'GET';
}
formularyOnBody();

function inserImageLogo() {
  const image = document.createElement('img');
  image.id = 'trybewarts-forms-logo';
  image.src = 'images/trybewarts-colored.svg';
  image.style.height = '500px';
  paiBody.appendChild(image);
}
inserImageLogo();

const form1 = document.querySelectorAll('form')[1];
const paiHouse = document.querySelector('#house-container div');
const selecSelect = document.querySelector('#house');
const inputName = document.createElement('input');
const inputLastName = document.createElement('input');
const inputEmail = document.createElement('input');
const createDiv = document.createElement('div');

function insertInputs() {
  form1.appendChild(createDiv);
  inputName.id = 'input-name';
  inputName.type = 'text';
  inputName.placeholder = 'Nome';
  createDiv.appendChild(inputName);
  inputLastName.id = 'input-lastname';
  inputLastName.type = 'text';
  inputLastName.placeholder = 'Sobrenome';
  createDiv.appendChild(inputLastName);
  inputEmail.id = 'input-email';
  inputEmail.type = 'text';
  inputEmail.placeholder = 'Email';
  paiHouse.insertBefore(inputEmail, selecSelect);
}
insertInputs();
// Ferificar o footer e dar push hoje
function footer() {
  const createFooter = document.createElement('footer');
  const createP = document.createElement('p');
  createP.innerHTML = 'Direitos reservados à Trybewarts©';
  createFooter.appendChild(createP);
  paiBody.appendChild(createFooter);
}
footer();
