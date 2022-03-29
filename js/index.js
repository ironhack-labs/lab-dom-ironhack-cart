// ITERATION 1


function updateSubtotal(product) {
 // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  return subtotal.innerHTML = subtotalPrice
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const productsRow = document.getElementsByClassName('product');
  let totalPrice = 0;
  for (let product of productsRow) {
    updateSubtotal(product);
  }
  
  // ITERATION 3
  //... your code goes here
  for (let prod of productsRow) {
    totalPrice += Number(prod.querySelector('.subtotal span').innerHTML);
  }
  //return totalPrice;
  document.querySelector('#total-value span').innerHTML = totalPrice;
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
