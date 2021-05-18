function checkLogin() {
  const loginButton = document.querySelector('#loginButton');
  const defaultLogin = 'tryber@teste.com';
  const defaultPassword = '123456';
  const loginInput = document.querySelector('#login');
  const passwordInput = document.querySelector('#password');


  loginButton.addEventListener('click', function() {
			const login = loginInput.value;
			const password = passwordInput.value;
			if (login === defaultLogin && password === defaultPassword) {
				alert('Olá, Tryber!');
				return
			} else {
				alert('Login ou senha inválidos.');
			}
	})
}
checkLogin();