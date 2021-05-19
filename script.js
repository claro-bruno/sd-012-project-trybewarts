function enviar(event) {
	const sendButton = document.getElementById('submit-btn');
	if (event.target.value === 'on') {
		sendButton.disabled = false;
		event.target.value = 'off';
	} else {
		sendButton.disabled = true;
		event.target.value = 'on'
	}
}

function concorda(event) {
	if (event.target.id === 'agreement') {
		enviar(event);
	} else {
		event.target.removeEventListener('click', concorda);
	}
}

document.addEventListener('click', concorda);
