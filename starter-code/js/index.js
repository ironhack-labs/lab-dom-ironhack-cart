function deleteItem(e){
  
}

function getPriceByProduct(itemNode){
  return itemNode.getElementsByClassName("prod-cost")[0].innerHTML || 0;
}

function getQuantityByProduct(itemNode){
  return itemNode.getElementsByClassName("quantity")[0].value || 0;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = document.getElementsByClassName("product");
  var totalProducts = 0;
  for(var i = 0; i < products.length; i++){
    var price = getPriceByProduct(products[i]);
    var quantity = getQuantityByProduct(products[i]);
    var total = price * quantity;
    products[i].getElementsByClassName("result")[0].innerHTML = total;
    totalProducts += total;
  }

  document.getElementById("total-price").innerText = '$'+totalProducts;
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
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
