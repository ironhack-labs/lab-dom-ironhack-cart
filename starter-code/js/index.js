function deleteItem(e) {
  // console.log(e);
  // console.log(e.currentTarget);
  // deleteTarget (2 higher: product-wrapper) + parent of deleteTarget (3 higher: wrapper)
  // e.currentTarget takes the current element of the click event listener (e)
  var deleteTarget = e.currentTarget.parentNode.parentNode;
  var parent = e.currentTarget.parentNode.parentNode.parentNode;
  // remove child (product-wrapper)
  parent.removeChild(deleteTarget);
  // recalculate order price after deleting an item
  getTotalPrice();
}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  var orderTotal = 0;
  for (i = 0; i < document.getElementsByClassName("product-wrapper").length; i++) {
    // retreive the value 25 with innerHTML (instead of <span>25</span>)
    var productCost = document.getElementsByClassName("product-cost")[i].innerHTML;
    // input form has no innerHTML but a value
    var productQuantity = document.getElementsByClassName("product-quantity")[i].value;
    // calc total price
    var totalPrice = productCost * productQuantity;
    // change price
    var total = document.getElementsByClassName("product-total")[i];
    total.innerHTML = totalPrice;
    orderTotal += totalPrice;
  };
  document.getElementById("order-total").innerHTML = orderTotal;
};

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
  // createItemButton.onclick = createNewItem;

  console.log(deleteButtons);
  for (var i = 0; i < deleteButtons.length; i++) {
    // deleteButtons[i].onclick = deleteItem;
    deleteButtons[i].addEventListener("click",deleteItem) // (differen, more clear, way of writing the same)
  }
};
