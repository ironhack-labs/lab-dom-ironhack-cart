// ITERATION 1



function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const multipication = price.textContent * quantity.value
  const subtotal = product.querySelector('.subtotal span')
  subtotal.textContent = multipication

  return multipication

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.


  // end of test

  // ITERATION 2
  //... your code goes here
  const array = document.querySelectorAll('.product')
  const total = document.querySelector('#total-value span')
  let sumTotal = 0
  for (let i = 0; i < array.length; i++) {
    sumTotal += updateSubtotal(array[i])
  }

  total.textContent = sumTotal


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
