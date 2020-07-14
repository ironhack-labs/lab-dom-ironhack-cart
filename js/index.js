// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  let priceValue = price.innerHTML;

  const quantity = product.querySelector('input');

  let total = quantity.value * priceValue;

  console.log(total);

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = total;

  return total;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  let total = 0;
  for (let product of products) {
    total += updateSubtotal(product);
  }

  let sum = document.querySelector('#total-value span');
  sum.textContent = total;
  
  
  // end of test





  // ITERATION 2
  //... your code goes here





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
