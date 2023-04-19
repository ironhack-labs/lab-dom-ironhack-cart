// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  
  let total = price.innerHTML * quantity.value;

  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = total;
  return total;
  
}


function calculateAll() {

  let total = 0;
  const products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
updateSubtotal(products[i]);
  }

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
