var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
// let $product = document.querySelector('subtot span').innerHTML;

function updateSubtot($product) {
  let price = document.querySelector('.pu span').innerHTML;
  let units = document.querySelector('.qty input').value;
  let subTotal = price * units;
  let total =+ subTotal;
  // let result = price[$product].innerHTML * units[$product].value;
  document.querySelector('.subtot span').innerHTML = subTotal;
  document.querySelector('h2 span').innerHTML = total;
}

function calcAll() {

}

$calc.onclick = calcAll;
$calc.onclick = updateSubtot;

//   function addProduct() {
//   let name = document.querySelector('.new input').value;
//   let priceProduct = document.querySelector('.new input')[1].value;
//   let newRow = document.querySelector('tbody tr').cloneNode(true);
//   let table = document.getElementsByTagName('tbody');

//   newRow.querySelector('.name span').innerHTML = name;
//   newRow.querySelector('.pu span').innerHTML = priceProduct;
//   table.appendChild(newRow);
//   }
//   addProduct();