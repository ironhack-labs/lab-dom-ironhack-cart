function deleteItem(event) {
    var triggerElement = event.currentTarget;
    var productContainer = triggerElement.parentElement.parentElement;
    productContainer.parentElement.removeChild(productContainer);
}

function getPriceByProduct(itemNode) {
    var priceByProduct = [];
    for (var i = 0; i < itemNode.length; i++) {
        var price = itemNode[i].children[1].firstElementChild.innerHTML;
        priceByProduct.push(price);
    }

    return priceByProduct;
}

function getQuantityByProduct(itemNode) {
    var quantityByProduct = [];
    for (var i = 0; i < itemNode.length; i++) {
        quantityByProduct.push(itemNode[i].children[2].children[1].value);
    }

    return quantityByProduct;
}

function updatePriceByProduct(productPrice, productQuantity) {
    if (productPrice.length == productQuantity.length) {
        var totalPriceByProduct = [];
        for (var i = 0; i < productPrice.length; i++) {
            totalPriceByProduct.push(productPrice[i] * productQuantity[i]);
        }

        return totalPriceByProduct;
    }
}

function getTotalPrice() {
    var products = document.getElementsByClassName('product');
    var totalPrice = document.getElementById('calculate-total-price');

    if (products.length != 0) {
        var unitCosts = getPriceByProduct(products);
        var quantityProducts = getQuantityByProduct(products);
        var totalPriceProduct = updatePriceByProduct(unitCosts, quantityProducts);

        // Calculate total price for each product.
        if (products.length == totalPriceProduct.length) {
            for (var i = 0; i < products.length; i++) {
                products[i].children[3].firstElementChild.innerHTML = totalPriceProduct[i].toFixed(2);
            }
        }

        // Calculate cart total price.
        var calculateTotalPrice = totalPriceProduct.reduce(function(previousPrice, currentPrice) {
            return previousPrice + currentPrice;
        });
        totalPrice.firstElementChild.firstElementChild.innerHTML = calculateTotalPrice.toFixed(2);
    } else {
        var zeroPrice = 0.00;
        totalPrice.firstElementChild.firstElementChild.innerHTML = zeroPrice.toFixed(2);
    }
}

function createQuantityInput(inputId, inputName) {
    var inputDiv = document.createElement('div');
    inputDiv.setAttribute('class', 'quantity col-5');
    inputDiv.innerHTML = '<label>QTY</label>';
    inputDiv.innerHTML += '<input type="text" placeholder="0">';

    return inputDiv;
}

function createDeleteButton() {
    var deleteButtonDiv = document.createElement('div');
    deleteButtonDiv.setAttribute('class', 'delete col-5');
    deleteButtonDiv.innerHTML = '<button class="btn btn-delete" type="button" name="delete">Delete</button>';

    return deleteButtonDiv;
}

function createQuantityNode() {
    var quantityDiv = document.createElement('div');
    quantityDiv.setAttribute('class', 'total-cost col-5');
    quantityDiv.innerHTML = '$<span>0.00</span>';

    return quantityDiv;
}

function createItemNode(itemName, itemUnitPrice) {
    var productNameDiv = document.createElement('div');
    productNameDiv.setAttribute('class', 'product-name col-5');
    productNameDiv.innerHTML = '<span>' + itemName + '</span>';

    var productUnitPriceDiv = document.createElement('div');
    productUnitPriceDiv.setAttribute('class', 'unit-cost col-5');
    productUnitPriceDiv.innerHTML = '$<span>' + parseFloat(itemUnitPrice).toFixed(2) + '</span>';

    var elements = [productNameDiv, productUnitPriceDiv];
    return elements;
}

function createNewItemRow(itemRowElements) {
    var productDiv = document.createElement('div');
    productDiv.setAttribute('class', 'product');
    for (var i = 0; i < itemRowElements.length; i++) {
        productDiv.appendChild(itemRowElements[i]);
    }

    return productDiv;
}

function createNewItem() {
    var itemName = document.getElementById('new-product-name');
    var itemUnitPrice = document.getElementById('new-product-cost');

    if (itemName.value != "" && !isNaN(parseFloat(itemUnitPrice.value))) {
        var itemNode = createItemNode(itemName.value, itemUnitPrice.value);
        var productName = itemNode[0];
        var productUnitPrice = itemNode[1];
        var quantityInput = createQuantityInput();
        var quantityNode = createQuantityNode();
        var deleteButton = createDeleteButton();
        var newItemRowDivs = [productName, productUnitPrice, quantityInput, quantityNode, deleteButton];

        var productDiv = createNewItemRow(newItemRowDivs);
        var productList = document.getElementsByClassName('product-list');
        productList[0].appendChild(productDiv);

        addDeleteButtonListener();
    }

    itemName.value = "";
    itemUnitPrice.value = "";
}

function addDeleteButtonListener() {
    var deleteButtons = document.getElementsByClassName('btn-delete');

    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = deleteItem;
    }
}

window.onload = function() {
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');

    calculatePriceButton.onclick = getTotalPrice;
    createItemButton.onclick = createNewItem;

    addDeleteButtonListener();
};
