const botao = document.querySelector("#btLoguin")
const senha = document.querySelector("#senha")
const login = document.querySelector("#loguin")

function btLoguin() {

    botao.addEventListener('click', btLoguin)
     if (login.value !== 'tryber@teste.com' || senha.value !== '123456') {
            alert('Login ou senha inválidos.');
    } else {
            alert('Olá, Tryber!');
    }
   
 }
 btLoguin();



    //  if (login !== loginCerto || senha !== senhaCerta) {
    //     window.alert('Login ou senha inválidos.')
    // } else {
    //     window.alert('Olá, Tryber!')
    // }