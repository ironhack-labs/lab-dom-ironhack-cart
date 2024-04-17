// ITERATION 1

function updateSubtotal(product, priceElement, quantityElement) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
 const price = parseFloat(priceElement.textContent);
 const quantity = parseInt(quantityElement.value);

  const subtotal = price * quantity;

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.textContent = '$' + subtotal.toFixed(2);

  return subtotal;  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productRows = document.getElementsByClassName('product');
  let total = 0;
  for (let i = 0; i < productRows.length; i++) {
    const priceElement = productRows[i].querySelector('.price span');
    const quantityElement = productRows[i].querySelector('.quantity input');
  
    const subtotal = updateSubtotal(productRows[i], priceElement, quantityElement);
    total += subtotal;
  }

  // ITERATION 3
  //... your code goes here
  document.getElementById('total-value').textContent = 'Total: $' + total.toFixed(2);
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
