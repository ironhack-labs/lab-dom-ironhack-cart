// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  let priceValue = price.innerHTML; 
  let quantityValue = product.querySelector('.quantity input').value;
  let subtotalValue = priceValue * quantityValue;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalValue;
  return subtotalValue;

}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  let products = document.getElementsByClassName('.product')
  for (let p = 0; p < products.lentgth; p++){
  updateSubtotal(products[p]);
  }
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
