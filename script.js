const btnLogin = document.getElementById('btn-login');

function signIn() {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  if (login === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', signIn);

const selectHouse = document.getElementById('house');
const housesValue = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
const housesID = ['gitnoria-house', 'reactpuff-house', 'corvinode-house', 'pytherina-house'];

function housesOfTrybeWarts() {
  for (let index = 0; index < housesID.length; index += 1) {
    const option = document.createElement('option');
    option.id = housesID[index];
    option.value = housesValue[index];
    option.innerHTML = housesValue[index];
    selectHouse.appendChild(option);
  }
}

housesOfTrybeWarts();
