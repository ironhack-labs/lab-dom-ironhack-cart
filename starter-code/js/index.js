var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

// function updateSubtot($product) {
//   let price = document.getElementsByClassName('pu');
//   let quantity = document.getElementsByClassName('qty');
//   console.log(price, quantity);
//   let totalPrice = price * quantity;


// }


function updateSubtot($product) {
  let price = document.getElementsByClassName('pu')[0].children[0].innerText;
  let quantity = document.getElementsByClassName('qty')[0].children[0].children[0].getAttribute('value');
  let subtot = document.getElementsByClassName('subtot')[0].children[0];

  let subtotalEnd = price * quantity;
  subtot.textContent = subtotalEnd;
  
  return subtotalEnd;
}


function calcAll() {
  updateSubtot();
}
$calc.onclick = calcAll;