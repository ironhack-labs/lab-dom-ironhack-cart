var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot(product) {
  const $subtot = product.querySelector('.subtot span'); 
  const puAmount = parseInt(product.querySelector('.pu span').innerText);
  const qtyAmount = parseInt(product.querySelector('.qty input').value);
  $subtot.innerText = (puAmount*qtyAmount);
  return puAmount*qtyAmount;
}

function calcAll() {
  const allSubtots = document.querySelectorAll('.subtot span')
  let subtotSum = 0;
  allSubtots.forEach(function (subtot) {
    updateSubtot(subtot.closest('.product'));
    subtotSum += parseInt(subtot.innerText);
  })
  document.querySelector('h2 span').innerText= subtotSum.toString();
}
$calc.addEventListener("click", calcAll);