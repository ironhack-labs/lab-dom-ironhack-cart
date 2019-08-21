function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  for(let $product of document.getElementsByClassName('product')){
    const $totalOrder = $product.querySelector('.total');
    const $unit = $product.querySelector('.cost');
    const $quantity = $product.querySelector('.qty');

    const unit = parseInt($unit.innerText);
    const quant = parseInt($quantity.value);
    const total = unit * quant
    
   /* const $triggerCalc = document.getElementById('calc-prices-button');
    const $triggerDel = document.getElementById('btn-delete');
    const $totalOrder = document.getElementById('total1');
    const $unit = document.getElementById('costUnit1');
    const $quantity = document.getElementById('qty1');

    const unit = parseInt($unit.innerText);
    const quant = parseInt($quantity.value);
    const total = unit * quant;
    */
    $totalOrder.innerText = total;
  }
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

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};