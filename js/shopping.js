let inforCarrito = [];

function contendor(cardinfo) {
  const contentCart = document.getElementById('shoppingCart');
  const divsubpadre = document.createElement('div');
  divsubpadre.setAttribute('class', 'shoppingCart__content clearfix');
  const shoppingCartcontentimg = document.createElement('div');
  shoppingCartcontentimg.setAttribute('class', 'shoppingCart__content--img');
  const img = document.createElement('img');
  img.setAttribute('src', `img/${cardinfo .id}.png`);
  img.setAttribute('alt', `${cardinfo.name}`);
  const shoppingCartcontenttitle = document.createElement('div');
  shoppingCartcontenttitle.setAttribute('class', 'shoppingCart__content--title');
  const parrafo = document.createElement('p');
  parrafo.innerHTML = `${cardinfo.name}`;
  const shoppingCartcontentinfo = document.createElement('div');
  shoppingCartcontentinfo.setAttribute('class', 'shoppingCart__content--info');
  const parrafoinfo = document.createElement('p');
  parrafoinfo.setAttribute('class','info--amount');
  parrafoinfo.innerHTML = '1';
  const parrafocost = document.createElement('p');
  parrafocost.setAttribute('class','info--cost');
  parrafocost.innerHTML = `${cardinfo.priceProduct}`;
  const boton = document.createElement('button');
  boton.setAttribute('id', `delete-${cardinfo.id}`);
  boton.setAttribute('class','info--button');
  boton.dataset.taskId = cardinfo.id;
  boton.innerHTML = 'X';

  shoppingCartcontentimg.appendChild(img);
  divsubpadre.appendChild(shoppingCartcontentimg);
  shoppingCartcontenttitle.appendChild(parrafo);
  divsubpadre.appendChild(shoppingCartcontenttitle);
  shoppingCartcontentinfo.appendChild(parrafoinfo);
  shoppingCartcontentinfo.appendChild(parrafocost);
  shoppingCartcontentinfo.appendChild(boton);
  divsubpadre.appendChild(shoppingCartcontentinfo);
  contentCart.appendChild(divsubpadre);
  boton.addEventListener('click', (event) => {
    const taskId = event.currentTarget.dataset.taskId;
    event.currentTarget.parentNode.parentNode.remove();
  });
}

fetch("https://604fd24fc20143001744dd3e.mockapi.io/Products")
  .then((response) => response.json())
  .then((data) => {
    inforCarrito = data;
    const contentCart = document.getElementById('shoppingCart');
    contentCart.innerHTML = '';
    for (let i = 0; i < inforCarrito.length; i += 1) {
      contendor(inforCarrito[i], i);
    }
  });

