// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerHTML;
  const quantity = document.querySelector('.quantity input').value;
  let subtotal = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  
  let total = 0;
  const allProducts = document.getElementsByClassName('product');

  for (let product of allProducts) {
    product =+ updateSubtotal(product); 
  }

  document.querySelector('#total-value span').innerHTML = total;

  return total;
}

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


// ITERATION 4

/* function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
} */

// ITERATION 5

/* function createProduct() {
  //... your code goes here
} */

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
