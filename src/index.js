// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')//.innerHTML;
  const quantity = product.querySelector('.quantity input')//.value;

 // const price1 = price.innerHTML;
  let subTotalPrice = price.innerHTML * quantity.value;
  let subtotal = product.querySelector('.subtotal span');
  //subTotalPrice.innerHTML = subtotal;
  return subtotal.innerHTML=subTotalPrice;
  };
  
function calculateAll() {
 /*// code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test */

  // ITERATION 2
let fullPrice = document.getElementsByClassName('product');
let total = 0;
for (let i = 0; i < fullPrice.length; i++) {
  total += updateSubtotal(fullPrice[i]); 
}

  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove() 
 
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removedProduct = document.querySelectorAll(“.btn-remove”);
  removedProduct.forEach(product => product.addEventListener(‘click’, removeProduct));
});


