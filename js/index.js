// ITERATION 1


function updateSubtotal(product) {
  console.log('Calculating Prices, clicked!');
  let getPrice = product.querySelector('.price span').innerHTML;
  let getQuantity = document.querySelector('quantity').innerHTML;
  let calculatedSubtotal = getPrice * getQuantity;
  let getSubtotal = product.querySelector('.subtotal').getAttribute('span');
  getSubtotal.setAttribute('span',calculatedSubtotal);

updateSubtotal();
}


//function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');

  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //Obtener los nodos para cada fila de producto
  //Añadir new product al index.html
  //Duplicar la tr con la clase product
  //Renombrar el product dentro
  //Cambiar el precio

let getProducts = getElementsByClassName('product');
let newProduct = document.createElement("product");
newProduct.setAttribute("")




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
