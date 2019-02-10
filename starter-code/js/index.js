function deleteItem(e){

}



function getPriceByProduct(itemNode){

  var unitPriceString = document.querySelector(".unit-price").innerText

  var unitPrice = unitPriceString.slice(1)

  unitPrice = parseFloat(unitPrice).toFixed(2)

  return unitPrice

}



function updatePriceByProduct(productPrice, index){

  var updatedPriceString = document.querySelector("total-price")

  var updatedPrice = updatedPriceString.slice(1)
  
  updatedPrice = parseFloat(updatedPrice).toFixed(2)

  updatePrice.innerHTML = getTotalPrice()

}



function getTotalPrice(e) {

  var totalPrice = getPriceByProduct() * createQuantityInput()

  return totalPrice

}



function createQuantityInput(){

  var quantityInput = document.getElementById("quantity").value

  return quantityInput

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
