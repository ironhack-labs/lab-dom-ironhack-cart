function deleteItem(e) {

}

function getPriceByProduct(itemNode) {
  const itemPriceCurrency = itemNode.getElementsByClassName('unitPrice')[0].textContent;
  const itemPrice = Number(itemPriceCurrency.replace(/[^0-9.-]+/g, ''));
  const itemQuantity = itemNode.getElementsByClassName('qtyInput')[0].value;
  return (itemPrice * itemQuantity);
}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  const items = Array.from(document.getElementById('itemsWrapper').children);
  const grandTotalPrice = items.reduce((prev, item) => {

  }, 0);
  return `$ ${grandTotalPrice}`;
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

window.onload = () => {
  const calculatePriceButton = document.getElementById('calc-prices-button');
  // const createItemButton = document.getElementById('new-item-create');
  // const deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for (let i = 0; i < deleteButtons.length; i++) {
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
