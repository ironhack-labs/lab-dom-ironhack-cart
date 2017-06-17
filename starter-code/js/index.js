function deleteItem(e) {
  var item = e.currentTarget.parentElement.parentElement;
  item.parentElement.removeChild(item);
}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  var unitPrices = document.getElementsByClassName("productPrice");
  var quantities = document.getElementsByClassName("quantity");
  var productTotalPrices = document.getElementsByClassName("quantityPrice");
  var totalCart = 0;
  for (i = 0; i < unitPrices.length; i++) {
    var totalPrice = 0;
    unitPrice = unitPrices[i].innerHTML;
    quantity = parseInt(quantities[i].value);
    finalPrice = parseInt(unitPrice.substring(1, unitPrice.length));
    totalPrice += quantity * finalPrice;
    totalCart += totalPrice;
    productTotalPrices[i].innerHTML = "$" + totalPrice;
  }
  document.getElementById("totalPrice").innerHTML = "$" + totalCart;

}

function createQuantityInput() {
  return ' <input type="number" name="" value="0" placeholder="Choose Quantity" id="input"class="quantity">';
}

function createDeleteButton() {
  return '<div class="col-xs-2"><button type="button" class="btn btn-delete">Delete</button></div>';

}

function createQuantityNode() {
  return '<div class="col-xs-2"><span class="productPrice"><label for="input">QTY</label>' + createQuantityInput + '</div>';


}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {
  var container = document.getElementsByClassName("container");

  var newRow = '<div class="product row"> <div class="col-xs-3"><span class= "productName">' + itemName + '</span> </div>' + itemUnitPrice + '</span></div><div class="col-xs-3">' + createQuantityNode() + '<div class="col-xs-2"><span class="quantityPrice">$0.00</span></div>' + createDeleteButton() + '</div>';
  container.innerHTML += newRow;
}

function createNewItem() {
  var name2 = document.getElementsByClassName("newName");
  var price2 = document.getElementsByClassName("newPrice");

  var name = name2[0].value;
  var price = parseInt(price2[0].value);

  createNewItemRow(name, price);

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
