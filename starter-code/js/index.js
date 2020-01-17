var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

// class Product {
//   constructor (nameParam, priceParam, amountParam) {
//     this.name = nameParam;
//     this.price = priceParam;
//     this.amount = amountParam;
//     this.subtotal = ``;
//   }
// }
let product; 

function updateSubtot(product) {
  // Iteration 1.1
  let price = document.querySelector(`.pu > span`).innerText;
  let quantity = document.querySelector(`input`).value;
  return  product = parseFloat(price) * parseFloat(quantity);
}



function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;