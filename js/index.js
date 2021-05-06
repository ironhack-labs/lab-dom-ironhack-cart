// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').textContent;
  let quantityTag = product.querySelector('input');
  let quantity = quantityTag.value;
  let subtotal = quantity * price;
  let subtotalItem = product.querySelector('.subtotal span');
  subtotalItem.innerHTML = subtotal;
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let productsList = document.getElementsByClassName('product')
  let total = 0
  for (let i = 0; i < productsList.length; i++) {

    // ITERATION 3
    total += updateSubtotal(productsList[i])
  }
  let totalItem = document.querySelector('#total-value span');
  totalItem.textContent = total
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
