const inputButton = document.getElementById('inputButton');

function validateLogin() {
  const inputLogin = document.getElementById('inputLogin').value;
  const inputPassword = document.getElementById('inputPassword').value;
  if (inputLogin === 'tryber@teste.com' && inputPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

inputButton.addEventListener('click', validateLogin);

// Função que adiciona Option ao select de ID house
const select = document.getElementById('house');
const optionID = ['gitnoria-house', 'reactpuff-house', 'corvinode-house', 'pytherina-house'];
const optionValue = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
function createOptions() {
  for (let index = 0; index < 4; index += 1) {
    const option = document.createElement('option');
    option.value = optionValue[index];
    option.id = optionID[index];
    option.innerHTML = optionValue[index];
    select.appendChild(option);
  }
}
createOptions();
