
let button = document.getElementById('btnCalcule') // Boton verde
button.addEventListener('click', priceCalculator); //usamos el método .addEvenListener para que cuando haga click en el botón verde se ejecute la function prideCalculator

let deleteButtons = document.querySelectorAll('.btn-delete'); // Llamamos a todos los botones DELETE
for(let i=0; i< deleteButtons.length; i++) {
  deleteButtons[i].addEventListener('click', deleteItem);
}

//BORRADO DE PRODUCTOS 
function deleteItem(e) {
  let fila = e.currentTarget.parentNode.parentNode;
  let objeto = fila.parentNode;
  objeto.removeChild(fila);

  console.log (e)
}


//CALCULAR PRECIO DE CADA PRODUCTO Y TOTAL DE LA COMPRA

function priceCalculator() {
  const products = document.querySelectorAll('div.sale'); // product es la NodeList que se muestra en consola, donde están los div de cada producto
  console.log(products);

  let totalCart = 0;  // variable donde almacenamos el sumatorio total de todos los productos

  for (i = 0; i < products.length; i++) {
    let uniqueProduct = products[i];
    let price = uniqueProduct.children[1].innerText;
    let quantity = uniqueProduct.children[2].childNodes[3].value;
    let totalPrice = price * quantity;

    uniqueProduct.children[3].childNodes[0].innerHTML = `$ ${totalPrice}`
    totalCart += totalPrice
  }
  let totalPriceShowed = document.getElementById('totalCart')

  totalPriceShowed.innerHTML = totalCart
}




