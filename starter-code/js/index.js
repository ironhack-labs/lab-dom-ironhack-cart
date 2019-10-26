var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $product = document.querySelector('.product');
let $products = document.querySelectorAll('.product');
let $deleteButtons = document.querySelectorAll('.btn-delete');
let table = document.querySelector('tbody');
// let $deleteButton = document.querySelector('.btn-delete');

$products.forEach(function(e){
  updateSubtot(e)
  e.querySelector('input').addEventListener('change',function(){
  updateSubtot(e);
});
})

function updateSubtot(product) {
  // Iteration 1.1
  let quantity = product.querySelector('input').value;
  let unitPrice = product.querySelector('.pu span').innerText;
  let subTotPriceNode = product.querySelector('.subtot span');
  let subTotPrice = quantity * unitPrice;
  //update subtotal
  console.log("llamada a subtotal ok");
  subTotPriceNode.innerHTML = subTotPrice;
  return subTotPrice
}

  function calcAll() {
    let totalNode = document.querySelector('h2 span')
    let allSubTotals = document.querySelectorAll('.product');
    let totalCart = 0;
    allSubTotals.forEach(subtotal => {
            updateSubtot(subtotal); 
            totalCart += updateSubtot(subtotal)
    });

    totalNode.innerHTML = totalCart;
  }

  $calc.onclick = function(e){
    e.preventDefault()
    calcAll();
  }

function deleteItem($deleteButton){
  // console.log($deleteButton.parentNode.parentNode.rowIndex)
      // productToRemove.parentNode.deleteRow(productToRemove.rowIndex);
      let productRow = $deleteButton.parentNode.parentNode.rowIndex -1;
      table.deleteRow(productRow);
}

  $deleteButtons.forEach(function(d){
    d.onclick = function(e){
    e.preventDefault()
    deleteItem(d);
    }
    })



  
  