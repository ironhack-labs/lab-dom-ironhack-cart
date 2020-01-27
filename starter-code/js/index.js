var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
const $input = document.querySelector('.prodQty');
const price = Number(document.querySelector('.pu span').innerText); //$price does not work
$input.addEventListener('change', updateSubtot);
function updateSubtot(event) {
  // Iteration 1.1
  const inputValue = Number($input.value);
  let total = price * inputValue;
  let subTotal = document.querySelector('.subtot span');
  return (subTotal.innerText = total);
}
//$calc.addEventListener('click', calcAll); => same has bellow line
$calc.onclick = calcAll;
const $shoppingList = document.querySelector('.product');
function calcAll() {
  // Iteration 1.2
  const $shoppingListItem = document.createElement('tr');
  let finalTotal = document.querySelector('.cta span');
  //return (finalTotal.innerText = document.querySelector('.subtot span').innerText);
}
$calc.onclick = calcAll;
