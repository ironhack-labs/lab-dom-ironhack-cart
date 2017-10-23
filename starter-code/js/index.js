/////////////// TESTING FUNCTIONS

function getPriceByProduct(itemNode){
  var individualPrice = unitPrice.getAttribute(unitPrice);
  var nrOfItems = itemNode.getAttribute(itemNode);
  var totalPrice = individualPrice * nrOfItems;
  element.setAttribute("total", totalPrice);
}

/* GIVEN ASSIGNMENT

function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var individualPrice = unitPrice.getAttribute(unitPrice);
  var nrOfItems = itemNode.getAttribute(itemNode);
  var totalPrice = individualPrice * nrOfItems;
  return totalPrice;
}

function updatePriceByProduct(unitPrice){
  var individualPrice = unitPrice.getAttribute(unitPrice);
  getTotalPrice ();
}

/*function getTotalPrice() {
  var individualPrice = unitPrice.getAttribute(unitPrice);
  var quantityAmount = quantity.getAttribute(quantity);


  /*var price = unitPrice.getAttribute(unitPrice);
  var amounts = amount.getAttribute(amount);
  var totalPrice = price * amount;
  return totalPrice;



function addItem () {
  inames.push(document.getElementById("pname").value);
  iquantity.push(parseInt(document.getElementById("quantity").value));
  iprice.push(parseInt(document.getElementById("price").value));

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
/*
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton.onclick = getTotalPrice();

  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

*/
*/
