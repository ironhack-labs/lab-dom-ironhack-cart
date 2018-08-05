function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
    var cartItem = Array.from(document.querySelectorAll('.cart-item')); //retrieves unit price
    var unitCost = Array.from(document.querySelectorAll('.unit-cost')); //retrieves unit price
    var totalCostEl = Array.from(document.querySelectorAll('.total-cost')); //retrieves total cost
    var unitQuantity = Array.from(document.querySelectorAll('.input-qty input'));

    for (var i = 0; i < cartItem.length; i++) {
        totalCostEl[i].innerHTML = parseFloat(unitCost[i].innerHTML) * unitQuantity[i].value;
    }

    return totalCostEl;
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
    // createItemButton.onclick = createNewItem;    //uncomment WHEN READY

    for (var i = 0; i < deleteButtons.length; i++) {}
};
