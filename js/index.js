// ITERATION 1


function updateSubtotal(product) {
const price = product.querySelector('.price span').innerHTML;
const quantity = product.querySelector('.quantity')
const quantityValue= quantity.querySelector('input').value;
const subtotal = price * quantityValue;
const subtotalField = product.querySelector('.subtotal span');
subtotalField.innerHTML = subtotal;
return subtotal;
}

function calculateAll() {
let totalValue = document.querySelector('#total-value span')
const productToPass = document.getElementsByClassName('product');
let sumOfSubtotals = 0;
for (let i = 0; i < productToPass.length; i++) {
sumOfSubtotals += updateSubtotal(productToPass[i])
totalValue.innerHTML = sumOfSubtotals;

console.log(totalValue)
}

 /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(event.currentTarget)
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelector('.btn-remove');
  for (button of removeBtn) {
    button.addEventListener('click', removeProduct)
  }

  //... your code goes here
});
