function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let price = document.getElementsByClassName('unit-cost')[0].childNodes[1].innerHTML
  let priceToNumber = Number(price.slice(1))
  let quantity = document.getElementsByClassName('input-quantity')[0].value
  let quantityToNumber = Number(quantity)
  let totalPrice = priceToNumber * quantityToNumber
  let totalNode = document.getElementsByClassName('total-price')[0].childNodes[1]
  totalNode.innerHTML = `$${totalPrice}.00`
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

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
