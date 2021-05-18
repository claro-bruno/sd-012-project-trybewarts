const button = document.querySelector('#botao-login');
const familys = ['Frontend', 'Backend', 'FullStack'];

function botaoLoginPassword() {
  const loginTrybewarts = document.querySelector('#login');
  const senhaTrybewarts = document.querySelector('#password');
  if (loginTrybewarts.value !== 'tryber@teste.com' || senhaTrybewarts.value !== '123456') {
    alert('Login ou senha inválidos.');
  }
  if (loginTrybewarts.value === 'tryber@teste.com' && senhaTrybewarts.value === '123456') {
    alert('Olá, Tryber!');
  }
}

function preventD() {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    botaoLoginPassword();
  });
}

preventD();

function createFamily() {
  const getTagFamily = document.getElementById('family-input');
  for (let index = 0; index < familys.length; index += 1) {
    const createLabelFamily = document.createElement('label');
    const createInput = document.createElement('input');
    createLabelFamily.innerText = familys[index];
    createInput.className = 'family';
    createInput.type = 'radio';
    createInput.value = familys[index];
    getTagFamily.appendChild(createLabelFamily);
    getTagFamily.appendChild(createInput);
  }
}

createFamily();