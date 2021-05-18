window.onload = function() {
    let btn = document.querySelector('.btn-submit');
    btn.addEventListener('click', function() {
        let login = document.querySelector('.input-login');
        let loginValue = login.value;
        let password = document.querySelector('.input-senha');
        let passwordValue = password.value;
        if(loginValue == 'tryber@teste.com' && passwordValue == 123456){
            alert('Olá, Tryber!');
        } else {
            alert('Login ou senha inválidos.');
        }
    })
}