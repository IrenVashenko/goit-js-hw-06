const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredItem = document.querySelector("#ingredients");
// const list = ingredients.map(ingredient => `<li class="list-item">${ingredient}</li>`).join("");
// ingredItem.innerHTML = list;


const item = ingredients.map(ingredient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  return listItem
});

ingredItem.append(...item);
