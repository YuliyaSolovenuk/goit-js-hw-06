const input = document.querySelector('[type="number"]')

const btnCreate = document.querySelector('[data-create]')

const btnDestroy = document.querySelector('[data-destroy]')

const boxes = document.querySelector('#boxes')



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
    }

    boxes.append(...arrDiv)
}
 

function destroyBoxes() {
    boxes.innerHTML = ''
    input.value = ''
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
