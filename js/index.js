// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input').value;
  let priceValue = price.innerText 
  console.log(quantity)
  let subtotal = product.querySelector('.subtotal span');
  let totalSubtotal = priceValue * quantity;
  subtotal.innerHTML = totalSubtotal
  return totalSubtotal;
}

function calculateAll() {
  
  let sum = 0;
  let allProducts = document.getElementsByClassName('product');
  for (let i = 0; i < allProducts.length; i++) {
    sum += updateSubtotal(allProducts[i]);
  }
  let totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = sum;
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
