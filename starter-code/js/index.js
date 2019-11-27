var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');



let $product = document.querySelector('.name').getElementsByTagName('span')[0].innerText;

 // Iteration 1.1
 
function updateSubtot($product) {
 
  let unitPrice = document.querySelector('.pu').getElementsByTagName('span')[0].innerText;
  let quantity = document.querySelector('input').value;
  let subTotal = unitPrice * quantity;
  let elementSubTotal = document.querySelector('.subtot').getElementsByTagName('span')[0].innerText;
  if (quantity >= 0){
    elementSubTotal = subTotal;
    return elementSubTotal;
  }
  }
  console.log(updateSubtot($product));
  //updateSubtot($product);

    
 // Iteration 1.2
function calcAll() {
 
}
$calc.onclick = calcAll;