// function deleteItem(e) {

// }

// function getPriceByProduct(itemNode) {

// }

// function updatePriceByProduct(productPrice, index) {

// }

// function getTotalPrice() {

// }

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

var products = document.querySelectorAll('.product');

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => deleteItem(i))
  }

  const deleteItem = i => {
    let prod = products[i];
    document.getElementById('product-container').removeChild(prod);

  };

}



const getTotalPrice = () => {

  let totalAmount = 0;
  for (let i = 0; i < products.length; i++) {
    let productPrice = eval(products[i].querySelector('.product-unit-cost').innerText)
    let productQuantity = products[i].querySelector('.amount-input').value;
    let productTotal = productPrice * productQuantity;
    products[i].querySelector('.product-total-cost').innerHTML = productTotal;
    totalAmount += productTotal;
  } return document.getElementById('total-price').innerText = totalAmount;
}


const deleteItem = i => {
  let prod = products[i];
  document.getElementById('product-container').removeChild(prod);

}






