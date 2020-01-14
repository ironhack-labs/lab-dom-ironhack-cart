var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $delete = document.querySelector('.btn.btn-delete');
var $add = document.querySelector('.new');
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

function deleteProduct() {
  const entireProduct = document.querySelector('.product');
  const allProducts = document.querySelector('#cart tbody');
  allProducts.removeChild(entireProduct);
}
$delete.onclick = deleteProduct;

function addProduct() {
  const allProducts = document.querySelector('#cart tbody');
  const newProduct = document.createElement('.product');
  allProducts.appendChild(newProduct);
}
$add.onclick = addProduct;

// function deleteProduct() {
//   document.querySelector('.product').forEach(function(product) {
//     const allProducts = document.querySelector('#cart tbody');
//     allProducts.removeChild(product);
//   });
// }
// $delete.onclick = deleteProduct;
