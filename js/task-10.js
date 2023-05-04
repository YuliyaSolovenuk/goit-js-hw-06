const input = document.querySelector('[type="number"]')
console.log(input)

const btnCreate = document.querySelector('[data-create]')
console.log(btnCreate)

const btnDestroy = document.querySelector('[data-destroy]')
console.log(btnDestroy)

const boxes = document.querySelector('#boxes')
console.log(boxes)



btnCreate.addEventListener('click', onClickCreateBtn => {
let amount = Number(input.value)
createBoxes(amount)
})

btnDestroy.addEventListener('click', onClickDectroyBtn => destroyBoxes())



function createBoxes(amount) {
    console.log(amount)
    boxes.innerHTML = ''
   let arrDiv = [];

    for(let i=0; i < amount; i+=1){
        const box = document.createElement('div')
        const size = 30 + 10 * i 

        box.style.width = size + 'px'
        box.style.height = size + 'px'
        box.style.backgroundColor = getRandomHexColor()

        arrDiv.push(box)
        console.log(i, arrDiv)
    }

    boxes.append(...arrDiv)
    console.log(boxes)

}
 

function destroyBoxes() {
    boxes.innerHTML = ''
    input.value = ''
    console.log(boxes)
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
