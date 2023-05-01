const fontSizeControl = document.querySelector('#font-size-control')
console.log(fontSizeControl)

let text = document.querySelector('#text')

fontSizeControl.addEventListener('input', (e) => {
    let number = fontSizeControl.value
    console.log(number)
    
    text.style.fontSize = number + "px"
   
})