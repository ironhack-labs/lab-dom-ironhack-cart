function deleteItem(e){
	var delItem = e.currentTarget.parentNode;
  delItem.parentNode.removeChild(delItem);
}

function getPriceByProduct(priceByProduct){
	return parseFloat(priceByProduct.innerHTML.replace("$",""));
}

function updatePriceByProduct(productPrice, i){
	var totalItems = document.getElementsByClassName("quantity");
	var product = document.getElementsByClassName("price");
	if(totalItems[i].value >= 0){
		product[i].innerHTML = "$" + parseFloat((totalItems[i].value * productPrice), 8).toFixed(2);
	} else product[i].innerHTML = "$0.00";
	return parseFloat(product[i].innerHTML.replace("$",""));
}

function getTotalPrice() {
	var price = document.getElementsByClassName("unit-price");
	var total = 0;
	for(var i = 0; i < price.length; i++){
		total += updatePriceByProduct(getPriceByProduct(price[i]), i);
	}
	var totalPrice = document.getElementById("total-price");
	totalPrice.innerHTML = total.toFixed(2);
}

function createQuantityInput(){
	var itemtwo = document.createElement("INPUT");
	itemtwo.setAttribute("type", "number");
	itemtwo.setAttribute("min", "0");
	itemtwo.setAttribute("name", "amount");
	itemtwo.setAttribute("value", "0");
	itemtwo.setAttribute("class", "quantity");
    document.body.appendChild(itemtwo);
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
