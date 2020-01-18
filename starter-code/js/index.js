const $cart = document.querySelector('#cart tbody');
const $calc = document.getElementById('calc');
const $deletes = document.querySelectorAll('.btn-delete');

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

function deleteRow(e){
  const toBeDeleted = e.currentTarget.closest(".product")
  toBeDeleted.parentNode.removeChild(toBeDeleted);
}


$deletes.forEach(function(btn){
  btn.addEventListener("click", deleteRow);
});

