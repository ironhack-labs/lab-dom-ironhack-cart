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
	totalMoneyNode.innerHTML = totalMoney.toFixed(2);
}

function createQuantityInput(){
  grandpaNode = document.getElementsById('items-div');
  node = document.createElement('form');
  node.className = "quantity-form";
  label = document.createElement('label');
  label.innerHTML = "QTY";
  input = document.createElement('input');
  input.type = "number";
  input.value = 0;
  input.className = "quantity";
  grandpaNode.appenChild(node);
  node.appenChild(label);
  node.appenChild(input);
}

function createDeleteButton(){
  parentNode = document.getElementById('items-div');
  node = document.createElement('button');
  node.className = "btn-delete";
  parentNode.appenChild(node);
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  parentNode = document.getElementById('items-div');
  node = document.createElement('div');
  node.className = "item-row";
  parentNode.appendChild(node);
}

function createNewItem(){
  parentNode = document.getElementById('new-item');
  parentNode.appendChild('button');
  createQuantityInput();
  createDeleteButton();
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
