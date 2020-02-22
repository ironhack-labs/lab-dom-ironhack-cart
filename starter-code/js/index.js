var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

let prodList = document.querySelectorAll('.product');

function updateSubtot($product) {
  // Iteration 1.1
  let value = $product.querySelectorAll('.qty input')[0].value;
  let price = $product.querySelectorAll('.pu span')[0].innerHTML;

  return price * value;
}

function calcAll() {
  // Iteration 1.2

  let totalPrice = 0;
  // debugger

  for (let i = 0; i < prodList.length; i++) {
    prodList[i].querySelectorAll('.subtot span')[0].innerHTML = updateSubtot(
      prodList[i]
    );

    totalPrice += updateSubtot(prodList[i]);
  }
  document.querySelector('#grandTotal span').innerHTML = totalPrice;
}

// $calc.onclick = calcAll;

document.querySelectorAll('#calc')[0].addEventListener('click', function() {
  calcAll();
});
