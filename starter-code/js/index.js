let price = '';
let quantity = 0;
let totalPrice = 0;
const arrName = document.getElementsByClassName('productName');
const arrPrice = document.getElementsByClassName('productCost');
const arrQuantity = document.getElementsByClassName('productQty');
const arrTotalPrice = document.getElementsByClassName('totalPrice');
const arrProducts = document.getElementsByClassName('productAll');
function deleteItem(e) {
  e.parentNode.removeChild(e);
}

function getPriceByProduct() {
  for (let i = 0; i < arrPrice.length; i += 1) {
    price = arrPrice[i].textContent;
    price = price.split('').slice(1).join('');
    quantity = arrQuantity[i].value;
    totalPrice = parseFloat(price) * parseInt(quantity, 10);
    arrTotalPrice[i].innerHTML = `$ ${totalPrice.toFixed(2)}`;
  }
}


function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  getPriceByProduct();
  let total = 0;
  for (let i = 0; i < arrTotalPrice.length; i += 1) {
    total += parseFloat(arrTotalPrice[i].textContent.split('').slice(1).join(''));
  }
  document.getElementById('total-price').innerHTML = `Total Price: $${total.toFixed(2)}`;
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
  let newPrice = document.getElementById('new-price').value;
  let newName = String(document.getElementById('newName').value);

  newPrice = parseFloat(newPrice).toFixed(2);

  if (isNaN(newPrice) || newPrice === 0) {
    console.log('No price');
    alert('You need to input an value for the price!');
    return;
  }
  if (newName === '') {
    console.log('No name');
    alert('You need to input a name for the product!');
    return;
  }

  const newRow = arrProducts[0].cloneNode(true);
  arrProducts[arrProducts.length - 1].parentNode.insertBefore(newRow, null);

  arrName[arrName.length - 1].innerHTML = `${newName}`;
  arrPrice[arrPrice.length - 1].innerHTML = `$${newPrice}`;
  arrQuantity[arrQuantity.length - 1].value = 0;
  document.getElementById('new-price').valeu = 0;
  document.getElementById('newName').valeu = '';


}

window.onload = function () {
  const calculatePriceButton = document.getElementById('calc-prices-button');
  const createItemButton = document.getElementById('new-item-create');
  const deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
