var productCatalog = [];

function deleteItem(e){

}

function getPriceByProduct(itemNode){

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

function createNewItem(itemName, itemUnitPrice){
  console.log("LA FONCTION COMMENCE")
  var name = document.getElementById(product-name).value;
  var price = document.getElementById(product-price).value;
  var product = {
    name : name,
    price : price
  }
  console.log(product);
  productCatalog.push(product);
  };

console.log(productCatalog);

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  calculatePriceButton.onclick = function() {
    var productPrice = document.getElementById('product-price');
    var productQuantity = document.getElementById('product-quantity');
    var productTotal = productPrice * productQuantity;
    var total = document.getElementById('product-total');
    total.innerHTML = productTotal;
  }
};
