//Formulário


function botaoSubmeter(){
    
    let inputLogin = document.getElementById('input-login');
    let inputSenha = document.getElementById('input-senha');
               if(inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456'){
                alert('Olá, Tryber!')
            }else{
                alert('Login ou senha inválidos.')
            }
        }


 window.onload = function(){
    let button = document.getElementById('botao-login');
    console.log('button');
    button.addEventListener('click', function(event){
        event.preventDefault();
        botaoSubmeter();
    
    });
} 

