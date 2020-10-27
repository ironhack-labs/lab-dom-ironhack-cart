// ITERATION 1
console.log(document.querySelector('.product'));
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // creating 2 variables for the multiplication, accessing the concerning contents
  const price = product.querySelector('.price span').innerHTML;
  console.log(price)
  let quantity = product.querySelector('.quantity input').value;
  console.log(quantity)
  // Calculate the subtotal
  let priceSubtotal = price * quantity;
  console.log(priceSubtotal)
  // Find the place where subtotal is stored and update it
  product.querySelector('.subtotal span').innerHTML = priceSubtotal;
  console.log("subtotal is right now "+ subtotal)
// return subtotal for further usage of this function
  return priceSubtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2


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
