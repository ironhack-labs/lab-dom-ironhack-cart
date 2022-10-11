// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input').value
  const priceValue = price.innerHTML;

  //console.log(priceValue);
  /* const quantityInput = product.querySelector('.quantity input') */
  /* const quantity = quantityInput.value */
  //console.log(quantity);

  let subTotal = product.querySelector('.subtotal span');
  let totalSubtotal = priceValue * quantity;
  subTotal.innerHTML = totalSubtotal;
  return totalSubtotal;
  
}

function calculateAll() {
  
// code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
 

let totalValue = 0;
let totalProducts = document.getElementsByClassName('product');
  for (let i = 0; i < totalProducts.length; i++){
    totalValue += updateSubtotal(totalProducts[i])
  }
  let totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = totalValue;
}
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


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
