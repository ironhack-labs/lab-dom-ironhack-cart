function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
    var invoiceItems = document.getElementsByClassName('invoiceItems');
    var qty = document.getElementsByTagName('input').value;
    //console.log(invoiceItems);
    
    console.log(qty);
}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('btn-success');
    var createItemButton = document.getElementById('new-item-create');
	var deleteButtons = document.getElementsByClassName('btn-delete');

	calculatePriceButton.onclick = getTotalPrice();
    createItemButton.onclick = createNewItem();

    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = deleteItem;
    }
};