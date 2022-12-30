const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
function createIngredientListItem(item) {
  const link = document.createElement("li");
  link.textContent = item;
  link.classList.add("item");
  // console.log(link);
  return link;
}

const ingredientsEList = ingredients.map(createIngredientListItem);

// console.log(ingredientsEList);
ingredientsEl.append(...ingredientsEList);
