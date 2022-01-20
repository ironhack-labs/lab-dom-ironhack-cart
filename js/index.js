// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span ');
 
  const priceValue = price.innerText;

  console.log(priceValue);

  const quantity = product.querySelector('.quantity input');
 

  const quantityValue = quantity.value;
   console.log(quantity);
   console.log(quantityValue);

  const subtotal = parseFloat(priceValue) * parseInt(quantityValue);


  let subtotalSpan = product.querySelector('.subtotal span');

  subtotalSpan.innerHTML = subtotal.toFixed(2);
  
  return subtotal;

} 




function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName(tr.product);
let total = 0;
 for (let product of allProducts) {
  let subtotal = updateSubtotal(product);
  total += subtotal;
 }



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
