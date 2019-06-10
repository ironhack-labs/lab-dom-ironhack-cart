function deleteItem(e){
  var $deleteItemButton = document.querySelector("#deleteItemButton");
  var $inputField = document.querySelector("#input-field")
  $deleteItemButton.addEventListener('click', function (){
    e.currentTarget.closest('input-field');
    inputField.innerHTML = '';
  });
}


function getPriceByProduct() {
  var $unitPrice = document.querySelector('#unitPrice');
  var $quantityInput = document.querySelector('input');
  document.querySelector("#rowPrice") = '$' + $unitPrice.innerHTML * $quantityInput.value;
}

/*
function updatePriceByProduct(){
  var $rowPrice = document.querySelector("#rowPrice");
  var $calculateTotalPriceButton = document.querySelector("#calculateTotalPriceButton");
  $calculateTotalPriceButton.onclick = function(){getPriceByProduct()}  

  var priceOfRow = getPriceByProduct()
  return $rowPrice.innerHTML = priceOfRow;
}
*/

function getTotalPrice() {
  var $calculateTotalPriceButton = document.querySelector("#calculateTotalPriceButton");
  var $totalPrice = document.querySelector("#totalPrice")
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  let newItem = ` <div class = "btn">
  <div class = "ItemName" > ${ $newInputItem.value }</div>
  <div class = "itemPrice">${ $newInputPrice.value }</div>
  <div class = "quantity" > QTY: <input type="text" class="inputQty"> </div>
  <div><span class = "totalItemPrice"> $0.00 </span></div>
  <div><button class="btn-delete"> Delete </button></div>
</div>`

}

/*
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
*/
