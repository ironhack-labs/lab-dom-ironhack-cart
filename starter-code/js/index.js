function deleteItem(e) {
    var productDiv = e.currentTarget.parentElement.parentElement;
    productDiv.innerHTML = '';
}

// function getPriceByProduct(itemNode) {}

// function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
    var priceArr = Array.from(document.getElementsByClassName('product-price'));
    var quantityArr = Array.from(document.getElementsByClassName('quantity'));
    var productTotalArr = Array.from(document.getElementsByClassName('product-total'));
    var total = document.getElementById('total');

    for (var i = 0; i < priceArr.length; i++) {
        var priceElement = priceArr[i].innerHTML;
        var price = parseFloat(priceElement.substr(1));
        var quantityElement = quantityArr[i].value;
        productTotalArr[i].innerHTML = '$' + (price * quantityElement).toFixed(2);
    }

    var sumForEachProductArr = Array.from(document.getElementsByClassName('product-total'));

    var sum = sumForEachProductArr.reduce(function(acc, curr) {
        curr = curr.innerHTML;
        curr = parseFloat(curr.substr(1));
        return acc + curr;
    }, 0);

    total.innerHTML = '$' + sum.toFixed(2);
}

// function createQuantityInput() {}

// function createDeleteButton() {}

// function createQuantityNode() {}

// function createItemNode(dataType, itemData) {}

// function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {
    var newItemName = document.getElementById('new-prod-name').value;
    var newItemPrice = document.getElementById('new-prod-price').value;

    if (newItemName !== '' && newItemPrice !== NaN) {
        var itm = document.getElementById('product-row');

        var cln = itm.cloneNode(true);
        cln.removeAttribute('id');

        var nameChange = Array.from(cln.getElementsByClassName('product-name'));
        nameChange[0].innerHTML = newItemName;

        var priceChange = Array.from(cln.getElementsByClassName('product-price'));
        priceChange[0].innerHTML = '$' + parseFloat(newItemPrice).toFixed(2);

        var deleteButton = cln.getElementsByClassName('btn-delete');
        deleteButton[0].onclick = deleteItem;

        var getParent = Array.from(document.getElementsByTagName('body'));

        var lastChild = document.getElementById('new-prod');

        getParent[0].insertBefore(cln, lastChild);

        document.getElementById('new-prod-name').value = '';
        document.getElementById('new-prod-price').value = '';
    }
}

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
