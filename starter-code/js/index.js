function deleteItem(e) {

}

function updatePriceByProduct(productPrice, index) {
  var a = document.getElementsByClassName('total-amount')
  a[index].innerHTML = "$" + productPrice.toFixed(2)
}

function getPriceByProduct(itemNode) {
  var total
  var oneItem = parseFloat(document.getElementById('price-product').innerHTML)
  var oneQuantity = parseFloat(document.getElementById('qProduct').value)
  
  total = oneItem[itemNode] * oneQuantity[itemNode]
  console.log(total)
  // Update price product one by one
  updatePriceByProduct(total, itemNode)
  return total
}

function getTotalPrice() {
  var price = document.getElementsByClassName('price')
  var tPrice = 0
  for(var i = 0; i < price.length; i++){
    tPrice += getPriceByProduct(i)
  } 
  document.getElementsByClassName('total-price').innerHTML = "<h2>Total Price: $" + tPrice.toFixed(2)+ "</h2>"
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
  var calculatePriceButton = document.getElementById('calc-prices-button')
  var createItemButton = document.getElementById('new-item-create')
  var deleteButtons = document.getElementsByClassName('btn-delete')

  calculatePriceButton.onclick = getTotalPrice
  console.log(calculatePriceButton)
  //createItemButton.onclick = createNewItem

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem
  }
}