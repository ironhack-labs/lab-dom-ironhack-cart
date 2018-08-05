function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
    var unitCost = Array.from(document.querySelectorAll('.unit-cost'));
    var unitQuantity = unitCost.length; //retrieves the quantity of items
    var curTotal = 0;

    unitCost.forEach(function(cost) {
        var costVal = parseFloat(cost.innerHTML); //retrieves the unit price of the product
        curTotal += costVal; //calculates total price
    });
    return curTotal;
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

    calculatePriceButton.onclick = getTotalPrice; //works
    createItemButton.onclick = createNewItem;

    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = deleteItem;
    }
};
