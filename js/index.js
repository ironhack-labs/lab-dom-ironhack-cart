// ITERATION 1

function updateSubtotal(product){
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  const priceSubtotal = price.innerHTML * quantity.value;
  
  subtotal.innerHTML = priceSubtotal;
  return priceSubtotal; 
}

function calculateAll() {
// ITERATION 2
  const products = document.getElementsByClassName('product');
  let value = 0;

  for (let v = 0; v < products.length; v++) {
    updateSubtotal(products[v]);
    value += updateSubtotal(products[v]);
  }

  document.querySelector('#total-value span').innerHTML = value;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
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
