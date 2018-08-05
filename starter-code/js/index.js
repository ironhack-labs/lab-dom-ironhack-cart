function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
    var unitCost = document.querySelectorAll('.unit-cost'); //retrieves unit price
    var totalCostEl = document.querySelectorAll('.total-cost'); //retrieves total cost
    // var cartItem = Array.from(document.querySelectorAll('.cart-item'));
    var unitQuantity = document.querySelectorAll('.input-qty input');
    // console.log(unitQuantity);
    var curTotal = 0;

    totalCostEl.forEach(function() {});

    totalCostEl.innerHTML = parseFloat(unitCost.innerHTML) * unitQuantity.value; //it works querySelector - DO NOT DELETE***
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
