function deleteItem(e) {
  // 1. target parent element of containers (products)
  // 2. target the container
  // 3. delete the container from the parent element
  // removeChild(), parentElement()
  var bigContainer = document.querySelector('#products');
  var smallContainer = e.currentTarget.parentElement.parentElement;
  bigContainer.removeChild(smallContainer);
  getTotalPrice();
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  var priceOfItems = [...document.querySelectorAll('.price')];
  var quantityOfItems = [...document.querySelectorAll('.input')];
  var totalOfItems = document.querySelector('#productsTotal');
  var value = [...document.querySelectorAll('.value')];
  var productsTotal = 0;

  for (let i = 0; i < priceOfItems.length; i++) {
    var priceEntry = Number(priceOfItems[i].textContent.slice(1));
    var quantityEntry = Number(quantityOfItems[i].value);
    var total = priceEntry * quantityEntry;
    value[i].textContent = '$' + total;
    productsTotal += total;
  }
  totalOfItems.textContent = '$' + productsTotal;
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
