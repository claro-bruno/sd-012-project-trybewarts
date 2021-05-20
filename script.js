function validarLogin() {
  const botaoLogin = document.getElementById('entrar');

  botaoLogin.addEventListener('click', (event) => {
    event.preventDefault();

    const loginValue = document.getElementById('login').value;
    const senhaValue = document.getElementById('senha').value;

    if (loginValue !== 'tryber@teste.com' || senhaValue !== '123456') {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  });
}

validarLogin();

function validarSubmit() {
  const checkin = document.getElementById('agreement');
  checkin.addEventListener('change', (event) => {
    const buttonSubmit = document.getElementById('submit-btn');
    if (event.target.checked) {
      buttonSubmit.removeAttribute('disabled');
    } else {
      buttonSubmit.setAttribute('disabled', true);
    }
  });
}

validarSubmit();

function charCounter() {
  const textArea = document.getElementById('textarea');

  textArea.addEventListener('keyup', (event) => {
    const counter = document.getElementById('counter');
    counter.innerHTML = 500 - event.target.textLength;
  });
}

charCounter();

const fillFamily = () => {
  const family = document.querySelectorAll('input[name="family"]');
  const filledFamily = document.getElementById('filled-family');

  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      filledFamily.innerHTML = family[index].value;
    }
  }
};

const fillHouse = () => {
  const house = document.getElementById('house');
  const filledHouse = document.getElementById('filled-house');

  filledHouse.innerHTML = house.value;
};

const fillEmail = () => {
  const email = document.getElementById('input-email');
  const filledEmail = document.getElementById('filled-email');

  filledEmail.innerHTML = email.value;
};

const fillFullName = () => {
  const name = document.getElementById('input-name');
  const lastname = document.getElementById('input-lastname');
  const filledName = document.getElementById('filled-name');

  filledName.innerHTML = `${name.value} ${lastname.value}`;
  filledName.style.textTransform = 'capitalize';
};

function hideFormShowFilledForm() {
  const form = document.getElementById('evaluation-form');
  const filledForm = document.getElementById('filled-form');

  form.style.display = 'none';
  filledForm.style.display = 'flex';
}

function eventSubmit() {
  const buttonSubmitForm = document.getElementById('submit-btn');

  buttonSubmitForm.addEventListener('click', (event) => {
    event.preventDefault();

    hideFormShowFilledForm();
    fillFullName();
    fillEmail();
    fillHouse();
    fillFamily();
  });
}

eventSubmit();
