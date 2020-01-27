var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  /*
  .calculates the subtotal price, from :
    -the unit price HTML element of the product
    -the quantity HTML element of the product
  .updates the HTML with the new product's subtotal
  .returns the subtotal value
  */
  let $price = document.querySelector('.pu span').innerText;
  let $quantity = document.querySelector('.qty input').value;
  let subtotal = $price * $quantity;

  let $subtotal = document.querySelector('.subtot span');
  $subtotal.innerText = subtotal.toFixed(2);

  return subtotal;
}

function calcAll() {
  updateSubtot();
}

// Iteration 1.2

$calc.addEventListener('click', calcAll);
// Iteration 2
