//Function that returns the price given a product
function getPriceByProduct(itemNode){
  return itemNode.getElementsByClassName("productCost")[0].getElementsByTagName("span")[0].innerHTML.slice(1)
}

//Function that returns the quantity given a product
function getQuantityByProduct(itemNode) {
  return itemNode.getElementsByClassName("productQuantity")[0].getElementsByTagName("input")[0].value
}

//Function that calculates the total price given a product
function getTotalPriceByProduct(itemNode) {
  return getPriceByProduct(itemNode) * getQuantityByProduct(itemNode)
}

//Function that updates the total price given a product
function updateTotalPriceByProduct(index) {
  document.getElementById("product-" + parseInt(index + 1)).getElementsByClassName("totalProductAmount")[0].getElementsByTagName("span")[0].innerHTML = ("$" + getTotalPriceByProduct(document.getElementById("product-" + parseInt(index + 1))))
}












function deleteItem(e){

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
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
