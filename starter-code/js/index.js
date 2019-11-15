var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot(product) {
  // Iteration 1.1
  // let result
  // let unitPrice = product.querySelector('.pu').innerText;
  // let quantity = product.querySelector('.qty > label > input').value 
  // result = Number(unitPrice.substr(1)) * Number(quantity)

  // product.querySelector('.subtot').innerText = result
  for (let i =0 ; i < product.length; i++) {
    console.log(product[i])
  }
}

function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;