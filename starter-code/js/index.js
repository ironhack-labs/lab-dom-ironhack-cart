function deleteItem(e) {
	console.log(e);
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
