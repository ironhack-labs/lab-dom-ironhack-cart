function deleteItem(e) {
  var trolley = document.querySelector(".trolley")
  trolley.removeChild(e.currentTarget.parentNode.parentNode)
}

function getPriceByProduct(itemNode) {
  return parseInt(itemNode.innerHTML.replace("$", ""))
}

function updatePriceByProduct(productPrice, itemNode) {
  itemNode.innerHTML = "$" + productPrice
}

function getTotalPrice() {
  var prices = document.querySelectorAll(".price")
  var quantities = document.querySelectorAll(".input")
  var totalPrices = document.querySelectorAll(".total-price")
  var sum = 0

  for (var i = 0; i < prices.length; i++) {
    var qty = parseInt(quantities[i].value)
    var price = getPriceByProduct(prices[i])
    updatePriceByProduct(qty * price, totalPrices[i])
    sum += qty * price
  }

  updatePriceByProduct(sum, document.getElementById("total-trolley"))
}

function createQuantityInput(itemUnitPrice) {
  let div = document.createElement("div")
  let span = document.createElement("span")
  span.innerHTML = itemUnitPrice
  span.className = "price"

  div.appendChild(span)

  let div2= document.createElement("div")
  let label = document.createElement("label")
  label.className = "quantity"

  let node = document.createTextNode("QTY")
  label.appendChild(node)
  div2.appendChild(label)

  let numberQty = document.createElement("input")
  numberQty.className = "input"
  numberQty.name = "QTY"
  numberQty.type = "number"
  numberQty.placeholder = "0"

  div.appendChild(label).appendChild(numberQty)

  return div
}

function createDeleteButton() {
  let div = document.createElement("div")
  let btnDelete = document.createElement("button")
  btnDelete.className = "btn btn-delete"
  btnDelete.type = "button"
  btnDelete.name = "button"
  btnDelete.onclick = deleteItem
  let node = document.createTextNode("Delete");
  btnDelete.appendChild(node)
  div.appendChild(btnDelete)

 

  return div
}

function createPriceItemNode() {
  let div = document.createElement("div")
  let totalPrice = document.createElement("span")
  totalPrice.className = "total-price"

  div.appendChild(totalPrice)

  
  return div
}

function createNameItemNode(itemName) {
  let div = document.createElement("div")
  div.className = "item"
  let text = document.createElement("span")
  text.innerHTML = itemName
  div.appendChild(text)
  return div
}

function createNewItemRow(itemName, itemUnitPrice) {
  var art = document.createElement("div")
  art.className = "art"

  let nameNode = createNameItemNode(itemName)
  art.appendChild(nameNode)

  let quantityNode = createQuantityInput(itemUnitPrice)
  art.appendChild(quantityNode)

  let priceNode = createPriceItemNode()
  art.appendChild(priceNode)

  let deleteButtonNode = createDeleteButton()
  art.appendChild(deleteButtonNode)

  return art
}

function createNewItem() {
  var trolley = document.querySelector(".trolley")

  let art = createNewItemRow(iphone, 500)

  trolley.appendChild(art)
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
