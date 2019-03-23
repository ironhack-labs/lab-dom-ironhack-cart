function deleteItem(e) {

}

function getPriceByProduct(itemNode) {
    var price = document.querySelector(itemNode).innerHTML;
    return parseFloat(price.substring(1))
}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
    var qty = parseInt(document.querySelector("#quantity1").value);
    console.log(qty)
    var price = getPriceByProduct("#price1");
    console.log(price)
    document.querySelector("#total1").innerHTML = `${qty*price}`
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

window.onload = function() {
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    //     var deleteButtons = document.getElementsByClassName('btn-delete');

    calculatePriceButton.onclick = getTotalPrice;
    //     createItemButton.onclick = createNewItem;

    //     for (var i = 0; i < deleteButtons.length; i++) {
    //         deleteButtons[i].onclick = deleteItem;
    //     }
};