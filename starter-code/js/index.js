var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $products = document.querySelectorAll(".product");
var $deleteButton = document.querySelector(".btn.btn-delete");


// Iteration 1.1

function updateSubtot($product) { // $product = tr (row) element of product
  //unit price * quantity price
  var priceUnit = $product.querySelector(".pu span").textContent;
  var quantity = $product.querySelector(".qty input").value;
  var subtotal = priceUnit * quantity;

  $product.querySelector(".subtot span").textContent = subtotal;

  return subtotal; // subtotal is a number
}

//**********************************************************************

// Iteration 1.2 + 2 + 3

function calcAll() {
  var total = 0;
  $products.forEach($product => {
    updateSubtot($product);
    total += Number($product.querySelector(".subtot span").textContent);
  });
  document.querySelector(".total span").textContent = total;
}
$calc.onclick = calcAll; // calcAll is called ONLY when .calc (=Calculate prices button) is clicked

//**********************************************************************

// Iteration 4

// function deleteProduct() {
//   $products.forEach($product => {

//   });
// }

// $deleteButton.onclick = deleteProduct;