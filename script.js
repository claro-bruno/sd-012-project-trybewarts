// criar radio buttons

const rate = document.querySelector('#label-rate');

function createRate() {
  for (let index = 1; index < 11; index += 1) {
    const radioBtn = document.createElement('input');
    const label = document.createElement('label');
    label.setAttribute('for', index);
    label.innerHTML = index;
    rate.appendChild(label);
    radioBtn.setAttribute('type', 'radio');
    radioBtn.id = index;
    radioBtn.setAttribute('name', 'rate');
    radioBtn.setAttribute('value', index);
    label.appendChild(radioBtn);
    console.log('oi');
  }
}

createRate();
