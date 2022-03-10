const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const lightContainer = document.querySelector('.imagen-light')
const btnHamburge2 = document.querySelector('.hamburger')

imagenes.forEach(imagen => {
  imagen.addEventListener('click', () => {
    showImage(imagen.getAttribute('src'))
  })
})

lightContainer.addEventListener('click', (e) => {
  if (e.target != imagenesLight) {
    lightContainer.classList.toggle('show')
    imagenesLight.classList.toggle('show-image')
    btnHamburge2.style.opacity = '1'
  }
})

const showImage = (imagen) => {
  imagenesLight.src = imagen
  lightContainer.classList.toggle('show')
  imagenesLight.classList.toggle('show-image')
  btnHamburge2.style.opacity = '0'
}