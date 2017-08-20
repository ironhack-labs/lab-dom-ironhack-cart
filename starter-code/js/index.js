function deleteItem(e) {}

function updatePriceByProduct(productPrice, index) {}

function getPriceByProduct(itemNode) {
	var prodPrice = parseFloat((itemNode.children[1].children[0].innerHTML).slice(1))
	var quantPrice = parseFloat(itemNode.children[2].children[1].value)
	var total = itemNode.children[3].children[0]
	total.innerHTML = "$" + prodPrice * quantPrice + ".00"
}

function getTotalPrice() {
	var product = document.getElementsByClassName('product')
	for (var i = 0; i < product.length; i++) {
		getPriceByProduct(product[i])
	}
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function () {
	var calculatePriceButton = document.getElementById('calc-prices-button')
	var createItemButton = document.getElementById('new-item-create')
	var deleteButtons = document.getElementsByClassName('btn-delete')

	calculatePriceButton.onclick = getTotalPrice
	//createItemButton.onclick = createNewItem

	for (var i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].onclick = deleteItem
	}
}
