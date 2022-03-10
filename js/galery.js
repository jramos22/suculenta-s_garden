const mini = document.querySelectorAll('.miniatura');
const bigImage = document.getElementById('big-image');

// Funcion principal de la Galeria
for (let i = 0; i < mini.length; i += 1) {
  mini[i].addEventListener('click', (event) => {
    event.preventDefault();
    const url = event.currentTarget.getAttribute('src');
    bigImage.src = `${url}`;
  });
}
