
function deleteItem(e){
	unitPrice = e.currentTarget.parentNode.parentNode;
  unitPrice.parentNode.removeChild(unitPrice);
}

function getPriceByProduct(unitPrice){
	return unitPrice.innerHTML;
}

function updatePriceByProduct(productPrice, index){
	quantity = document.getElementsByClassName('product-quantity');
	finalProductPrice = document.getElementsByClassName('total-product-price');

  finalProductPrice[index].innerHTML = "";

	if(quantity[index].value >= 0){
    newText = quantity[index].value * productPrice;
    newTextNode = document.createTextNode(newText);
    finalProductPrice[index].appendChild(newTextNode);
	} else {
    ceroText = "0.00";
    ceroTextNode = document.createTextNode(ceroText);
    finalProductPrice[index].appendChild(ceroTextNode);
  }

	return finalProductPrice[index].innerHTML;
}

function getfinalProductPrice() {
	var unitPrice = document.getElementsByClassName('cost-unit');
	var totalPrice = 0;
	for(var i = 0; i < unitPrice.length; i++){
		totalPrice += parseInt(updatePriceByProduct(getPriceByProduct(unitPrice[i]), i));
	}
	var totalPriceResult = document.getElementById('total-price-span');
  totalPriceResult.innerHTML = "";

  newTotalPrice = document.createTextNode(totalPrice);
  totalPriceResult.appendChild(newTotalPrice);
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createunitPrice(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getfinalProductPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
