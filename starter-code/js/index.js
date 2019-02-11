/*var products = [
    { item: "IronBubble-head", price: "$25.00" },
    { item: "IronShirt", price: "$15.00" },
    { item: "IronCup", price: "$10.00" },
    { item: "IronStciker", price: "$1.00" },
    { item: "IronAxe", price: "$100.00" }

]
*/



//var price = document.getElementById("cost");
//console.log(price)

function deleteItem(e) {

}

function getPriceByProduct(itemNode) {
    var itemNode = document.getElementById("cost")
    itemNode.innerText = productPriceNumber1
    return itemNode
}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
    var productPrice1 = document.getElementById("price").innerText;

    var productPriceSelector1 = productPrice1.substring(1, productPrice1.length)

    var productPriceNumber1 = parseInt(productPriceSelector1)
    var quantityProduct1 = document.getElementById("quantity").value

    var total = productPriceNumber1 * quantityProduct1;


    document.getElementById("cost").innerHTML = total

    //console.log(typeof(productPriceNumber1))

}

function createQuantityInput() {
    var productQuantity = document.getElementById("quantity").value
    var quantityProduct = parseInt(productQuantity)
    console.log(quantityProduct)
    return quantityProduct


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

/*
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
*/