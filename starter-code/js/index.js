var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  let $pricePerUnit = parseFloat($product.querySelector('.pu span').innerText);
  let $qty = parseInt($product.querySelector('.qty input').value);
  //Subtotal per product
  let $productSubtotal = $pricePerUnit * $qty;

  $product.querySelector('.subtot span').innerText = $productSubtotal.toFixed(2);
  console.log($productSubtotal);
  return $productSubtotal;
}

function calcAll() {
  const $$allProducts = document.querySelectorAll('tr.product');
  let total = 0;
  for (let $product of $$allProducts) {
    let subtotal = updateSubtot($product);
    total += subtotal;
  }
  document.getElementById('subtotal').innerText = total.toFixed(2);
}
calcAll();

$calc.addEventListener('click', calcAll);

function deleteItems(event) {
  let $button = event.target;
  let $productRow = $button.parentNode.parentNode;
  let $FullList = $productRow.parentNode;
  $FullList.removeChild($productRow);
  calcAll();
}

const $$AlldeleteButtons = document.querySelectorAll('.btn-delete');
for (let $deleteButton of $$AlldeleteButtons) {
  $deleteButton.addEventListener('click', deleteItems);
}

const $newProductName = document.querySelector(".new input")
const $newProductPrice = document.querySelector("")
const $newProductButton = document.querySelector(".new button")

function createNewRow(event) {
  $button = event.target;
  $FullList.createElement($productRow)
}


$newProductButton.addEventListener('click', createNewRow)