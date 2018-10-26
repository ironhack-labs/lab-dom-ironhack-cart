function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
    var product = document.querySelectorAll('.product-name')[0].innerHTML;
    var price   =   parseFloat(document.querySelectorAll('.price')[0].innerHTML.substring(1));
    var quantity = parseFloat(document.querySelectorAll('.quantity')[0].value); 
    document.querySelectorAll(".totalByProduct")[0].innerHTML = `$${quantity * price}`;
    
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
