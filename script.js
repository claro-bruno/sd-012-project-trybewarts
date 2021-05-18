const loginBtn = document.querySelector('form button');

function validateInput() {
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  if (emailInput.value === 'tryber@teste.com'
  && passwordInput.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Login ou senha inválidos.');
}

function createHouseOptions() {
  const optionsObject = {
    Gitnória: 'gitnoria-house',
    Reactpuff: 'reactpuff-house',
    Corvinode: 'corvinode-house',
    Pytherina: 'pytherina-house',
  };
  const selectHouse = document.getElementById('house');
<<<<<<< HEAD
  for (const option in optionsObject) {
    if (optionsObject) {
      const houseOption = document.createElement('option');
      houseOption.id = optionsObject[option];
      houseOption.value = optionsObject[option];
      houseOption.innerText = option;
      selectHouse.appendChild(houseOption);
    }
=======
  const keysObject = Object.keys(optionsObject);
  const valuesObject = Object.values(optionsObject);
  for (let houseIndex = 0; houseIndex < keysObject.length; houseIndex += 1) {
    const houseOption = document.createElement('option');
    houseOption.id = valuesObject[houseIndex];
    houseOption.value = valuesObject[houseIndex];
    houseOption.innerText = keysObject[houseIndex];
    selectHouse.appendChild(houseOption);
>>>>>>> acab48939d1b18458bc11910b4015a425d53a5c5
  }
}

window.onload = () => {
  loginBtn.addEventListener('click', validateInput);
  createHouseOptions();
};
