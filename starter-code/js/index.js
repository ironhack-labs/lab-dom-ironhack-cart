var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

let product = document.getElementsByTagName("tr");
// console.log(product);
let product1 = product[1].getElementsByClassName("pu");

let span = product1[0].getElementsByTagName("span");

const pricesUnit = span[0].innerHTML;

let quantity = document.getElementsByTagName("input")[0].value;

let button = document.getElementsByTagName("input")[0];

let asd = 0;
button.onclick = function() {
  let input = document.getElementsByTagName("input")[0].value;
  console.log(input);
  console.log(input * pricesUnit);
  asd = input;
  console.log(typeof input)
};

console.log(typeof asd);

let subtotal = document.getElementsByClassName("subtot");

//console.log($product[0].children);
//console.log($cart);
//console.log($calc);
//console.log(product1);
//console.log( {span} )
console.log(pricesUnit);
// console.log(quantity);

/*function updateSubtot($product) {
  let quantity = document.getElementsByTagName("input")[0].value
  let  pricesUnit = span[0].innerHTML;
  console.log (quantity * pricesUnit)
}*/

function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;

function updateSubtot() {
  let pricesUnit = span[0].innerHTML;
  let total = pricesUnit * asd;

  console.log((subtotal[0].innerHTML = `$${total}`));
  console.log(total);
}

updateSubtot();
