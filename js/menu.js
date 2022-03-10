const btnHamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu-navegacion')

btnHamburger.addEventListener('click', () =>{
  menu.classList.toggle('spread')
})

window.addEventListener('click', (e) =>{
  if(menu.classList.contains('spread') && e.target != menu && e.target != btnHamburger){
    menu.classList.toggle('spread')
  }
})