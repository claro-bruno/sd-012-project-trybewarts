const login = document.getElementById('login-button');

function validation() {
  const email = 'tryber@teste.com';
  const senha = '123456';
  const caixaEmail = document.getElementById('email').value;
  const caixaSenha = document.getElementById('senha').value;
  if (caixaEmail === email && caixaSenha === senha) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
}
login.addEventListener('click', validation);


function createOptionsHouse() {
  const house = document.getElementById('house');
  const houseOptionsValue = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
  const houseOptionsId = ['gitnoria-house', 'reactpuff-house', 'corvinode-house', 'pytherina-house'];

  for (let index = 0; index < houseOptionsValue.length; index += 1) {
    let createOption = houseOptionsValue[index];
    let createOption2 = houseOptionsId[index];
    createOption = document.createElement('option');
    createOption2 = document.createElement('option');
    house.appendChild(createOption).innerText = createOption;
    house.appendChild(createOption).value = createOption;
    house.appendChild(createOption2).innerText = createOption2;
    house.appendChild(createOption2).value = createOption2;
  }
} house.addEventListener('click', createOptionsHouse);
