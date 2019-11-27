var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

console.log("Input:", $cart);
console.log("Calc:", $calc);



function updateSubtot($product) {
  // Iteration 1.1
  let priceUnit = document.querySelector('.product .pu span'); 
  console.log("Price:",priceUnit.innerHTML);
  let n = parseFloat(priceUnit.innerHTML);
  console.log("Price:", n);
  
  let quantity = document.querySelector('.product .qty input');
  console.log("Qty: ", quantity.getAttribute("value"));
  console.log("Typ: ", typeof(quantity.getAttribute("value")) );
  
  let n2 = parseFloat((quantity.getAttribute("value"))); 
  console.log("Quantity:", n2); 
  
  let subtotal = document.querySelector('.product .subtot span');
  let p = n*n2;
  console.log("Produkt:", p);
  subtotal.innerText = p;

}

function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;