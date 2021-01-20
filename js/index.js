'use strict'
// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");
  let priceValue = price.innerHTML;
  let quantityValue = quantity.value;
  let subtotalPrice = priceValue * quantityValue;
  let subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;
}


  // ITERATION 2 & 3
function calculateAll() {
  const productsAvailable = [...document.getElementsByClassName("product")];
  let subtotalsArray = [];
  productsAvailable.forEach(function(element){
    subtotalsArray.push(updateSubtotal(element));    
  })
  let totalSum = document.querySelector("#total-value span");
  totalSum.innerHTML = subtotalsArray[0] + subtotalsArray[1];
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
