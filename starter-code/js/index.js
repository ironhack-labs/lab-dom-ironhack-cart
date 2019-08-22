
var storeItems = {}

function formatPrice(price) {
  return `$${Number(price).toFixed(2)}`
}
class ItemRow {
  constructor(name, price) {
    this.name = name
    this.price = price
    this.totalPrice = 0
    this.div = document.createElement('DIV')
    this.div.setAttribute("key", this.name)

    this.label = document.createElement('P')
    this.priceLabel = document.createElement('P')
    this.quantityDiv = document.createElement('DIV')
    this.quantityLabel = document.createElement('LABEL')
    this.quantity = document.createElement('INPUT')
    this.totalPriceLabel = document.createElement('P')
    this.deleteBtn = document.createElement('BUTTON')

    this.quantityDiv.appendChild(this.quantityLabel)
    this.quantityDiv.appendChild(this.quantity)
    this.quantity.style.width = '80%'
    this.quantityLabel.style.width = '20%'
    var children = [this.label, this.priceLabel, this.quantityDiv, this.totalPriceLabel, this.deleteBtn]
    children.map(element => this.div.appendChild(element))

    this.quantity.setAttribute("type", "number");
    this.quantity.id = `input${name}`
    this.quantityLabel.htmlFor = `input${name}`
    this.quantityLabel.innerHTML = 'QTY:'
    this.deleteBtn.className = "btn-delete btn"
    this.deleteBtn.innerHTML = "delete"
    this.deleteBtn.onclick = deleteItem
    this.div.className = "flex justify-b itemRow"

    document.getElementById('dItemsList').appendChild(this.div)

    this.quantity.onchange = this.update.bind(this)
    this.update()
  }

  update() {
    this.totalPrice = this.quantity.value * this.price
    this.label.innerHTML = this.name;
    this.priceLabel.innerHTML = formatPrice(this.price)
    this.totalPriceLabel.innerHTML = formatPrice(this.totalPrice)
    updateTotalPrice()
  }
}

function deleteItem(e) {
  delete window.storeItems[e.srcElement.parentNode.getAttribute('key')]
  e.srcElement.parentNode.remove()
  updateTotalPrice()
}

function updateTotalPrice() {
  document.getElementById("total").innerHTML = formatPrice(Object.keys(window.storeItems).length ? Object.values(window.storeItems).reduce((tot, e) => tot + e.totalPrice, 0) : 0)
}

function createNewItemRow(itemName, itemUnitPrice) {
  if (itemName in window.storeItems) alert('Must enter a unique item name.')
  else window.storeItems[itemName] = new ItemRow(itemName, itemUnitPrice)
}

function createNewItem() {
  let name = document.getElementById("new-item-name").value
  let price = document.getElementById("new-item-price").value
  if (name.length && price.length) {
    createNewItemRow(name, Number(price))
    document.getElementById("new-item-name").value = ""
    document.getElementById("new-item-price").value = ""
  }

  else alert('Must enter values in the create fields.')
  updateTotalPrice()
}

window.onload = function () {
  var createItemButton = document.getElementById('new-item-create');
  createItemButton.onclick = createNewItem;
};
