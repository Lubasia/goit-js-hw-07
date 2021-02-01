const validationInputEl = document.querySelector('#validation-input');
const atributeEl = Number(validationInputEl.dataset.length);

validationInputEl.addEventListener('change', e => {
    if (e.target.value.length !== atributeEl) {
        e.target.classList.add('invalid')
        e.target.classList.remove('valid')
    } else {
        e.target.classList.add('valid');
        e.target.classList.remove('invalid')
    }
})

