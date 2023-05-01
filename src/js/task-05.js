const textInput =document.querySelector('#name-input')

const nameOutput = document.querySelector('#name-output')

textInput.addEventListener('input', (e) => {
  
  if( e.currentTarget.value !==""){
nameOutput.textContent = e.currentTarget.value;
  }else{
   document.querySelector('#name-output').textContent = "Anonymous"}
})
