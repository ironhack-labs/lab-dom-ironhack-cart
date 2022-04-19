// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.product input');

  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;

  const subtotalValue = priceValue * quantityValue;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalValue;

  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  let products = document.querySelectorAll('.product');
  let totalAmount = 0;
  products.forEach((product) => {
    totalAmount += updateSubtotal(product);
  });
  // ITERATION 3
  
  let totalValue = document.querySelector('#total-value span');
  
  totalValue.innerHTML = totalAmount

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  let createProductButton = document.getElementById('create');
  createProductButton.onclick = () => {
   
  }

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
