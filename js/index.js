// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  let subtotal = quantity.value * price.innerHTML;

  let subtotalTag = product.querySelector('.subtotal span');
  subtotalTag.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('product');

  let totalValue = 0;

  for (let i of products) {
    totalValue += updateSubtotal(i);
  }

  // this for above could be
  // for (let i = 0; i < products.length; i++)

  let allTotal = (document.querySelector('#total-value span').innerHTML =
    totalValue); // <- updates the total value for the user
  allTotal.innerHTML = totalValue;
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