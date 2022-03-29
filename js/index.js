// ITERATION 1
//receivesL: two variables(price & quantity), 
//then GET DOM elements holding price & quantity.
// extract values from product & quantity.
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
//  console.log(price, typeof price)
  const quantity = product.querySelector('.quantity input').value;
//  console.log(quantity, typeof quantity)

 const subtotalPrice = Number(price) * Number(quantity);

// console.log(subtotalPrice, typeof subtotalPrice)

 product.querySelector('.subtotal span').innerText = subtotalPrice;

return subtotalPrice; 
 //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //  const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
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
