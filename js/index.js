// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  console.log(subtotal);
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let subtotals = 0;
  products.forEach((product) => {
    console.log(product)
    subtotals += updateSubtotal(product);
  });
  const result = document.querySelector('#total-value span');
  result.innerText = subtotals.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  window.addEventListener('Remove', () => {
    const calculatePricesBtn = document.getElementById('remove');
    calculatePricesBtn.addEventListener('click', calculateAll);
  
    //... your code goes here
  });
  
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
