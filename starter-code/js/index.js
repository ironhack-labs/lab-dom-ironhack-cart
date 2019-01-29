function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  // let cost = document.getElementById('product-cost').innerHTML;
  // let qty = document.getElementById('quantity').value;
  // let productTotal = cost * qty;
  // document.getElementById('product-total').innerHTML = productTotal;
  costArray = document.getElementsByClassName('product-cost');
  quantityArray = document.getElementsByClassName('quantity');
  totalArray = document.getElementsByClassName('product-total');
  let superTotal = 0;
  for (var i = 0; i < costArray.length; i++) {
    let cost = costArray[i].innerHTML;
    let qty = quantityArray[i].valueAsNumber;
    let productTotal = cost * qty;
    totalArray[i].innerHTML = `$ ${productTotal}`;
    superTotal += productTotal;
    
  }
  document.getElementById('total').innerHTML = superTotal;
  alert(superTotal);
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

}

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
