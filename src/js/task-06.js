const textInput = document.querySelector('#validation-input')

const quantitySymbols = Number(textInput.getAttribute("data-length"))

  
  textInput.addEventListener("blur", (event) => {
    if(textInput.value.length !== quantitySymbols) {
      textInput.classList.add("invalid") 
  } else{
    textInput.classList.remove("invalid")

  textInput.classList.add("valid")
  }
  });