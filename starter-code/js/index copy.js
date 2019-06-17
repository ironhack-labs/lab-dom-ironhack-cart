function deleteItem(e) {
	console.log(e);
	e.currentTarget.parentNode.parentNode.parentNode.removeChild(
		e.currentTarget.parentNode.parentNode,
	);
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {
	var quantityPrice = document.getElementsByClassName('quantity-price');
	quantityPrice[index].innerHTML = `$${productPrice}`;
}

function getTotalPrice() {
	var itemPrice = document.getElementsByClassName('item-price');
	var itemQuantity = document.getElementsByClassName('item-quantity');
	var total = 0;
	for (var i = 0; i < itemPrice.length; i++) {
		total += itemPrice[i].innerHTML.split('$')[1] * itemQuantity[i].value;
		updatePriceByProduct(
			itemPrice[i].innerHTML.split('$')[1] * itemQuantity[i].value,
			i,
		);
	}

	let totalPrice = document.createElement('h2');
	totalPrice.classList.add('center__price');
	totalPrice.innerHTML = `Total Price: <span> $${total}</span>`;
	let parent = document.getElementsByTagName('body')[0];
	parent.appendChild(totalPrice);
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {
	let parent = document.getElementsByClassName('item');
	console.log(parent.length);
	// var element = document.createElement(dataType);
	// element.innerHTML = `<span>${itemData}</span>`;
	// if (typeof itemData === 'number') {
	// 	element.firstChild.className = 'item-price';
	// }
	// parent.appendChild(element);
}

function createNewItemRow(itemName, itemUnitPrice) {
	createItemNode('div', itemName);
	createItemNode('div', itemUnitPrice);
	createQuantityInput();
	createQuantityNode();
	createDeleteButton();
}

function createNewItem() {
	var itemName = document.getElementById('itemName').value;
	var itemPrice = parseInt(document.getElementById('itemPrice').value);
	createNewItemRow(itemName, itemPrice);
}

window.onload = function() {
	var calculatePriceButton = document.getElementById('calc-prices-button');
	var createItemButton = document.getElementById('new-item-create');
	var deleteButtons = document.getElementsByClassName('btn-delete');

	calculatePriceButton.onclick = getTotalPrice;
	createItemButton.onclick = createNewItem;

	for (var i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].onclick = deleteItem;
	}
};
