// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const total = price.innerText * quantity.value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = total;
  return total;
}

function calculateAll() {

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  [...products].forEach(element => updateSubtotal(element));
  

  // ITERATION 3
  
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
