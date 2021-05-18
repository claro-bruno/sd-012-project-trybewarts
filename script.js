function formLogin() {
  const loginInput = document.getElementById('loginInput');
  const loginButton = document.getElementById('loginButton');
  const passwordInput = document.getElementById('passwordInput');
  loginButton.addEventListener('click', () => {
    if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

function submitForm() {
  const agreementCheckbox = document.getElementById('agreement');
  const submitBtn = document.getElementById('submit-btn');
  agreementCheckbox.addEventListener('click', () => {
    submitBtn.removeAttribute('disabled');
  });
}

window.onload = function loadPage() {
  formLogin();
  submitForm();
};
