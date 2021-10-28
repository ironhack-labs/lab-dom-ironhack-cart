// ITERATION 1



function updateSubtotal(product) {

  //... your code goes here

  const price = product.querySelector('.price span');
  let thePrice = price.innerText
  const quantity = product.querySelector('.quantity input');
  let theValue = quantity.value;
 // console.log('Calculating subtotal, yey!');
  //console.log(thePrice);
  //console.log(theValue)

  let theTotal= thePrice * theValue; 

  const subtotal=product.querySelector(`.subtotal span`)
  subtotal.innerText = theTotal

  //console.log(theTotal)
}

function calculateAll() { 


  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  
*/
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll(`.product`);
  let hajs = 0;
  allProducts.forEach((product) => {
    hajs += updateSubtotal(product)});


  // ITERATION 3
  //... your code goes here

document.querySelector(`#total-value span`).value = hajs
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
