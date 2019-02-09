function deleteItem(e){
  console.log("entra");
  var productDelete = e.currentTarget.parentNode.parentNode;
  var parent = productDelete.parentNode;
  parent.removeChild(productDelete);
  
  getTotalPrice();
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var totalPrice = 0;
  for(var i= 0; i<document.getElementsByClassName("product-line").length;i++) {
    var productPrice = document.getElementsByClassName("product-price")[i].innerHTML;
    var productQuantity = document.getElementsByClassName("quantity")[i].value;
    var totalLinePrice=parseFloat(productPrice)*productQuantity;
    document.getElementsByClassName("product-line-price")[i].innerHTML = totalLinePrice.toFixed(2);
    totalPrice += totalLinePrice;
  }
  document.querySelector(".total-price").innerHTML = totalPrice.toFixed(2);
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
  

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
