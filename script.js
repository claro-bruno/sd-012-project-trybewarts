
// Requisito 3
let loginSubmitBtn = document.getElementById('login-submit');
let loginUser = document.getElementById('login-name');
let loginPwd = document.getElementById('login-pwd');
loginSubmitBtn.addEventListener('click', validateLogin);
function validateLogin(e){
  e.preventDefault();
  let user = loginUser.value;
  let pwd = loginPwd.value;
  if (user == 'tryber@teste.com' && pwd == '123456'){
    alert('Olá, Tryber!');
  }else{
    alert('Login ou senha inválidos.');
  }
}

