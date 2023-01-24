// ITERATION 1

function updateSubtotal(product) {
  const priceValue = product.querySelector('.price span').innerText;
  const quantityValue = product.querySelector('.quantity input').value;
  const subtotalEl = product.querySelector('.subtotal span');

  const subtotalValue = priceValue * quantityValue;
  
  subtotalEl.innerText = subtotalValue;

  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(product => {
    updateSubtotal(product)
  })

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
