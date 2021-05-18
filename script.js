let senha = document.querySelector('#senha').value;
let email = document.querySelector('#email').value;
let botaoHeader = document.querySelector('#btnheader');
botaoHeader.addEventListener('click', verificalogin);
function verificalogin(){
    let novaSenha = document.querySelector('#senha').value;
    let novoEmail = document.querySelector('#email').value;
    if(senha !== novaSenha || email !== novoEmail){
        alert("Login ou senha inválidos");
    } else if(senha === novaSenha && email === novoEmail){
        alert("Olá, Tryber!");
    }; 
};