// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;

  //console.log(price)
  //console.log(quantity)

  let subtotal = price * quantity;
  //console.log(subtotal)
  product.querySelector('.subtotal span').innerHTML = subtotal;
  

  return subtotal;
  //console.log('Calculating subtotal, yey!');
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  let total = 0;

  let subtotal = document.querySelectorAll('.product')
  
  for (singleProduct of subtotal) total += updateSubtotal(singleProduct)
  
  // ITERATION 2
  //... your code goes here
  console.log(total)
  
  document.querySelector('h2 span').innerText = total;

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
