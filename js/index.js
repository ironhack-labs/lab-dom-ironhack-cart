// ITERATION 1
let totalPrice = 0
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
   subtotal.innerHTML = price * quantity;
   totalPrice += price * quantity
  
 return subtotal
  
  //... your code goes here
}

function calculateAll() {
  totalPrice = 0;
  const singleProduct = document.getElementsByClassName('product');
  for (let i = 0; i < singleProduct.length; i++){
   updateSubtotal(singleProduct[i])
  }
  const total = document.getElementById('total-value').querySelector('span')
  total.innerHTML = totalPrice
}


function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
 


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
