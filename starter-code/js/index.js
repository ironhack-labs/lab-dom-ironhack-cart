var quantity = document.createElement("button");
var quantity_text = document.createTextNode("Calculate Prices");
quantity.appendChild(quantity_text);
document.body.appendChild(quantity);



var price = document.getElementsByClassName('price');
price.innerHTML;
var quantity = parseFloat(price[0].innerHTML) * parseFloat(document.querySelector('input').innerHTML) ;


function deleteItem(e){

}

function getPriceByProduct(itemNode){
  return document.getElementsByClassName("price").innerHTML;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  ;
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
