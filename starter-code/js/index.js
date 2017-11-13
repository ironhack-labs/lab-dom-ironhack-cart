function deleteItem(e){

}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  products = document.getElementsByClassName("product");
  for ( i = 0; i < products.length; i++ ) {
    console.log(products[i].childNodes)
    var unitPrice = parseInt(products[i].childNodes[3].innerText);
    var qty = parseInt(products[i].childNodes[5].childNodes[1].childNodes[3].value);
    var totalItemPrice = unitPrice * qty;
    document.getElementById("total-price").innerHTML = totalItemPrice;
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
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
