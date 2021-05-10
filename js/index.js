// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;

  let operation = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = operation;

  return operation;
}



// ITERATION 2 AND 3

function calculateAll() {

  const allProducts = document.querySelectorAll('.product');
  let result = 0;

  allProducts.forEach((product) => {
    result += updateSubtotal(product);
  });

  document.getElementById('total-value').innerHTML = 'Total: $' + result;
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
