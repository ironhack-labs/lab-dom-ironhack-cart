function deleteItem(e) {
  
   var uniqueProduct = document.getElementById("uniqueProduct");
       
    var product = e.currentTarget.parentNode;
    var parent = product.parentNode;
    var garbage = parent.removeChild(product);
  
    getTotalPrice();
}

    //console.log(garbage);


function getTotalPrice() {
    var bigTotal = 0;
    var prices = document.getElementsByClassName("price");
    var quantities = document.getElementsByClassName("quantity");
    var totals = document.getElementsByClassName("total");
    for (var i = 0; i < prices.length; i++) {
        totals[i].innerHTML = prices[i].innerHTML * quantities[i].value;
        bigTotal += parseInt(totals[i].innerHTML);
    }
    var element = document.getElementById("bigTotal");
    element.innerHTML = bigTotal;

}

function createNewItemRow(itemName, itemUnitPrice) {

    var product = document.getElementsByClassName("product")[0];
    var prodCopy = product.cloneNode(true);

    var parent = document.getElementsByClassName('box')[0];
    var next = document.getElementById("add");
    var insertedElement = parent.insertBefore(prodCopy, next);
    var products = document.getElementsByClassName("product");
    products[products.length - 1]
        .getElementsByClassName("price")[0]
        .innerHTML = itemUnitPrice;
    products[products.length - 1]
        .getElementsByClassName("name")[0]
        .innerHTML = itemName;
    products[products.length - 1]
        .getElementsByClassName("quantity")[0]
        .value = "";
    products[products.length - 1]
        .getElementsByClassName("total")[0]
        .innerHTML = 0;

    //update deleteButtons
    deleteButtons = document.getElementsByClassName('btn-delete');
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = deleteItem;
    }

}

function createNewItem() {

    var newName = document
        .getElementById("addname")
        .value;
    var newPrice = document
        .getElementById("addprice")
        .value;
    createNewItemRow(newName, newPrice);

}

window.onload = function () {
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');

    calculatePriceButton.onclick = getTotalPrice;
    createItemButton.onclick = createNewItem;
   
    for (var i = 1; i < deleteButtons.length; i++) {

      deleteButtons[i].onclick = deleteItem;
      }
        
        
    
  };
