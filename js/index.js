// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
const price = product.querySelector('.price span').innerHTML
let quantity = product.querySelector('.quantity input').value
let subPrice = price*quantity
product.querySelector('.subtotal span').innerHTML = subPrice
return subPrice
}

function calculateAll() {
  
 const singleProduct = document.getElementsByClassName('product');
 for (i=0; i<singleProduct.length; i++)
  updateSubtotal(singleProduct[i]); 
 
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
