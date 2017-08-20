function deleteItem(e) {
  var container = document.getElementById('container');
  var divProduct = e.currentTarget.parentNode.parentNode
  container.removeChild(divProduct);
}

function getPriceByProduct(product) {
  var price = Number((product.children[1].children[0].innerHTML).slice(1))
  var quantity = Number(product.children[2].children[1].value)
  var totalPrice = product.children[3].children[0]
  updatePriceByProduct('$' + price * quantity, totalPrice)
}

function updatePriceByProduct(productPrice, totalPrice) {
  totalPrice.innerHTML = productPrice
}

function getTotalPrice() {
  var products = document.getElementsByClassName('product')

  for (var i = 0; i < products.length; i++) {
    getPriceByProduct(products[i])
  }

  var productsPrices = document.getElementsByClassName('total-price')
  for (var i = 0, sumPrices = 0; i < productsPrices.length; i++) {
    sumPrices += Number((productsPrices[i].innerHTML).slice(1))
  }
  var totalPrices = document.getElementById('final-price')
  totalPrices.innerHTML = '$' + sumPrices
}

function createQuantityInput() {
  var inputQuantity = document.createElement('input')
  inputQuantity.className = 'input'
  inputQuantity.setAttribute('type', 'number')
  inputQuantity.setAttribute('min', '0')
  inputQuantity.setAttribute('value', '0')

  return inputQuantity
}

function createDeleteButton() {
  var buttonBox = document.createElement('div')
  buttonBox.className = 'box'

  var deleteButton = document.createElement('button')
  deleteButton.classList.add('btn')
  deleteButton.classList.add('btn-delete')
  deleteButton.innerHTML = 'Delete'

  deleteButton.onclick = function(e) {
    deleteItem(e)
  }

  buttonBox.appendChild(deleteButton)

  return buttonBox
}

function createQuantityNode() {
  var divQuantity = document.createElement('div')
  divQuantity.setAttribute('class', 'box box-quantity')

  var labelQuantity = document.createElement('label')
  labelQuantity.className = 'quantity'
  labelQuantity.setAttribute('for', 'input-quantity')
  labelQuantity.innerHTML = 'QTY'

  divQuantity.appendChild(labelQuantity)
  divQuantity.appendChild(createQuantityInput())

  return divQuantity
}

function createItemNode(dataType, itemData) {
  var itemNode = document.createElement(dataType)
  if(itemData != undefined) itemNode.innerHTML = itemData

  return itemNode
}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {
  var divProductName = createItemNode('div')
  divProductName.className = 'box'

  var productName =  createItemNode('span', document.getElementById('product-name-input').value)

  divProductName.appendChild(productName)

  var divProductPrice = createItemNode('div')
  divProductPrice.className = 'box'

  var productPrice = createItemNode('span', '$' + document.getElementById('product-price-input').value)
  productPrice.className = 'price'

  divProductPrice.appendChild(productPrice)

  var divTotalProductPrice = createItemNode('div')
  divTotalProductPrice.className = 'box'

  var totalProductPrice = createItemNode('span', '$0.00')
  totalProductPrice.className = 'total-price'

  divTotalProductPrice.appendChild(totalProductPrice)

  var divProduct = createItemNode('div')
  divProduct.className = 'product'

  divProduct.appendChild(divProductName)
  divProduct.appendChild(divProductPrice)
  divProduct.appendChild(createQuantityNode())
  divProduct.appendChild(divTotalProductPrice)
  divProduct.appendChild(createDeleteButton())

  var divContainerProducts = document.getElementById('container')
  var productsList = document.getElementsByClassName('product')
  divContainerProducts.insertBefore(divProduct, productsList[productsList.length - 1].nextSibling)
}

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button')
  var createItemButton = document.getElementById('new-item-create')
  var deleteButtons = document.getElementsByClassName('btn-delete')

  calculatePriceButton.onclick = function() {
    getTotalPrice()
  }

  createItemButton.onclick = function() {
    createNewItem()
  }

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function(e) {
      deleteItem(e)
    }
  }
}
