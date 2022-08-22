// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;

  const subtotalValue = priceValue * quantityValue;

  const subTotal = product.querySelector('.subtotal span');

  subTotal.innerText = subtotalValue;

  // Return subtotal value so it can be used later
  return subtotalValue;//... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');

  // Declare an auxiliary variable that will hold the sum of each product subtotal
  let totalValue = 0;

  // Iterate through the product nodes,
  // call update subtotal on it and add the subtotal to the total value
  for (let product of products) {
    totalValue += updateSubtotal(product);
  }//... your code goes here

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = totalValue;//... your code goes here
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
