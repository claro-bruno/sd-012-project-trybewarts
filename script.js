window.onload = function() {
  const btn = document.querySelector('.btn-submit');
  btn.addEventListener('click', function() {
    const login = document.querySelector('.input-login');
    const loginValue = login.value;
    const loginTexto = loginValue.toString();
    const password = document.querySelector('.input-senha');
    const passwordValue = password.value;
    const passwordSenha = parseInt(passwordValue);
    if (loginTexto === 'tryber@teste.com' && passwordSenha === 123456) {
        alert('Olá, Tryber!');
    } else {
        alert('Login ou senha inválidos.');
    }
  })
}

let agreement = document.getElementById("agreement");
let submit = document.getElementById("submit-btn");
agreement.addEventListener("click", function () {
    if (agreement.checked == true) {
        submit.disabled = false;
    }
    else {
        submit.disabled = true;
    }
})
