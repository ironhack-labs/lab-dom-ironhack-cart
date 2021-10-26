// ITERATION 1
function updateSubtotal(product) {
  let unitPrice = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotal = Number(unitPrice.innerHTML) * Number(quantity.value);
  let elementSubtotal = product.querySelector('.subtotal span'); //Target subtotal span
  elementSubtotal.innerHTML = subtotal; //Update subtotal span with the actual subtotal
  console.log('Calculating subtotal, yey!');
  return subtotal; //Return to use in calculate all
}

// ITERATION 2
function calculateAll() {
  let total = 0;
  let products = document.getElementsByClassName('product');
  for (let i=0; i<products.length; i++){
    total += updateSubtotal(products[i]);
  }

  // ITERATION 3
  let totalCart = document.querySelector('#total-value span');
  totalCart.innerHTML = total;
  return (total);
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
