function deleteItem(e) {
  var deleteBtn = e.currentTarget;
  deleteBtn.parentNode.parentNode.remove();
}

function getPriceByProduct() {
  var itemUnitPrice = parseFloat(document.getElementsByClassName('item-unit-price')["0"].innerText);
// console.log(itemUnitPrice);
  var quantity = parseInt(document.getElementsByClassName('qty')["0"].value);
// console.log(quantity);
  var totalPriceProduct = itemUnitPrice * quantity;
  // console.log(totalPriceProduct);
  return totalPriceProduct;
}

function updatePriceByProduct() {
  var result = getPriceByProduct();
 // console.log(result);
// debugger
  var totalPrice = document.getElementsByClassName('total-price')["0"];

  // console.log(totalPrice);
totalPrice.innerText = result;
}

function getTotalPrice() {
// return updatePriceByProduct(getPriceByProduct());

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



 calculatePriceButton.onclick = updatePriceByProduct;
  // createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
