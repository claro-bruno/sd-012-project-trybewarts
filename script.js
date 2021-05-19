function checkLogin() {
  const loginButton = document.querySelector('#loginButton');
  const defaultLogin = 'tryber@teste.com';
  const defaultPassword = '123456';
  const loginInput = document.querySelector('#login');
  const passwordInput = document.querySelector('#password');

  loginButton.addEventListener('click', () => {
    const login = loginInput.value;
    const password = passwordInput.value;
    if (login === defaultLogin && password === defaultPassword) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
checkLogin();

function enableSubmit() {
  const submitButton = document.getElementById('submit-btn');
  const checkbox = document.querySelector('#agreement');

  checkbox.addEventListener('click', () => {
    const condition = checkbox.value;
    if (condition === 'false') {
      console.log(checkbox.value);
      submitButton.disabled = false;
      checkbox.value = 'true';
      console.log(checkbox.value);
    }
    if (condition === 'true') {
      console.log(checkbox.value);
      submitButton.disabled = true;
      checkbox.value = 'false';
      console.log(checkbox.value);
    }
  });
}
enableSubmit();

function countCharacters() {
  const textArea = document.querySelector('#textarea');

  textArea.addEventListener('keyup', () => {
    const typed = document.querySelector('#textarea').value;
    const typedLength = typed.length;
    if (typed === '') {
      document.querySelector('#counter').innerHTML = 500;
    }
    const maxCharacters = 500;
    const remains = maxCharacters - typedLength;
    console.log(remains);
    document.querySelector('#counter').innerHTML = remains;
  });
}
countCharacters();
