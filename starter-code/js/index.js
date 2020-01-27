var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

/*
const $input = document.querySelectorAll('.prodQty');
const price = Number(document.querySelector('.pu span').innerText);

$input.addEventListener('change', updateSubtot);

function updateSubtot(event) {
  // Iteration 1.1
  const inputValue = Number($input.value);

  let total = price * inputValue;
  let subTotal = event.querySelector('.subtot span');
  subTotal.innerText = total;
}

//$calc.addEventListener('click', calcAll); => same has bellow line
$calc.onclick = calcAll;
const $shoppingList = document.querySelector('.product');

function calcAll() {
  // Iteration 1.2
  const $shoppingListItem = document.createElement('tr');
  let finalTotal = document.querySelector('h2 span');
  return (finalTotal.innerText = document.querySelector('.subtot span').innerText);
}*/

function updateSubtot($product) {
  const $priceSpan = $product.querySelector('.pu span');
  const priceValue = $priceSpan.innerText;

  const $quantityInput = $product.querySelector('input');
  const quantityValue = $quantityInput.value;

  const subtotal = parseFloat(priceValue) * parseInt(quantityValue);

  const $subTotalSpan = $product.querySelector('.subtot span');
  $subTotalSpan.innerText = subtotal.toFixed(2);
}

function calcAll() {
  const $$allProducts = document.querySelector('tr.product');

  let total = 0;

  for (let $product of $$allProducts) {
    let subtotal = updateSubtot($product);
    total += subtotal;
  }
  const $totalSpan = document.querySelector('h2 span');
  $totalSpan.innerText = total.toFixed(2);
}

//$calc.onclick = calcAll;=> same has bellow line
$calc.addEventListener('click', calcAll);


//iteration 4