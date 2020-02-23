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

//deleting

var delete_btns = document.querySelectorAll('.btn-delete') //array of delete buttons

for (let n = 0; n < delete_btns.length; n++){
  delete_btns[n].addEventListener('click', function(){
    console.log('button pressed!')
    var delete_row = delete_btns[n].closest('.product')
    document.querySelector('tbody').removeChild(delete_row)
  })
}

