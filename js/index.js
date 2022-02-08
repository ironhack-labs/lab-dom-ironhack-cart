// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').innerText;

  let quantity = product.querySelector('.quantity input').value;

  let priceNum = parseFloat(price);

  let quantityNum = parseFloat(quantity);

  let subtotalElement = product.querySelector('.subtotal span');
 
  let subtotalPrice = priceNum * quantityNum;

  subtotalElement.innerText = subtotalPrice
  
  return subtotalPrice;
}

  // ITERATION 2
function calculateAll() {
let allProducts = document.getElementsByClassName('product');

let totalPrice = 0;

for (let i = 0; i < allProducts.length; i++){
  totalPrice += updateSubtotal(allProducts[i]);
}

  // ITERATION 3
let totalPriceElement = document.querySelector('#total-value span');

totalPriceElement.innerText = totalPrice;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  let trElement = target.parentNode.parentNode;
  let trElementParent = trElement.parentNode;

  trElementParent.removeChild(trElement);

  calculateAll();
}

// ITERATION 5
function createProduct() {
  //... your code goes here

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButtons = document.getElementsByClassName('btn btn-remove');

  for (let removeButton of removeButtons ){
    removeButton.addEventListener('click', removeProduct);
  }

});