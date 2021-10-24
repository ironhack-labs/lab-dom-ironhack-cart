// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;//declaro price product es la clase del tr,.queryselector lo coge del html, entro en la clase .price de la etiqueta
  //span y traigo el valor que hay entre esta ultima etiqeuta
  const quantity = product.querySelector('.quantity input').value;//declaro quantity entro en la clase product .querySelexctor lo coge del html,.quantity y accedo al value que es lo que quiero cambiar con .value, entro con .algo
  //como los objetos

  const subtotal = price * quantity//creo una variable subtotal price * quantity
  
  product.querySelector('.subtotal').innerHTML = '$' + subtotal// de la clase product coge lo escrito con el queryselector de la clase .subtotal que me dara los $ que elo pongo como un string y el subtotal que es el precio de la cantidad por el numero del producto que elijamos

  return subtotal//devuelve subtotal
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singlePGITCLroduct = document.querySelector('.product');
  updateSubtotal(product);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});



