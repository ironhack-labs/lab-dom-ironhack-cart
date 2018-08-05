function deleteItem(e) {
    var deletBtn = e.currentTarget.parentNode; //targets parent of delete btn
    deletBtn.parentNode.removeChild(deletBtn); //deletes parent of delete btn
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
    var cartItem = Array.from(document.querySelectorAll('.cart-item')); //retrieves unit price
    var unitCost = Array.from(document.querySelectorAll('.unit-cost')); //retrieves unit price
    var totalCostEl = Array.from(document.querySelectorAll('.total-cost')); //retrieves total cost
    var unitQuantity = Array.from(document.querySelectorAll('.input-qty input'));
    var totalPrice = document.querySelector('#total-price');
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;

    //HOW TO DO WITH FOR EACH?
    var calcTotal = 0;
    for (var i = 0; i < cartItem.length; i++) {
        totalCostEl[i].innerHTML = unitCost[i].innerHTML * unitQuantity[i].value;
        calcTotal += parseFloat(totalCostEl[i].innerHTML); //how to do with reduce method??
    }

    totalPrice.innerHTML = calcTotal; //calculates the total cost of all items in cart

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

    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', deleteItem, false);
    }
};
