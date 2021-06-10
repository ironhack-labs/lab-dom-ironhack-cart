// ITERATION 1

function updateSubtotal(product) {
  console.log(product)
  const price = product.querySelector('.price span');
  console.log('Calculating subtotal, yey!');
  const quantity = product.querySelector('.quantity input');
  console.log(price.innerHTML);
  console.log(quantity.value);
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = quantity.value * price.innerHTML
  return subtotal.innerHTML
  //... your code goes here
}

// ITERATION 2  // ITERATION 3
  //... your code goes here
function calculateAll() {
  let total = 0
  const products = document.querySelectorAll('.product');
  products.forEach(oneProduct => {
    total += parseFloat(updateSubtotal(oneProduct));
  });
  
  const finalTotal =document.querySelector('#total-value span')
  finalTotal.innerHTML = total


  // end of test

 
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
