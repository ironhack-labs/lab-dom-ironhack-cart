// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = parseFloat(product.querySelector('.price span').innerText);

  const quantity = product.querySelector('.quantity input').valueAsNumber;

  let subtotalPrice = price * quantity;

  const subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.innerText = subtotalPrice;
  
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  
  
  // ITERATION 2
 const products = document.querySelectorAll('.product');
 let sum = 0;
 for (let i = 0; i < products.length; i++){
  sum += updateSubtotal(products[i]);
 };

  // ITERATION 3
let count = document.querySelector('#total-value span');
let total = count.innerHTML
count.innerHTML = sum;
return total;
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
