let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');
let $deleteButtons =document.querySelectorAll(`.btn-delete`);
let $erase =document.getElementById(`erase`);

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
function deleteRow(elem){
  elem = document.querySelector(`.product`);
  elem.parentNode.removeChild(elem);
}
function deleteProduct() {
  for (let i=0;i<$deleteButtons.length; i++){
    if ($deleteButtons[i].onclick) {
      //let rowToDelete =document.getElementsByClassName(`product`)[i];
      deleteRow();
    } 
  }
  // let rowToRemove = document.querySelector('product');
  // rowToRemove.parentNode.removeChild(rowToRemove);
}

//$deleteButtons.on('click',deleteRow); 
$calc.onclick = calcAll;
//e.currentTarget?
$erase.onclick = deleteRow;
//$deleteButtons.on('click', deleteRow);
// let table = document.querySelector('.table')
// table.childNodes.forEach(row => updateSubtot(row))

// for (var b = 0; b < button2.length; b++) {
//   button1[b].addEventListener('click',function(){