var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let prodList = document.querySelectorAll('.product');
// // debugger;
// let itemEntry = document.querySelector('#cart').closest('.product');

function updateSubtot($product) {
  // Iteration 1.1
  let value = $product.querySelectorAll('.qty input')[0].value;
  let price = $product.querySelectorAll('.pu span')[0].innerHTML;

  return price * value;
}

function calcAll() {
  // Iteration 1.2
  let totalPrice = 0;
  for (let i = 0; i < prodList.length; i++) {
    prodList[i].querySelectorAll('.subtot span')[0].innerHTML = updateSubtot(
      prodList[i]
    );

    totalPrice += updateSubtot(prodList[i]);
  }
  document.querySelector('#grandTotal span').innerHTML = totalPrice;
}

let $deleteButton = document.querySelectorAll('.btn.btn-delete');
for (let i = 0; i < $deleteButton.length; i++) {
  $deleteButton[i].addEventListener('click', function() {
    // alert('I was clicked');
    let itemToDelete = $deleteButton[i].closest('.product');
    document.querySelector('tbody').removeChild(itemToDelete);
  });
}

// $calc.onclick = calcAll;

document.querySelectorAll('#calc')[0].addEventListener('click', function() {
  calcAll();
});
