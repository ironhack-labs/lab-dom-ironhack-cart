function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}
//iterate and for each of them calculate the price
function getTotalPrice() {
  let stringValue = document.querySelector(".cost-per-unit > span").innerText.substring(1, 3)
  let cost = parseInt(stringValue)
  let quantity = document.querySelector("#quantity").value
  document.querySelector(".total-price").innerText = (`$` + `${cost * quantity}.00`)
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

function copyAddProduct(name, unitPrice) {
  let firstProduct = document.getElementsByClassName('product')[0];
  let newProduct = firstProduct.cloneNode(true);
  document.getElementsByClassName('title')[0].appendChild(newProduct);
  newProduct.querySelector(".product-name > span").innerText = name
  newProduct.querySelector(".cost-per-unit > span").innerText = `$` + unitPrice + `.00`
}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calculate-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }

  copyAddProduct("IronShirt", "15")
  // copyAddProduct()
  // copyAddProduct()
  // copyAddProduct()
  // copyAddProduct()
  // copyAddProduct()

};

//