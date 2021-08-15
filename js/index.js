function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let subTotal = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subTotal;

  return subTotal;
}

function calculateAll() {
  const eachProduct = document.querySelectorAll('.product');

  let storeTotal = 0;

  for (let i = 0; i < eachProduct.length; i++) {
    storeTotal += updateSubtotal(eachProduct[i]);
  }
  document.querySelector('#total-value>span').innerHTML = storeTotal;
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
