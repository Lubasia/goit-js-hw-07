const sizeEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

sizeEl.addEventListener('input', e => {
  const textSize = sizeEl.value;
  spanEl.style.fontSize = `${textSize}px`;
});