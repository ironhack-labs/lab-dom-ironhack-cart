// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
 // const subtotal = product.querySelector('.subtotal span').textContent;
  let subtotalResult = Number(price) * Number(quantity);

  product.querySelector('.subtotal span').textContent = subtotalResult;
  return subtotalResult;
}

function calculateAll() {

  // ITERATION 2
  let result = 0;
  const products = document.querySelectorAll('.product');

  for (let product of products) {
    result += updateSubtotal(product);
  }
  
 
  
  
  // ITERATION 3
  document.querySelector('#total-value span').textContent = result;
  
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
