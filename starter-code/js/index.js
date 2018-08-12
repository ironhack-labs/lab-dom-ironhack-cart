function deleteItem(e){
 var button = e.currentNode
 console.log(button)
 button.parentElement.parentElement.remove()
 getTotalPrice();
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var prices  = document.getElementsByClassName('price')
  var quantities = document.getElementsByClassName('quantity')
  var totalCosts = document.getElementsByClassName('total-unit')
  var accumulator = 0;
  for (var x = 0; x < prices.length;x++){
    var cost = prices[x].getElementsByTagName('span')[0].innerHTML
    cost = cost.split("")
    cost.shift();
    cost = cost.join("")
    cost *= quantities[x].getElementsByTagName('input')[0].value
    accumulator += cost;
    totalCosts[x].getElementsByTagName('span')[0].innerHTML = "$"+parseFloat(cost).toFixed(2)
  }
  console.log(accumulator)
  document.getElementsByClassName('total-price')[0].getElementsByTagName('span')[0].innerHTML = "$"+parseFloat(accumulator).toFixed(2)
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
