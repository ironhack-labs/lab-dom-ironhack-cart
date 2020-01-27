var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  let priceUnit = $product.querySelector('.pu span').innerText,
    numberUnit = $product.querySelector('.qty input').value,
    totalPrice = priceUnit * numberUnit;
  
  $calc.addEventListener('click', (event) => {
    let $totalButton = document.getElementsByTagName('h2')[0];
    $totalButton.children[0].innerText += totalPrice;
    $product.querySelector('.subtot span').innerText = totalPrice;
  });
  
  return totalPrice;
}

function calcAll() {
  // Iteration 1.2
  let $$elementsClass = document.getElementsByClassName('product'); 
  for(let $element in $$elementsClass)
    updateSubtot($element);
}
$calc.onclick = calcAll;