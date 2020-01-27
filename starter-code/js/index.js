var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
 
let $unitPrice = $product.querySelector('.pu span').innerText;
  let $quantity = $product.querySelector('.qty label input').value;
  let $subtotalSpan = $product.querySelector('.subtot span');
  let subtotal = parseFloat($unitPrice) * parseInt($quantity);

  $subtotalSpan.innerText = subtotal.toFixed(2);

  return subtotal;
  }




function calcAll() {
  // Iteration 1.2
const $$allProducts = document.querySelectorAll("tr.product");


  let tot = 0
  for(let $product of $$allProducts){
    let subTotal = updateSubtot($product);
    tot += subTotal;
  }
  const $totalSpan = document.querySelector("h2 span");
  $totalSpan.innerText = tot.toFixed(2)
}


// Iteration 4

function deleteProduct(del) {
  $cart.removeChild(del.target.parentElement.parentElement);
}

// Iteration 5



$calc.onclick = calcAll;
$cart.querySelectorAll('.btn-delete').forEach(button => (button.onclick = deleteProduct));