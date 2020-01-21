var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $product = document.querySelector('.product');

function updateSubtot($product) {
  let price = $product.querySelector('.pu > span').innerHTML;
  let quantity = $product.querySelector('.qty > label > input').value;
  let subtot = $product.querySelector('.subtot > span');

  let subtotal = price * quantity;
  subtot.textContent = subtotal;

  return subtotal;
}

function calcAll() {
  let $allProducts = document.querySelectorAll('.product');
  let $finalPrice = document.querySelector('h2 > span');
  let totalPrice = 0;

  $allProducts.forEach(element => {
    updateSubtot(element);
    totalPrice += updateSubtot(element);
  });

  $finalPrice.textContent = totalPrice;
}

$calc.onclick = calcAll;