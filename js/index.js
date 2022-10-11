// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const newPrice =price.innerHTML
  const newQuantity =quantity.value
  let calculate= newPrice*newQuantity

  let subTotal = product.querySelector('.subtotal span');

  subTotal.innerText= calculate
  return calculate
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 /*  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */

  // end of test

  // ITERATION 2
  let sum = 0;
  let multipleProducts = document.getElementsByClassName('product');

  for(let i=0; i < multipleProducts.length; i++){
    sum += updateSubtotal(multipleProducts[i])
  }

  
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
   target.parentNode.parentNode.remove()
   calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn-remove');
  for(let i=0; i<removeButtons.length; i++){
    removeButtons[i].addEventListener('click', removeProduct)
  }

  //... your code goes here
});











