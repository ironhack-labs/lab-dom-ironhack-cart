function deleteItem(e) {
  var deleteBtn = e.currentTarget;
  deleteBtn.parentNode.parentNode.remove();
}

function getPriceByProduct() {
  var itemUnitPrice = parseFloat(document.getElementsByClassName('item-unit-price')["0"].innerText);
  var quantity = parseInt(document.getElementsByClassName('qty')["0"].value);
  var totalPriceProduct = itemUnitPrice * quantity;
  console.log(totalPriceProduct);
  return totalPriceProduct;
}

function updatePriceByProduct(productPrice) {
  console.log("entro");
  var result = getPriceByProduct();
  console.log(result);
  var totalPrice = document.getElementsByClassName('total-price');
  totalPrice.innerHTML = totalPriceProduct;
}

function getTotalPrice() {
 getPriceByProduct();
 console.log("aa");
}

function createQuantityInput() {

}

function createDeleteButton() {document.getElementsByClassName('total-price');

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice();
  // createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
