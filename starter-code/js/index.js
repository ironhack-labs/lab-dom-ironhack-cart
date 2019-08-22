
var storeItems = {}

function formatPrice(price) {
  return `$${Number(price).toFixed(2)}`
}
class ItemRow {
  constructor(name, price) {
    this.name = name
    this.price = price
    this.totalPrice = 0
    this.div = document.createElement('DIV');
    this.div.setAttribute("key", this.name)

    this.label = document.createElement('P');
    this.priceLabel = document.createElement('P');
    this.quantityLabel = document.createElement('LABEL')
    this.quantity = document.createElement('INPUT');
    this.totalPriceLabel = document.createElement('P');
    this.deleteBtn = document.createElement('BUTTON');

    [this.label, this.priceLabel, this.quantity, this.totalPriceLabel, this.deleteBtn].map(element => this.div.appendChild(element))
    document.getElementById('dItemsList').appendChild(this.div)

    this.quantity.setAttribute("type", "number");
    this.quantity.id = 'input-${name}'
    this.quantityLabel.htmlFor = this.quantity.id
    this.quantityLabel.innerHTML = 'QTY'
    this.deleteBtn.className = "btn-delete"
    this.deleteBtn.innerHTML = "delete"
    this.deleteBtn.onclick = deleteItem
    this.div.className = "flex justify-b itemRow"

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
  console.log(Object.values(window.storeItems))
  console.log(Object.values(window.storeItems).reduce((tot, e) => tot + e.totalPrice, 0))
  document.getElementById("total").innerHTML = formatPrice(Object.keys(window.storeItems).length ? Object.values(window.storeItems).reduce((tot, e) => tot + e.totalPrice, 0) : 0)
}

function createNewItemRow(itemName, itemUnitPrice) {
  if (itemName in window.storeItems) alert('Must enter a unique item name.')
  else window.storeItems[itemName] = new ItemRow(itemName, itemUnitPrice)
}

function createNewItem() {
  let name = document.getElementById("new-item-name").value
  let price = document.getElementById("new-item-price").value
  if (name.length && price.length) createNewItemRow(name, Number(price))
  else alert('Must enter values in the create fields.')
  updateTotalPrice()
}

window.onload = function () {
  var createItemButton = document.getElementById('new-item-create');
  createItemButton.onclick = createNewItem;
};
