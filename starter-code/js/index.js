function deleteItem(e) {

    var product = e.currentTarget.parentNode;
    // Con esta variable recojo a través de e.currentTarget, que recoge un evento, dame el nodo padre
    var parent = product.parentNode;
    // Esto es lo mismo que la línea de arriba,nos dice que le demos el nodo padre de product(variable de arriba)
    var garbage = parent.removeChild(product);
    // Con essta variable, nos dice que donde se dio el evento, quítame el hijo (en este caso es product)



    getTotalPrice();

    //console.log(garbage);
}


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
    products[products.length - 1].getElementsByClassName("price")[0].innerHTML = itemUnitPrice;
    products[products.length - 1].getElementsByClassName("name")[0].innerHTML = itemName;
    products[products.length - 1].getElementsByClassName("quantity")[0].value = "";
    products[products.length - 1].getElementsByClassName("total")[0].innerHTML = 0;


    //update deleteButtons
    deleteButtons = document.getElementsByClassName('btn-delete');
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = deleteItem;
    }


}

function createNewItem() {

    var newName = document.getElementById("addname").value;
    var newPrice = document.getElementById("addprice").value;
    createNewItemRow(newName, newPrice);


}

window.onload = function() {
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');


    calculatePriceButton.onclick = getTotalPrice;
    createItemButton.onclick = createNewItem;

    var uniqueProduct = document.getElementById("uniqueProduct");

    for (var i = 1; i < deleteButtons.length; i++) {

        deleteButtons[i].onclick = deleteItem;
    }
}






//     var quantity = quantity[0].valueAsNumber;
//     //console.log(quantity);
//     console.log(quantity[0].valueAsNumber);

//     var price1 = price[0].innerText;
//     var total = parseInt(price1) * quantity1;
//     console.log(total);
//     totalPrices += parseInt(total[i].innerHtml);
//     var preciototal = totalPrices.textContent = total;
// }