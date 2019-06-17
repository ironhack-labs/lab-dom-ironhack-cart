function deleteItem(e) {
	e.currentTarget.parentNode.parentNode.remove();
}

function getPriceByProduct(itemNode) {
	let price = Number(itemNode.children[1].children[0].innerHTML.split('$')[1]);
	let quantity = Number(itemNode.children[2].children[1].value);
	return price * quantity;
}

function updatePriceByProduct(productPrice, index) {
	let itemsQuantityPrice = document.getElementsByClassName('quantity-price');
	let itemsQuantityPriceArray = [...itemsQuantityPrice];
	itemsQuantityPriceArray[index].innerHTML = `$${productPrice}`;
}

function getTotalPrice() {
	let items = document.getElementsByClassName('item');
	let itemsArray = [...items];

	itemsArray.forEach((item, index) => {
		updatePriceByProduct(getPriceByProduct(item), index);
	});

	let totalPrice = itemsArray.reduce(function(acumulator, currentValue) {
		return (
			acumulator +
			Number(currentValue.children[3].children[0].innerHTML.split('$')[1])
		);
	}, 0);
	let parent = document.getElementById('total-price');
	parent.innerHTML = `Total Price: <span> $${totalPrice}</span>`;
}

function createQuantityInput() {
	let inputElement = document.createElement('input');
	inputElement.setAttribute('class', 'item-quantity');
	inputElement.setAttribute('type', 'number');
	return inputElement;
}

function createDeleteButton() {
	let div = createItemNode('div', '');
	let button = createItemNode('button', 'Delete');
	button.classList = 'btn btn-delete';
	div.appendChild(button);
	return div;
}

function createQuantityNode() {
	let quantityDiv = createItemNode('div', '');
	let label = createItemNode('label', 'QTY');
	let input = createQuantityInput();
	quantityDiv.appendChild(label);
	quantityDiv.appendChild(input);
	return quantityDiv;
}

function createItemNode(dataType, itemData) {
	let element = document.createElement(dataType);
	element.innerHTML = itemData;
	return element;
}

function createNewItemRow(itemName, itemUnitPrice) {
	let items = document.getElementById('items');
	let row = createItemNode('div', '');

	row.classList = 'item center';
	row.appendChild(createItemNode('div', `<span>${itemName}</span>`));
	row.appendChild(
		createItemNode(
			'div',
			`<span class='item-price'>$${itemUnitPrice.toFixed(2)}</span>`,
		),
	);
	row.appendChild(createQuantityNode());
	row.appendChild(
		createItemNode('div', `<span class='quantity-price'>$0</span>`),
	);
	row.appendChild(createDeleteButton());
	items.appendChild(row);
}

function createNewItem() {
	let itemName = document.getElementById('itemName').value;
	let itemUnitPrice = Number(document.getElementById('itemPrice').value);
	createNewItemRow(itemName, itemUnitPrice);

	var deleteButtons = document.getElementsByClassName('btn-delete');

	for (var i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].onclick = deleteItem;
	}
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
