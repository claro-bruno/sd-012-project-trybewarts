let botao=document.getElementById("submit-btn")
let confirma=document.getElementById("agreement")
botao.disabled=true;
confirma.addEventListener("change", function(){
    if (confirma.checked==false){
        botao.disabled=true;
    }
    else {
        botao.disabled=false;
    }
})