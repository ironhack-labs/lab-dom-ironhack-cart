var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  
  let unitPrice = $product.querySelector('.pu>span');
  let unitQuantity = $product.querySelector('.qty input[type=number]').value;
  
  let subTotal = $product.querySelector('.subtot>span');
  subTotal.innerText = parseFloat(unitPrice.innerText)*unitQuantity;

  return parseFloat(subTotal.innerText);
}

function calcAll() {
  
  let productsList = document.querySelectorAll('.product');
  let totalPrice = 0;
  
  for(let i = 0; i < productsList.length; i++) {
    totalPrice += updateSubtot(productsList[i]);
  }

  console.log(totalPrice);
  document.querySelector('h2 span').innerText = totalPrice;
}

$calc.onclick = calcAll;