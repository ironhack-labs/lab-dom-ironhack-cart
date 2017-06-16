function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var unitPriceSpans = document.getElementsByClassName("unitPrice");
  var quantitySpans = document.getElementsByClassName("quantity");
  var totalPriceSpans = document.getElementsByClassName("totalPrice");

  for(var i = 0; i < unitPriceSpans.length ; i++){
    var units = parseInt( unitPriceSpans[0].innerHTML.replace(/[^0-9\.]+/g,"") );
    var qtyText = quantitySpans[i].value.replace(/[^0-9\.]+/g,"");
    var qty = (qtyText === "") ? 0 : parseInt(qtyText);

    if(qty === 0){
      quantitySpans[i].value = "";
    }else totalPriceSpans[i].innerHTML = "$" + (qty*units).toFixed(2);
  }
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
  // createItemButton.onclick = createNewItem;
  //
  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
