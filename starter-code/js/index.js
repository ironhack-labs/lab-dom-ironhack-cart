var $cart = document.querySelector('#cart tbody'); // this is a  node
var $calc = document.getElementById('calc');

var $input = document.querySelector(".qty label input");
var $inputs = document.querySelectorAll(".qty label input");
var $subTo = document.querySelector(".subtot span");

var $productsList = document.querySelectorAll(".product");
var $price = document.querySelector(".pu span");
var $prices = document.querySelectorAll(".pu span");

var $total = document.querySelector("h2 span");


function updateSubTot() {
  totalPrice = $input.value * Number($price.textContent);
  console.log(totalPrice);
  $subTo.innerHTML = totalPrice;
  return totalPrice;
}


$input.onclick = updateSubTot;


function calcAll() {
  $total.textContent = updateSubTot();
}

$calc.onclick = calcAll;

function suppress() {
  const $delete_btn = document.querySelector(".btn-delete");
  const $product = document.querySelector(".product");
  $delete_btn.onclick = $product.remove();
} 

suppress();

















// function updateSubTotal(product) {
//   $productsList.forEach(function() {
//     $subTo.innerHTML += $input.value * Number($price.textContent);
//     console.log($subTo.innerHTML);
//   })
// }







// function updateSubtot() {
//   subTotalPrice = (Number($input.value) * $price.textContent);
//   console.log(subTotalPrice);
//   $subTo.textContent = subTotalPrice;
// }

//var $total = document.querySelector("h2 span");




// console.log("yo", $calc)
// $calc.onclick = calcAll