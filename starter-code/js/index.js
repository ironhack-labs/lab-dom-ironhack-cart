// var $cart = document.querySelector('#cart tbody');
// var $calc = document.getElementById('calc');

//const $button = document.querySelector('#calc');
//const $button = document.getElementsByClassName('btn btn-success');

const $button = document.getElementById('calc');

function updateSubtot($product) {
  const $price = $product.querySelector('.pu span');
  const price = Number($price.innerText);
  //console.dir($price);
  //console.log(price);
  const $qty = $product.querySelector('.qty input');
  //console.dir($qty);
  const qty = Number($qty.value);
  const subtotal = price * qty;

  const $subtotal = $product.querySelector('.subtot span');
  $subtotal.innerText = subtotal.toFixed(2);
  // console.dir($subtotal);
  // console.log(subtotal);
}

function calcAll() {
  // Iteration 1.2
}

$button.addEventListener('click', () => {
  //console.log('Hi guys');
  updateSubtot();
});
