function deleteItem(e){

}

function getPriceByProduct(itemNode){
    var priceByProduct = [];
    for (var i = 0; i < itemNode.length; i++) {
        var price = itemNode[i].children[1].firstElementChild.innerHTML;
        //console.log(itemNode[i].children[1].firstElementChild.innerHTML);
        priceByProduct.push(price);
    }
    //console.log(priceByProduct);
    return priceByProduct;
}

function getQuantityByProduct(itemNode) {
    var quantityByProduct = [];
    for (var i = 0; i < itemNode.length; i++) {
        quantityByProduct.push(itemNode[i].children[2].children[1].value);
        //console.log(itemNode[i].children[2].children[1].value);
    }
    //console.log(quantityByProduct);
    return quantityByProduct;
}

function updatePriceByProduct(productPrice, productQuantity){
    if (productPrice.length == productQuantity.length) {
        var totalPriceByProduct = [];
        for (var i = 0; i < productPrice.length; i++) {
            totalPriceByProduct.push(productPrice[i] * productQuantity[i]);
        }
        return totalPriceByProduct;
    }
}

function getTotalPrice() {
    // Calculate total price for each product.
    var products = document.getElementsByClassName('product');
    //console.log(products[0].children);
    var unitCosts = getPriceByProduct(products);
    var quantityProducts = getQuantityByProduct(products);
    var totalPriceProduct = updatePriceByProduct(unitCosts, quantityProducts);

    if (products.length == totalPriceProduct.length) {
        for (var i = 0; i < products.length; i++) {
            //console.log(products[i].children[3].firstElementChild.innerHTML);
            products[i].children[3].firstElementChild.innerHTML = totalPriceProduct[i].toFixed(2);
        }
    }

    // Calculate cart total price.
    var totalPrice = document.getElementById('calculate-total-price');
    //console.log(totalPrice.firstElementChild.firstElementChild.innerHTML);
    var calculateTotalPrice = totalPriceProduct.reduce(function(previousPrice, currentPrice) {
        return previousPrice + currentPrice;
    });
    //console.log(totalPrice.firstElementChild);
    totalPrice.firstElementChild.firstElementChild.innerHTML = calculateTotalPrice;
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
