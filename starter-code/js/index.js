function deleteItem(e){
	node = e.currentTarget.parentNode;
  node.parentNode.removeChild(node);
}

function getPriceByProduct(itemNode){
	return parseInt(itemNode.innerHTML.replace("$",""));
}

function updatePriceByProduct(productPrice, index){
	totalItems = document.getElementsByClassName('quantity');
	totalPrice = document.getElementsByClassName('price');
	totalPrice[index].innerHTML = "$" + (totalItems[index].value * productPrice).toFixed(2);
	return parseInt(totalPrice[index].innerHTML.replace("$",""));
}

function getTotalPrice() {
	itemNode = document.getElementsByClassName('unit-cost');
	totalMoney = 0;
	for(i = 0; i < itemNode.length; i++){
		totalMoney += updatePriceByProduct(getPriceByProduct(itemNode[i]), i);
	}
	totalMoneyNode = document.getElementById('total-price');
	totalMoneyNode.innerHTML = totalMoney;
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
  item = document.createElement(dataType);
  item.innerHTML = itemData;
}

function createNewItemRow(itemName, itemUnitPrice){
  itemName = document.createElement("span");
  span.setAttribute("class", "productName");
  span.innerHTML = itemName;
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
