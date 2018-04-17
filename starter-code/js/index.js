

function deleteItem(e){

}

function getPriceByProduct(){
  var obj1Elem = document.getElementById("object1price").textContent;
  var actualPrice = Number(obj1Elem);
  return actualPrice;
}



function updatePriceByProduct(){
  var button = document.getElementsByClassName("btn-success")[0];
  button.onclick = function(){
    var productPrice = getPriceByProduct();
    var productInput = createQuantityInput();
    return productPrice*productInput;
  };
  
}

function getTotalPrice() {

}

function createQuantityInput(){
  var inputQuantity = document.getElementsByTagName("input")[0].value;
  var actualInput = Number(inputQuantity);
  return actualInput;
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
  updatePriceByProduct();
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
