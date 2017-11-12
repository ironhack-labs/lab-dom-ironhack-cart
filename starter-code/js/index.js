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
	itemNode = document.getElementsByClassName('unit-price');
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
  node.appenChild(label);
  node.appenChild(input);
  grandpaNode.appenChild(node);
}

function createDeleteButton(){
  node = document.createElement("button");
  node.className = "btn-delete";
	return node;
}

function createNameNode(name) {
	nameNode = document.createElement(span)
	nameNode.className = "productName";
	nameNode.innerHTML = name;
	return nameNode;
}

function createPriceNode(price) {
	priceNode = document.createElement(span);
	priceNode.className = "unit-price";
	priceNode.innerHTML = price;
	return priceNode;
}

function createItemRow() {
	var rowNode = document.createElement("div");
	rowNode.className = "item-row";
	var x = document.createElement(createDeleteButton());
	rowNode.appendChild(document.createElement(createDeleteButton()));
	return rowNode;
}

function createQuantityNode(){
	qntNode = document.createElement(div);
	qntNode.className = "quantity-form";
	label = document.createElement(label);
	label.for = "amount";
	label.innerHTML = "QTY";
	input = document.createElement(input);
	input.className = "quantity";
	input.type = "number";
	input.name = "amount"
	qntNode.appendChild(label);
	qntNode.appenChild(input);
	return qntNode;
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  node = document.createElement('div');
  node.className = "item-row";
  return node;
}

function createNewItem(){
  parentNode = document.getElementById('items-div');
	var node = createItemRow();
	parentNode.appendChild(node);
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
