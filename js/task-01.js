const categoriesItem = document.querySelectorAll('.item')
console.log(`Number of categories: ${categoriesItem.length}`);

const ulEl = document.querySelectorAll('.item');

console.log(' ')

categoriesItem.forEach(elem => {
    const categoriesElm = elem.firstElementChild.textContent
    if (categoriesElm === elem.firstElementChild.textContent) {
        const animals = categoriesElm;
        console.log(`Category: ${elem.firstElementChild.textContent}`);
        const animalEl = elem.querySelectorAll('li');
        console.log(`Elements: ${animalEl.length}`);
    }
})

