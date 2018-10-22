function deleteItem(e){
  let lsProductName = document.getElementsByClassName("productName");
  let lsUnitPrice = document.getElementsByClassName("unitPrice");
  let lsQuantity = document.getElementById("quantity");
  let lsTotalPrice = document.getElementsByClassName("totalPrice");
  let lsButton = document.getElementsByTagName("button");
  e.node.parentNode.removeChild(e);
}

function getPriceByProduct(itemNode){
  // 
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){
  let button = document.querySelector("button");
  button.addEventListener("click", function() {
    alert("delete!");
  })

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
