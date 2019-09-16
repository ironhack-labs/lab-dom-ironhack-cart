function deleteItem(e){
  e.parentNode.removeChild(e)
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var price = document.getElementsByClassName('unit-price')
  var qnt = document.getElementsByClassName('qnt')
  var itemTotalPrice = document.getElementsByClassName('item-total-price')
  var cartTotalPrice = document.getElementById("cart-total-price")
  var cont = 0

  for(var i = 0; i<itemTotalPrice.length ; i++){
    cont += price[i].innerHTML * qnt[i].value
    itemTotalPrice[i].innerHTML = "$"+price[i].innerHTML * qnt[i].value;
  }
cartTotalPrice.innerHTML = cont


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
  console.log("hellow ");
  
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  console.log(createItemButton);
  

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
