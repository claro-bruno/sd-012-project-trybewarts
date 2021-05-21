const loginButton = document.getElementById('login-button');
const emailInput = document.getElementById('trybewarts-email');
const passwordInput = document.getElementById('trybewarts-senha');

function verifyLogin(event) {
  if (emailInput.value !== 'tryber@teste.com' || passwordInput.value !== '123456') {
    event.preventDefault();
    window.alert('Login ou senha inválidos.');
  } else {
    window.alert('Olá, Tryber!');
  }
}

loginButton.addEventListener('click', verifyLogin);

function generateRates() {
  const contentRate = document.querySelector('.content-rate');
  for (let index = 1; index <= 10; index += 1) {
    let label = document.createElement('label');
    let option = document.createElement('input');
    option.classList.add('optionClass');
    option.id = 'optionRate' + index;
    label.for = option.id;
    option.type = 'radio';
    option.value = index;
    option.name = 'rate';
    label.innerHTML = index;
    contentRate.appendChild(label);
    label.appendChild(option);
  }
}

generateRates();
