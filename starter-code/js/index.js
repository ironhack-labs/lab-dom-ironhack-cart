function deleteItem(e) {

}

function getPriceByProduct(itemNode) {
    return document.querySelectorAll(itemNode)[0].innerHTML;

}

function updatePriceByProduct(productPrice, index) {
    document.querySelector('')
}

function getTotalPrice() {

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

// window.onload = function(){
var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

// calculatePriceButton.onclick = getTotalPrice();
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };

// function getTotalPrice() {
//     document.querySelectorAll('.product').forEach(function (product) {
//         unitCost = document.querySelector('.unit-cost').innerHTML;
//         quantity = document.querySelector('.quantity').innerHTML;
//         document.querySelector('.total-price').innerHTML = unitCost * quantity;
//     })
// };

// function repeatProduct() {
//     document.querySelector('body').innerHTML += "\n<br>\n" + document.querySelector('.product-container').innerHTML
// }   

function addProduct() {

    let prodId = document.querySelectorAll('.product').length;

    let randomQty = Math.floor(Math.random() * 10)

    let prodName = document.querySelector('#product-name-input').value;
    let prodCost = document.querySelector('#product-cost-input').value;

    newProduct = `<div class="product p${prodId}">
    <div>
      <span class="product-name">${prodName}${prodId}</span>
    </div>
    <div>
      <span class="unit-cost">$${prodCost}</span>
    </div>
    <div class="quantity">
      <label for="units">QTY</label>
      <input name="units" type="text" placeholder="0" value="${randomQty}">
    </div>
    <div>
      <span class="total-price">0</span >
    </div >
        <div class="">
            <button onclick="deleteRow(${prodId})" class="btn-delete p${prodId}">Delete</button>
        </div>`
    document.querySelector('.product-container').innerHTML += newProduct
}

function updatePrices() {

    if (document.querySelectorAll('.product').length === 0) return;

    let products = document.querySelectorAll('.product');
    let grandTotal = 0;
    for (i = 0; i < products.length; i++) {
        document.querySelectorAll('.total-price')[i].innerHTML = `$${parseFloat(document.querySelectorAll('.unit-cost')[i].innerHTML.slice(1)) * parseFloat(document.querySelectorAll('.quantity input')[i].value)}`;
        grandTotal += parseFloat(document.querySelectorAll('.unit-cost')[i].innerHTML.slice(1)) * parseFloat(document.querySelectorAll('.quantity input')[i].value);
    }
    document.querySelector('#grand-total').innerHTML = `Grand Total: $${grandTotal}`;
}

function deleteRow(prodId) {
    document.querySelector('.product-container').removeChild(document.querySelector(`.product.p${prodId}`));
}