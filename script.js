window.onload = function () {
    document.body.addEventListener("click", function(event) {
        let email = document.getElementById('input-login').value;
        let senha = document.getElementById('input-senha').value;
        if (event.target.Classname === 'login-submit') {
            let count = 0;
            let senhaArray = [];
            for (let indexEmail = 0; indexEmail < email.length; indexEmail += 1) {
                if (email[indexEmail] === '@' || email[indexEmail] === '.') {
                    count += 1;
                    console.log(count)
                }
            }
                if (count >= 2) {
                    let beforeArroba = email.split('@');
                    let beforePoint = beforeArroba[1].split('.');
                    if (beforeArroba[0].length < 3) {
                        alert('Login ou senha inválidos');
                    } else if (beforeArroba[1].length < 3) {
                        alert('Login ou senha inválidos');
                    } else if (beforePoint[1].length < 3) {
                        alert('Login ou senha inválidos');
                    }  
                } else {
                    alert ('Login ou senha inválidos');
                }
            for (let indexSenha = 0; indexSenha < senha.length; indexSenha += 1 ) {
                if (parseInt(senha[indexSenha]) >= 0 || parseInt(senha[indexSenha]) <= 9 ) {
                    senhaArray.push(parseInt(senha[indexSenha]));
                }
            } if (senhaArray.length <= 6) {
                alert ('Login ou senha inválidos');
            }
            alert ('Olá, Tryber!')
        }
    }
    )
};