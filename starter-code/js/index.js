var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
const $total = document.querySelector("body > h2 > span");
var $createBtn = document.querySelector('#create');
//var $qty = document.querySelector(".prodQuant").value;
var $input = document.querySelector(".prodQuant");
var $product = document.querySelector(".product > .name > span")

$input.addEventListener("change", updateSubtot);


// Iteration 1.1
function updateSubtot($product) {
  let $quantity = Number($product.querySelector(".prodQuant"));
  let $pricePerUnit = Number($product.querySelector('.pu span').innerText);
  let $subTotal = $product.querySelector(".subtot span");
  $subTotal.innerText = $quantity * $pricePerUnit;
  return $subTotal.innerText;
};

updateSubtot($product);



// Iteration 1.2
function calcAll() {

}
//  $click.addEventListener("click", calcAll)
let productList = querySelectorAll($product);
$calc.onclick = calcAll;
