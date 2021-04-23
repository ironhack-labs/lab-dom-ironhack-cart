// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalPrice = parseFloat(price.textContent) * quantity.value;
  const subtotal = product.querySelector('.subtotal span');

  subtotal.textContent = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');

  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
  }

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
