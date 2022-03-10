const carrito = document.querySelectorAll('a')[9];
const cierre = document.querySelectorAll('a')[3];

function openNave() {
  document.getElementById('drawer--js').style.width = '1000px';
}

function closeNave() {
  document.getElementById('drawer--js').style.width = '0';
}

carrito.addEventListener('click', (e) => {
  e.preventDefault();
  openNave();
});
console.log(cierre);

cierre.addEventListener('click', (e) => {
  e.preventDefault();
  closeNave();
});
