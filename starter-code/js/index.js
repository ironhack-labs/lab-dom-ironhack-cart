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
    var unitQuantity = Array.from(document.querySelectorAll('.input-qty'));
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

function createNewItem() {
    var itemNameInput = document.querySelector('input.input-item-name');
    var itemPrice = document.querySelector('input.input-price');
    var cartItemsArr = document.querySelector('.all-carts');

    // itemNameInput.value; //value of first input
    // itemPrice.value; //value of second input

    var newCartItem = document.createElement('div');
    newCartItem.classList.add('cart-item');
    console.log(newCartItem);
    cartItemsArr.appendChild(newCartItem);

    //insert before last item of cartItems array

    var newProductName = document.createElement('span');
    newProductName.classList.add('product-name');
    newProductName.innerHTML = itemNameInput.value;
    newCartItem.appendChild(newProductName);

    newQMark = document.createElement('span');
    newQMark.classList.add('currency');
    newQMark.innerHTML = '$';
    newCartItem.appendChild(newQMark);

    var newUnitCost = document.createElement('span');
    newUnitCost.classList.add('unit-cost');
    newUnitCost.innerHTML = itemPrice.value;
    newCartItem.appendChild(newUnitCost);

    var newLabel = document.createElement('label');
    newLabel.setAttribute('for', 'input');
    newLabel.innerHTML = 'QTY';
    newCartItem.appendChild(newLabel);

    var newInput = document.createElement('input');
    newInput.classList.add('input-qty');
    newInput.setAttribute('type', 'number');
    newCartItem.appendChild(newInput);

    newQMark = document.createElement('span');
    newQMark.classList.add('currency');
    newQMark.innerHTML = '$';
    newCartItem.appendChild(newQMark);

    var newTotalCost = document.createElement('span');
    newTotalCost.classList.add('total-cost');
    newTotalCost.innerHTML = '0.00';
    newCartItem.appendChild(newTotalCost);

    var newDeleteBtn = document.createElement('button');
    newDeleteBtn.classList.add('btn-delete');
    newDeleteBtn.innerHTML = 'Delete';
    newCartItem.appendChild(newDeleteBtn);
}

window.onload = function() {
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('create-item');
    var deleteButtons = document.getElementsByClassName('btn-delete');

    calculatePriceButton.onclick = getTotalPrice; //works
    createItemButton.onclick = createNewItem; //uncomment WHEN READY

    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', deleteItem, false);
    }
};
