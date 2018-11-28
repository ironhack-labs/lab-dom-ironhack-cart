function deleteItem(e) {
  console.log(`inside delete button`)
}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {
  let qty = document.getElementsByClassName(`quantity`)[index].value;
  let totalPrice = parseFloat(qty) * parseFloat(productPrice);
  let totalPriceElement = document.getElementsByClassName(`price-qty`);
  totalPriceElement[index].innerHTML = totalPrice.toFixed(2);

}

function getTotalPrice() {
  console.log(`inside total price`);
  let prices = document.getElementsByClassName(`price`);
  let pricesArr = [].slice.call(prices);
  let total = 0;
  pricesArr.forEach((price, index) => {
    updatePriceByProduct(price.innerHTML, index);
    let totalPriceByProduct = document.getElementsByClassName(`price-qty`)[index].innerHTML;
    total += parseFloat(totalPriceByProduct);
    console.log(totalPriceByProduct)
  });
  document.getElementById(`total`).innerHTML = total.toFixed(2);
}

// function createQuantityInput() {

// }

// function createDeleteButton() {

// }

// function createQuantityNode() {

// }

// function createItemNode(dataType, itemData) {

// }

// function createNewItemRow(itemName, itemUnitPrice) {

// }

// function createNewItem() {

// }

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
