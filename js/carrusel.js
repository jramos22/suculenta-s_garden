const carrusel = document.querySelector('#carrusel');
const carruselSection = document.querySelectorAll('.carrusel--section');
const carruselSectionLast = carruselSection[carruselSection.length - 1];
const btnBack = document.querySelector('.arrowBack');
const btnGo = document.querySelector('.arrowGo');

carrusel.insertAdjacentElement('afterbegin', carruselSectionLast);

function moveright() {
  const carruselSectionFirst = document.querySelector('.carrusel--section');
  carrusel.style.marginLeft = '-200%';
  carrusel.style.transition = 'all 0.5s';
  setTimeout(() => {
    carrusel.style.transition = 'none';
    carrusel.insertAdjacentElement('beforeend', carruselSectionFirst);
    carrusel.style.marginLeft = '-100%';
  }, 500);
}

function moveleft() {
  const carruselSection1 = document.querySelector('.carrusel--section');
  const carruselSectionLast1 = carruselSection1[carruselSection1.length - 1];
  carrusel.style.marginLeft = '0%';
  carrusel.style.transition = 'all 0.5s';
  setTimeout(() => {
    carrusel.style.transition = 'none';
    carrusel.insertAdjacentElement('afterbegin', carruselSectionLast1);
    carrusel.style.marginLeft = '-100%';
  }, 500);
}

btnGo.addEventListener('click', moveright);

btnBack.addEventListener('click', moveleft);
