const body = document.body

const changeColorBtn = document.querySelector('.change-color')

changeColorBtn.addEventListener('click', (ev) => {
  body.style.backgroundColor = getRandomHexColor()
  const color = document.querySelector('.color')
  color.textContent = getRandomHexColor()
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
