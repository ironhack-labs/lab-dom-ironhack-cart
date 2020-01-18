var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $delete =document.getElementsByClassName(`.rm .btn .btn-delete`);

function updateSubtot($product) {
  // Iteration 1.1
  let priceUnit = $product.querySelector(`.pu span`).innerHTML;
  let quantityProduct = $product.querySelector(`.qty label input`).value;
  let subTotalSpan =$product.querySelector(`.subtot span`);
  let subTotal =priceUnit*quantityProduct;
  subTotalSpan.innerHTML = subTotal;
  return  subTotal;
}

 // Iteration 1.2
function calcAll() {
  let totalSum=0;
  let allItems =document.querySelectorAll( `.product`);
  
    allItems.forEach((product) => {
    totalSum +=updateSubtot(product);
  })
  return document.querySelector(`h2 span`).innerHTML =totalSum; 
}

function deleteProduct() {
  let rowToRemove = document.querySelector('product');
  rowToRemove.parentNode.removeChild(rowToRemove);


}

$delete.onclick = deleteProduct; 
$calc.onclick = calcAll;

/*
let table = document.querySelector('.table')
table.childNodes.forEach(row => updateSubtot(row))*/