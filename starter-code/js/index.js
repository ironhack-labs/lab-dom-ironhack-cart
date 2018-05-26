function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  const items = document.getElementById('itemWrapper');
  const grandTotalPrice = items.reduce((prev, item) => {
    const itemPrice = item.getElementsByClassName('unitPrice');
    const itemQuantity = item.getElementsByClassName('quantity');
    return (prev + (itemPrice * itemQuantity));
  }, 0);
  console.log(grandTotalPrice);
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
  const createItemButton = document.getElementById('new-item-create');
  const deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
