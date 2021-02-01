const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
let ulListEl = document.getElementById('ingredients');
const vegIngredients = ingredients.forEach(ingredient => {
    let items = document.createElement('li');
    // items.innerHTML = ingredient;
  items.textContent = ingredient
  ulListEl.append(items);
});


