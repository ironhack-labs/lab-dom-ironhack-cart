// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = price.innerHTML * quantity

  return parseFloat(subtotal.innerHTML);

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  const multipleProducts = document.getElementsByClassName('product')
  let totalPrices = 0
  for (let i = 0; i < multipleProducts.length; i++) {
    let unitPrices = updateSubtotal(multipleProducts[i])
    totalPrices += unitPrices;
  }

  // ITERATION 2
  //... your code goes here

  const total = document.querySelector('#total-value span');

  total.innerHTML = totalPrices

  console.log(totalPrices);
}
// ITERATION 3
//... your code goes here

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const btn = document.getElementById('create')
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
