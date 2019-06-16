function deleteItem(e) {
	console.log(e);
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
	var items = document.getElementById('items');
	var itemPrice = document.getElementsByClassName('item-price');
	var itemQuantity = document.getElementsByClassName('item-quantity');

	console.log(items.children);

	// for (var i = 0; i < itemPrice.length; i++) {
	// 	console.log(itemPrice[i].innerHTML.split('$')[1]);
	// 	console.log(itemQuantity[i].value);
	// }

	// itemPrice.forEach((item, index) => {
	// 	console.log(itemPrice[index].innerHTML);
	// 	console.log(itemQuantity[index].value);
	// });
	// var itemsPrice = itemPrice.value
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
	var calculatePriceButton = document.getElementById('calc-prices-button');
	var createItemButton = document.getElementById('new-item-create');
	var deleteButtons = document.getElementsByClassName('btn-delete');

	calculatePriceButton.onclick = getTotalPrice;
	// createItemButton.onclick = createNewItem;

	for (var i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].onclick = deleteItem;
	}
};
