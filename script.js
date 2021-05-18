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

function addHouse() {
    
    const selectHouse = document.getElementById('house');
    const optionsHouse = ['gitnoria-house', 'reactpuff-house', 'corvinode-house', 'pytherina-house'];

    for (index= 0; index < optionsHouse.length; index += 1) {
        houses = optionsHouse[index]
    
     const option = document.createElement('option');
        option.value = houses;
        option.text = houses;
        selectHouse.appendChild(option);
    };
};