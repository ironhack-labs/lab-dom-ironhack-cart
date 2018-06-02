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
    var newDiv = document.createElement("div");
    var newLabel = document.createElement("label");
    var newInput = document.createElement("input");

    newLabel.setAttribute("for", "quantity");
    newLabel.setAttribute("name", "QTY");
    newInput.setAttribute("type", "number");
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);
    return newDiv;
    //<div><label for = "quantity"> QTY </label><input type = "number"></div>
}

function createDeleteButton() {
    var newDiv = document.createElement("div");
    var newButton = document.createElement("button");

    newButton.setAttribute("class", "btn-delete");
    newButton.setAttribute("type", "submit");
    newButton.setAttribute("name", "delete");
    newDiv = appendChild(newButton);
    return newDiv;

    //<div><button class="btn-delete btn" type="submit">delete</button></div>)
}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {
    var newDiv = document.createElement("div");
    var newSpan = document.createElement("span");

    return newDiv;
    //<div> <span>itemName</span></div>
    //<div><span>{itemUnitPrice</span></div>
    //<div ><span> 0 .00 </span > < /div>
}

function createNewItem() {
    var invoiceItems = document.getElementsByClassName('invoice-items');
    var newDiv = document.createElement("div");

    newDiv.appendChild(createNewItemRow("test", "25.00"));
    // newDiv.appendChild();
    newDiv.appendChild(createDeleteButton());


    console.log(invoiceItems);

    invoiceItems.appendChild(newDiv);
}
window.onload = function () {
    var calculatePriceButton = document.getElementsByClassName('btn-success');
    var createItemButton = document.getElementsByClassName('btn-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');

    calculatePriceButton.onClick = getTotalPrice();
    createItemButton.onClick = createNewItem();

    for (let Button of  deleteButtons) {
        Button.onClick = deleteItem();
    }
};