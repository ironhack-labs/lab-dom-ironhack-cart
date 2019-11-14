var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

// The updateSubtot function will calculate the subtotal for a given product.

// Complete the updateSubtot function that :

// have 1 parameter: the tr element of the product (we can call it $product)
// calculates the subtotal price, from :
// the unit price HTML element of the product
// the quantity HTML element of the product
// updates the HTML with the new product's subtotal
// returns the subtotal value
let subtot = document.querySelector('.subtot span:first-child');
let price = document.querySelector('.pu span:first-child');
// let qty = document.querySelector('.qty input:first-child');
let qty = document.getElementsByTagName('input')[0]; // or leave it as it is, outside
// let totalItems = qty.value;
// console.log(totalItems);
qty.onclick = updateSubtot;
// qty.onclick = function() {
//   console.log(qty.value);
//   // input.value = '';
// };

function updateSubtot($product) {
  // Iteration 1.1
  console.log($product);
  // let productId = $product.target.id;

  if ($product.target === qty) {
    subtot.innerHTML = price.innerHTML * qty.value;
    // console.log('hell');
  }
}

// function calcAll() {
//   // Iteration 1.2
// }
// $calc.onclick = calcAll;
