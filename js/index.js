// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  //let priceProduct = '';
  const quantity = product.querySelector('.quantity input');
  //let value = '';

  const newPrice = price.innerHTML
  const newQuantity = quantity.value
  
  let totalPrice = newPrice*newQuantity

  let subtotalPrice = product.querySelector('.subtotal span');

  subtotalPrice.innerHTML = totalPrice;

  return totalPrice;
  
  //console.log('Calculating subtotal, yey!');

  
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let allProduct = document.getElementsByClassName('product');
  let totalFinal = 0;
  for (let i=0; i<allProduct.length; i++){
    totalFinal += updateSubtotal(allProduct[i]);
  }

  // ITERATION 3
  const totalSpan = document.querySelector(`#total-value span`);
  totalSpan.innerText = totalFinal;
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
