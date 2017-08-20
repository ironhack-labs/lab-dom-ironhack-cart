function deleteItem(e) {
  
}

function updatePriceByProduct (productPrice, index) {
  
}

function getPriceByProduct (itemNode) {
  
}

function getTotalPrice () {
  var prodPrice = document.getElementById('price-product').innerHTML
  var quantPrice = document.getElementById('qProduct').value
  var total = parseFloat(prodPrice) * parseFloat(quantPrice)
  console.log(total)
  return document.querySelector("span.total-amount").innerHTML = "$" + total.toFixed(2);
}

function createQuantityInput () {

}

function createDeleteButton () {

}

function createQuantityNode () {

}

function createItemNode (dataType, itemData) {

}

function createNewItemRow (itemName, itemUnitPrice) {

}

function createNewItem () {

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button')
  var createItemButton = document.getElementById('new-item-create')
  var deleteButtons = document.getElementsByClassName('btn-delete')

  calculatePriceButton.onclick = getTotalPrice
  //createItemButton.onclick = createNewItem

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem
  }
}
