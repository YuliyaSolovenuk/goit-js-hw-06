const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredients = document.querySelector('#ingredients')

 let markupIngredients = ingredients.map(ingredient => {
 let liIngredients = document.createElement('li')
liIngredients.textContent = (ingredient)
liIngredients.classList.add('item')
return liIngredients
})

listIngredients.append(...markupIngredients)
console.log(listIngredients)


