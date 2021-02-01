const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
    inputEl.value !== '' ? spanEl.textContent = event.target.value : 
    spanEl.textContent = 'незнакомец';
})