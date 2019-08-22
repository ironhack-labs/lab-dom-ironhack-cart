function deleteItem(e) {
  const buttonParent = e.target.parentNode
  const buttonGrandParent = buttonParent.parentNode
  buttonGrandParent.removeChild(buttonParent)
  console.log(buttonGrandParent)
  getTotalPrice()
}

function getTotalPrice() {
  const inputs = document.querySelectorAll('.qty')
  const spans = document.querySelectorAll('span')
  const totalLabel = document.querySelector('h2')
  let totalPriceItems = 0
  inputs.forEach((input, index) => {
    const qty = Number(input.value)
    const ul = document.querySelector('ul')
    const rawPrice = ul.children[index].children[1].innerText
    const realPrice = Number(rawPrice.slice(1, rawPrice.length - 1))
    console.log(realPrice)
    const totalPrice = realPrice * qty
    totalPriceItems += totalPrice
    ul.children[index].children[4].innerText = `$${totalPrice.toFixed(2)}`
  })
  totalLabel.children[0].innerText = `$${totalPriceItems.toFixed(2)}`
}

function createNewItem() {
  const parent = document.getElementById('items').childNodes[1]
  const newLi = document.createElement('li')
  const itemContainer = parent.appendChild(newLi)
  itemContainer.insertAdjacentHTML(
    'beforeend',
    '<span>IronBubble-head</span> <span>$25.00</span> <label class="quantity" for="quantity">QTY</label> <input type="text" name="quantity" class="qty" value="0" /> <span class="total-price">$0.00 </span> <button id="btn-delete" class="btn-delete btn">Delete</button>'
  )
  itemContainer.childNodes[0].innerText = document.getElementById('product-description').value
  itemContainer.childNodes[2].innerText = '$' + Number(document.getElementById('product-price').value).toFixed(2)
  itemContainer.childNodes[10].onclick = deleteItem
  document.getElementById('product-description').value = ''
  document.getElementById('product-price').value = ''
}

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button')
  var createItemButton = document.getElementById('new-item-create')
  var deleteButtons = document.getElementsByClassName('btn-delete')

  calculatePriceButton.onclick = getTotalPrice
  createItemButton.onclick = createNewItem

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem
  }
}
