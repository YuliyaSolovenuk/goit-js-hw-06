const listCategories = document.querySelector('#categories');
//1
const totalItem = listCategories.querySelectorAll('.item').length;
console.log(`Number of categories: ${totalItem}`);
//2
const ItemsCategory = listCategories.querySelectorAll('.item')

ItemsCategory.forEach((element) => {
    console.log(`Category: ${element.querySelector('h2').textContent}`)
    
    console.log(`Elements: ${element.querySelectorAll('li').length}`)
});
