// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Step 1 Create two variables
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  // Step 2 extracting the specific values from variables
  console.log(price.innerText);
  console.log(quantity.value);

  // Step 3 Calculate the subtotal price
  const subtotalPrice = (Number(price.innerText) * quantity.value)
  console.log(subtotalPrice);

  // Step 4 Get DOM element that should hold the subtotal
  const subtotal = product.querySelector('.subtotal span')
  console.log(subtotal.innerText);
  
  // Step 5 Set the subtotal price to the corresponding DOM element
  subtotal.innerText = subtotalPrice;
    
}

function calculateAll() {
  
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

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
