// ITERATION 1

function updateSubtotal(product) {
  // .innerHTML fue añadido para conseguir el número
  let price = product.querySelector('.price span').innerHTML; 
  // .value consigue el valor dentro de input - value
  let quantity = product.querySelector('.quantity input').value; 
/*
Anteriormente he intentado con lo siguiente pero regresa un Nan:
let subtotal = price.innerHTML * quantity; 
*/
let subtotal = price * quantity;

// El uso del toFixed para conseguir dos números después del decimal
product.querySelector('.subtotal span').innerHTML = subtotal.toFixed(2)

return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
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
