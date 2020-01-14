var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
// function to calculate subtotal - $product stands for the entire table row element in the html:
function updateSubtot($product) {
  // Iteration 1.1
  // quantity of selected product:
  let quantity = $product.querySelector('.qty > label > input').value;
  // unit price of selected product:
  let unitPrice = $product.querySelector('.pu span').innerHTML;
  // total price of selected product:
  let total = quantity * parseInt(unitPrice);
  // display the subtotal price of the selected product:
  $product.querySelector('.subtot span').innerHTML = total;
  // console.log(total);
  return total;
}
function calcAll() {
  // total price of all selected products with onclick:
  let grandTotal = 0;
  // Iteration 1.2
  // loop through each table row product to check the subtotal and add it to the grand total:
  document.querySelectorAll('.product').forEach(function(product) {
    // console.log(product);
    grandTotal += updateSubtot(product);
  });
  // display the grand total for all the selected products:
  document.querySelector('h2 > span').innerText = grandTotal;
  // console.log(grandTotal);
}
// click event connected to the function to calculate everything:
$calc.onclick = calcAll;
