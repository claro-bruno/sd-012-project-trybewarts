let loginid = document.getElementById("login");
let passwId = document.getElementById("password");
l

function Startlogin() {
    if (loginid.value === 'tryber@teste.com' && passwId.value === '123456') {

        alert("Olá, Tryber !")
    }

    else {

        alert("Login ou Senha inválidos.");

    }
}