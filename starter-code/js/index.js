function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
   var qty = document.getElementsByTagName('input').value;
   console.log(qty);
}

function createQuantityInput() {
   return (`<div><label for = 'quantity'> QTY </label>
            <input type = 'number' ></div>`);
}

function createDeleteButton() {
    return (`<div><button class='btn-delete btn' type='submit'>
            delete</button></div>`);
}

function createQuantityNode() {
 
}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {
    return test = (`<div> <span>${itemName}</span></div><div><span>${itemUnitPrice}</span></div>
                    ${createQuantityInput()}<div ><span> $0 .00 </span></div>${createDeleteButton()}`);
}

function createNewItem() {
var invoiceItems = document.getElementsByClassName('invoiceItems');
    var newItemInvoice=createNewItemRow('test', '25.00');
    console.log(invoiceItems);
    console.log(newItemInvoice);
    //invoiceItems.appendChild(newItemInvoice);
}

window.onload = function () {
    var calculatePriceButton = document.getElementsByClassName('btn-success');
    var createItemButton = document.getElementsByClassName('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');

    calculatePriceButton.onClick = getTotalPrice();
    createItemButton.onClick = createNewItem();

    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onClick = deleteItem;
    }
};