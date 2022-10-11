// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  let newPrice = price.innerHTML;
  let newQuantity = quantity.value;
  
  let calculate = newPrice * newQuantity;
  let subtotal =  product.querySelector('.subtotal span');
  
    subtotal.innerHTML = calculate;     
    return calculate;
  
  }
  
function calculateAll() {
let total = 0;
let allProducts = document.getElementsByClassName('product');
for (let i=0; i<allProducts.length; i++){
  total += updateSubtotal(allProducts[i]);
}

total.innerHTML = document.querySelector('#total-value');

  // ITERATION 3

  let calculatePrices = document.querySelector('#total-value span');
  calculatePrices.innerHTML = total  ;
  
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