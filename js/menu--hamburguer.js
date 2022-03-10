/*-----------Menu-----------*/
var menu = document.querySelector('.hamburger');

//method
function toggleMenu (event) {
  this.classList.toggle('menu--active');
  document.querySelector( ".menu" ).classList.toggle("menu--active");
  event.preventDefault();
}

//event
menu.addEventListener('click', toggleMenu, false);
