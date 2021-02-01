const allCategoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${allCategoriesEl.length} категории.`)

const titelEl = [...allCategoriesEl]
    .map(
        categories => `Категория: ${categories.children[0].textContent}
        Количество елементов: ${categories.children[1].children.length}`
    )
    .join('\n');
console.log(titelEl)