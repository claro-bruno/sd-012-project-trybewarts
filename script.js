function loginVerify() {
    const User = 'tryber@teste.com';
    const Pass = '123456';

    let login = document.getElementById('Login').value;
    let senha = document.getElementById('Senha').value;

    if (User == login & Pass == senha) {
      alert('Olá, Tryber!');
    }else{
      alert('Login ou senha inválidos.');
    }
}