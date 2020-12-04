// BOTH CODE WORKING

/* // ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
 
  let valuePrice = price.innerHTML;
  let valueQuantity = quantity.value;

  let subTotalValue = Number((valueQuantity * valuePrice).toFixed(2));
  let calcSubTotal = product.querySelector('.subtotal span');
  calcSubTotal.innerHTML = subTotalValue

  return subTotalValue
}

function calculateAll() {
  window.alert('Calculate prices button clicked!')
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
   const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); 
  //m,e crea un array de todos los elementos de la clase product e itero ocn el foreach
  //it 1
  let total = 0;
  const products = document.querySelectorAll('.product')   
  products.forEach(currentProduct => {
    const subtotal = updateSubtotal(currentProduct)
    total = total + subtotal
  });
  //it2
  let totalSpan = document.querySelector('#total-value span');
  totalSpan.innerHTML = total.toFixed(2);
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
}); */

 
 // ITERATION 1
function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span')
  const subtotResult = (price * quantity).toFixed(2);
  subtotal.innerHTML = subtotResult; 
  return subtotal;
}
function calculateAll() {
// ITERATION 2 + ITERATION 3
  let total = 0
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++){
    updateSubtotal (products[i]);  
    total += Number(products[i].querySelector('.subtotal span').innerHTML);
    totalFixed = total.toFixed(2);
 }
  document.querySelector('#total-value span').innerHTML = totalFixed
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