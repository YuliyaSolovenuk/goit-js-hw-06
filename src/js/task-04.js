let counterValue = Number(document.querySelector('#value').textContent);

console.log(counterValue)

let btnDecrement = document.querySelector('[data-action="decrement"]')

btnDecrement.addEventListener('click', (e) => { counterValue -= 1
   
   return document.querySelector('#value').textContent= counterValue
})


let btnIncrement = document.querySelector('[data-action="increment"]')

btnIncrement.addEventListener('click', (e) => { counterValue += 1

 return document.querySelector('#value').textContent= counterValue
})
