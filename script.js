const loginid = document.getElementById("login");
const passwId = document.getElementById("password");

function Startlogin() {
    if (loginid.value === 'tryber@teste.com' && passwId.value === '123456') {
        alert("Olá, Tryber !")
    }
    else {
        alert("Login ou Senha inválidos.");
    }
};