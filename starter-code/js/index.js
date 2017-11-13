
function deleteItem(e){
	var node = e.currentTarget.parentNode;
  node.parentNode.removeChild(node);
}

function getPriceByProduct(itemNode){
	return parseInt(itemNode.innerHTML.replace("$",""));
}

function updatePriceByProduct(productPrice, index){
	var totalItems = document.getElementsByClassName('quantity');
	var totalPrice = document.getElementsByClassName('price');
	if(totalItems[index].value >= 0){
		totalPrice[index].innerHTML = "$" + (totalItems[index].value * productPrice).toFixed(2);
	} else totalPrice[index].innerHTML = "$0.00";
	return parseInt(totalPrice[index].innerHTML.replace("$",""));
}

function getTotalPrice() {
	var itemNode = document.getElementsByClassName('unit-price');
	var totalMoney = 0;
	for(var i = 0; i < itemNode.length; i++){
		totalMoney += updatePriceByProduct(getPriceByProduct(itemNode[i]), i);
	}
	var totalMoneyNode = document.getElementById('total-price');
	totalMoneyNode.innerHTML = totalMoney.toFixed(2);
}

function createQuantityInput(){
  var qtyNode = document.createElement('div');
  qtyNode.className = "quantity-form";
  var label = document.createElement('label');
  label.innerHTML = "QTY";
	label.for = "amount";
  var input = document.createElement('input');
  input.type = "number";
  input.value = 0;
  input.className = "quantity";
	input.name = "amount";
  qtyNode.appendChild(label);
  qtyNode.appendChild(input);
	return qtyNode;
}

function createResultNode() {
	var result = document.createElement('span');
	result.className = "price";
	result.innerHTML = "$0.00";
	return result;
}

function createDeleteButton(){
  var deleteBtn = document.createElement('button');
  deleteBtn.className = "btn-delete";
	deleteBtn.innerHTML = "Delete";
	deleteBtn.onclick = deleteItem;
	return deleteBtn;
}

function createNameNode(name) {
	var nameNode = document.createElement('span')
	nameNode.className = "productName";
	nameNode.innerHTML = name;
	return nameNode;
}

function createPriceNode(price) {
	var priceNode = document.createElement('span');
	priceNode.className = "unit-price";
	priceNode.innerHTML = price;
	return priceNode;
}

function createNamePriceDiv() {
	var nameText = document.getElementById("item-name");
	var priceText = document.getElementById("item-price");
	priceText = parseInt(priceText.value.replace("$","")).toFixed(2);
	var namePriceDiv = document.createElement('div');
	namePriceDiv.className = "item-row";
	namePriceDiv.appendChild(createNameNode(nameText.value));
	namePriceDiv.appendChild(createPriceNode("$" + priceText));
	return namePriceDiv;
}

function createQuantityNode(){
	var qntNode = document.createElement(div);
	qntNode.className = "quantity-form";
	var label = document.createElement(label);
	label.for = "amount";
	label.innerHTML = "QTY";
	var input = document.createElement(input);
	input.className = "quantity";
	input.type = "number";
	input.min = "0";
	input.name = "amount"
	qntNode.appendChild(label);
	qntNode.appenChild(input);
	return qntNode;
}

function createItemRow() {
	var rowNode = document.createElement("div");
	rowNode.className = "item";
	rowNode.appendChild(createNamePriceDiv());
	rowNode.appendChild(createQuantityInput());
	rowNode.appendChild(createResultNode());
	rowNode.appendChild(createDeleteButton());
	return rowNode;
}

function createNewItem(){
  var parentNode = document.getElementById('items-div');
	var divNode = createItemRow();
	if(divNode.childNodes[0].childNodes[0].innerHTML && divNode.childNodes[0].childNodes[1].innerHTML!=="$NaN"){
		parentNode.appendChild(divNode);
	}
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
