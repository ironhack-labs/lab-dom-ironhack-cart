// const totalPrices = document.querySelectorAll('totalPrice')
// const totalPricesResult = [...totalPrices].reduce((acc, current) => {
//   return acc + current
// }, 0)

function deleteItem(e) {
  const buttonParent = e.target.parentNode
  document.querySelector('.products').removeChild(buttonParent)
  console.log(buttonparent)
  console.log('clic')
}

function getPriceByProduct(product) {
  let unitprice = product.querySelector('.unitPrice')
  let unitPriceValue = unitprice.innerText
  let input = product.querySelector('.qtyProduct')
  let inputValue = input.value
  // console.log(unitPriceValue)
  let total = unitPriceValue * inputValue
  // console.log(total)
  let totalPrice = product.querySelector('.totalPrice')
  totalPrice.innerHTML = total
}

function getTotalPrice() {
  const productsItem = document.querySelectorAll('.productItem')
  productsItem.forEach(e => {
    getPriceByProduct(e)
  })
  const totalPrices = document.querySelectorAll('.totalPrice')
  const pricesArr = [...totalPrices]
  const totalPricesResult = pricesArr.reduce((acc, current) => {
    return parseInt(acc) + parseInt(current.innerText)
  }, 0)
  document.querySelector('.totalPriceNumber').innerHTML = totalPricesResult

  console.log(totalPricesResult)
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(product, price) {
  const newRow = document.createElement('div')
  newRow.setAttribute('class', 'productItem')
  newRow.innerHTML = `<span class="product">${product}</span>
  <span>$ <span class="unitPrice">${price}</span></span>
  <section>
    <label for="" name="qty">QTY</label>
    <input class="qtyProduct" type="text" />
  </section>
  <span>$ <span class="totalPrice"></span></span>
  <button class="btn-delete btn">delete</button>`
  document.querySelector('.products').appendChild(newRow)
  console.log(newRow)
}

function createNewItemRow(itemName, itemUnitPrice) {}
function updatePriceByProduct(productPrice, index) {}

function createNewItem() {
  let newItem = document.querySelector('.newProduct').value
  let newPrice = document.querySelector('.newPrice').value
  createItemNode(newItem, newPrice)
}

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button')
  var createItemButton = document.getElementById('new-item-create')
  var deleteButtons = document.getElementsByClassName('btn-delete')

  // calculatePriceButton.onclick = getTotalPrice
  createItemButton.onclick = createNewItem

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem
  }
}
document.querySelector('#calc-prices-button').onclick = () => {
  getTotalPrice()
}
