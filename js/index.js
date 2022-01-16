// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

 
  
  //... your code goes here

  const price = product.querySelector('.price span').innerHTML
 const quantity= product.querySelector('.quantity input').value
 const subtotal = price * quantity;
 product.querySelector('.subtotal span').innerHTML = subtotal;

 return subtotal
 
 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
const allProducts = document.querySelectorAll('.product')
let sum = 0
allProducts.forEach (function (eachProducts){
  updateSubtotal(eachProducts)
  sum += updateSubtotal(eachProducts)
})

  // ITERATION 3
  //... your code goes here
const total = document.querySelector('#total-value span')
  total.innerText = sum }


  
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
