function checkLogin() {
    const insertedEmail = email.value;
    const insertedPassword = password.value;
    const emailFormat = 'tryber@teste.com';
    const passwordFormat = '123456';
    if ((insertedEmail !== emailFormat) || (insertedPassword !== passwordFormat)) {
      email.value = '';
      password.value = '';
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  }
  
  loginButton.addEventListener('click', checkLogin);