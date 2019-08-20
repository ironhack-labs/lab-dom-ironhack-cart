function deleteItem(e) {
  const selectedItem = e.currentTarget.parentNode.parentNode;
  const parent = selectedItem.parentNode;
  parent.removeChild(selectedItem);
}

function getPriceByProduct(itemNode) {
  let price = itemNode.querySelector(".product-cost").innerText;
  price = Number(price.substring(1));
  const quantity = itemNode.querySelector(".quantity").value;
  const calculatedPrice = quantity * price;
  const totalPrice = itemNode.querySelector('.total');
  totalPrice.innerText = `$${calculatedPrice}`;
  return calculatedPrice;
}


function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  const products = document.querySelectorAll('.product');
  let totalPrice = 0;
  products.forEach(product => {
    const currentPrice = getPriceByProduct(product);
    totalPrice += currentPrice;
  });
  console.log(totalPrice);
  totalPrice = totalPrice.toFixed(2);
  const totalCart = document.getElementById('total-cart');
  totalCart.innerText = `$${totalPrice}`;
  return totalPrice;
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
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};