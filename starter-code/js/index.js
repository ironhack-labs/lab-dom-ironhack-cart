function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
 let product = document.getElementsByClassName("product");
 let price = product.getElementsByClassName("#unit-cost").innerText;
 let quantity= product.getElementsByClassName(".quantity").value;
 let totalPrice = product.getElementsByClassName("tot-price-prod");
 totalPrice.innerText = quantity * price;
 return totalPrice;
                                                                                                                                                                                                                                                                                                                                           
  
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
