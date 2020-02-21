var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $product_list = document.querySelectorAll('.product')


function updateSubtot($product) {
  // Iteration 1.1
  let pQuantity = $product.querySelector('input').value
  let pPrice = $product.querySelector('.pu span').innerHTML
  return pQuantity * pPrice
}

function calcAll() {
  // Iteration 1.2
  var tPrice = 0
  for (let n=0;n<$product_list.length;n++){   
    $product_list[n].querySelector('.subtot span').innerHTML = updateSubtot($product_list[n])
    tPrice += updateSubtot($product_list[n])
  }
  document.querySelector('#totalPrice span').innerHTML = tPrice
}


// $calc.onclick = calcAll;
$calc.addEventListener('click', function(){
  calcAll()
})