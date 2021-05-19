let login = document.getElementById("input-login");
let senha = document.getElementById("input-senha");
let botao = document.getElementById("input-botao");

function mensagemFormulario(){
    let login = document.getElementById("input-login");
    let senha = document.getElementById("input-senha");
        if (login.value === "tryber@teste.com" && senha.value === "123456"){
        alert("Olá, Tryber!")
         }
        else {
        alert("Login ou senha inválidos.") 
         };
};
botao.addEventListener("click", mensagemFormulario);