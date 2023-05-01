const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(ev){
 ev.preventDefault()
const inputEmail = ev.currentTarget.elements.email
const inputPassword = ev.currentTarget.elements.password
if(inputEmail.value === ""|| inputPassword.value === ""){
    alert('Попередження! Всі поля повинні бути заповнені!')
}else{
    const email = inputEmail.value
    const password = inputPassword.value
    const formData = {
        email,
        password
    }

    console.log(formData)
    ev.currentTarget.reset();
}
}


//  const formData = new FormData(ev.currentTarget)
 
//  formData.forEach((value, name) => {
//     console.log(name, value)})



