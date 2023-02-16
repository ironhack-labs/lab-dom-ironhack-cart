window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let totalByProduct = price * quantity;
  product.querySelector('.subtotal span').innerHTML = totalByProduct;
  return totalByProduct;
}

// ITERATION 2 and 3
function calculateAll() {   
  let totalByCart = 0;
  const products = document.querySelectorAll('.product');  
  for (i=0; i<products.length; i++) {
    totalByCart += updateSubtotal(products[i]);
  }
  document.querySelector('#total-value span').innerHTML = totalByCart;
}

// ITERATION 4
/*
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}
*/

// ITERATION 5
/*
function createProduct() {
  //... your code goes here
}

*/

