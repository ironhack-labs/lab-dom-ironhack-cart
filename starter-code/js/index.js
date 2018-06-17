var calculatePriceButton = document.getElementById("btn-success");
var createItemButton = document.getElementById("btn-create");
var deleteButtons = document.getElementsByClassName("btn-delete");

function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove();
}
  /*var container = document.getElementById("container");
  var item = document.getElementsByClassName("wrapper");
  container.remove(item);*/
  

function getPriceByProduct(itemNode){
  var xProducts = itemNode.getElementsByClassName("units")[0].value;
  var priceHolder = itemNode.getElementsByClassName('price')[0].innerText;
  priceHolder = parseFloat(priceHolder) * numberOfProducts;
  itemNode.getElementsByClassName('total')[0].getElementsByTagName('span')[0].innerHTML = priceHolder;
  return priceHolder;
}
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}; 