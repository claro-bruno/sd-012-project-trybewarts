const loginForm = document.querySelector('.trybewarts-login');
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

function getFormData(data) {
  const form = {
    login: data.elements.login.value,
    password: data.elements.password.value,
  };
  return form;
}

function verifyForm(formData) {
  if ((formData.login === 'tryber@teste.com') && (formData.password === '123456')) {
    return true;
  } return false;
}

function validateLogin(event) {
  event.preventDefault();
  const form = event.target;
  const formData = getFormData(form);
  if (verifyForm(formData)) {
    alert('Olá, Tryber!');
  } else alert('Login ou senha inválidos.');
}
loginForm.addEventListener('submit', validateLogin);

function activateButton() {
  submitBtn.disabled = true;
  if (agreement.checked) {
    submitBtn.disabled = false;
  }
}
activateButton();
