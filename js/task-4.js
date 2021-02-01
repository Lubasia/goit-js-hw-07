const decrementEl = document.querySelector("[data-action='decrement']");
const incrementEl = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector('#value');

let counterValue = 0
const decrement = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
const increment = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}
decrementEl.addEventListener('click', decrement);
incrementEl.addEventListener('click', increment);