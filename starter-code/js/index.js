var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $tbody = document.getElementById('parentProducts');


function updateSubtot($product) {
  // Iteration 1.1
  const unitPrice = $product.querySelector('.pu span').innerText;
  const quantity = $product.querySelector('input').value;
  const subTotal = parseFloat(unitPrice) * parseFloat(quantity);
  $product.querySelector('.subtot span').innerText = subTotal;
  return subTotal;
}

function calcAll() {
  // Iteration 1.2 - Iteration 2 - Iteration 3
  let total = 0;
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    total += updateSubtot(p);
  }
  document.getElementById('total').innerText = total;
}

//Iteration 4

function deleteProduct(e){
  let tr  = e.currentTarget.parentElement.parentElement;
  $tbody.removeChild(tr);
  calcAll();
  createDeleteEvents();
}

function createDeleteEvents(){
  const deleteBtns = document.getElementsByClassName('btn-delete');
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', deleteProduct);
  }
}

//Iteration 5



$calc.onclick = calcAll;
createDeleteEvents();