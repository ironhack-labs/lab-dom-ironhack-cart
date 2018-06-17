//Function that returns the price given a product
function getPriceByProduct(itemNode){
  return itemNode.getElementsByClassName("productCost")[0].getElementsByTagName("span")[0].innerHTML.slice(1)
}

//Function that returns the quantity given a product
function getQuantityByProduct(itemNode) {
  return itemNode.getElementsByClassName("productQuantity")[0].getElementsByTagName("input")[0].value
}

//Function that calculates the total price given a product
function getTotalPriceByProduct(itemNode) {
  return getPriceByProduct(itemNode) * getQuantityByProduct(itemNode)
}

//Function that updates the total price given a product
function updateTotalPriceByProduct(index) {
  document.getElementsByClassName("productRow")[index].getElementsByClassName("totalProductAmount")[0].getElementsByTagName("span")[0].innerHTML = ("$" + getTotalPriceByProduct(document.getElementsByClassName("productRow")[index]))
}

//Function that calculates the total price of all products
function getTotalPrice() {
  var elements = document.getElementsByClassName("productRow")
  var total = 0
  for (var i = 0; i < elements.length; i++) {
    updateTotalPriceByProduct(i)
    total += parseFloat(elements[i].getElementsByClassName("totalProductAmount")[0].getElementsByTagName("span")[0].innerHTML.slice(1))
  }
  document.getElementById("totalCartAmount").getElementsByTagName("span")[0].innerHTML = "$" + total
}

//Function that deletes an item from the cart
function deleteItem(e){
  e.currentTarget.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode)
}






function updatePriceByProduct(productPrice, index){

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
