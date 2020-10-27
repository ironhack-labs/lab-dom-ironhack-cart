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
  console.log("subtotal is right now "+ priceSubtotal)
// return subtotal for further usage of this function
  return priceSubtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test
// call updateSubtotal on every item
  // ITERATION 2
  let priceTotal = 0;
let allProducts = document.getElementsByClassName('product');
console.log(allProducts)
// add up all the subtotals
for (let i=0; i<allProducts.length; i++) {
  priceTotal += updateSubtotal(allProducts[i]);
console.log(priceTotal)
}

  // ITERATION 3
  // Set the total priceTotal
  document.querySelector('h2 span').innerHTML = priceTotal;
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
