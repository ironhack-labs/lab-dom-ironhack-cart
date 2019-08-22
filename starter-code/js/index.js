function deleteItem(e) {
  document.querySelector('.contenedor-productos').removeChild(e.currentTarget.parentNode.parentNode)
}

function getPriceByProduct(product) {
  let precio = product.querySelector('.costo span').innerHTML.replace('$', '')
  precio = parseFloat(precio)
  return precio
}

function updatePriceByProduct(productPrice, product) {
  let cantidad = parseInt(product.querySelector('.cantidad input').value)
  let totalProductPrice = cantidad * productPrice
  product.querySelector('.total-producto').innerHTML = '$' + totalProductPrice
  return totalProductPrice
}

function getTotalPrice() {
  let products = Array.from(document.getElementsByClassName('producto-fila'))
  let totalPrice = 0
  products.forEach(function(product) {
    totalPrice += updatePriceByProduct(getPriceByProduct(product), product)
  })
  document.querySelector('.calculate-prices h2').innerHTML = 'Total Price: $' + totalPrice
}

function createProductName(name) {
  let productName = document.createElement('div')
  productName.className = 'nombre'
  let span = document.createElement('span')
  span.innerHTML = name
  productName.appendChild(span)
  return productName
}

function createProductCost(cost) {
  let productCost = document.createElement('div')
  productCost.className = 'costo'
  let span = document.createElement('span')
  span.innerHTML = '$' + cost
  productCost.appendChild(span)
  return productCost
}

function createQuantityInput() {
  let cantidadInput = document.createElement('div')
  cantidadInput.className = 'cantidad'
  let qty = document.createElement('label')
  let quantityInput = document.createElement('input')
  quantityInput.value = 0
  quantityInput.type = 'number'
  quantityInput.min = 0
  cantidadInput.appendChild(qty)
  cantidadInput.appendChild(quantityInput)
  return cantidadInput
}

function createProductTotalCost() {
  let productTotalCost = document.createElement('div')
  productTotalCost.className = 'total-producto'
  let span = document.createElement('span')
  productTotalCost.appendChild(span)
  span.innerHTML = '$0'
  return productTotalCost
}

function createDeleteButton() {
  let deleteBtn = document.createElement('div')
  deleteBtn.className = 'eliminar-producto'
  let deleteButton = document.createElement('button')
  deleteButton.classList.add('btn')
  deleteButton.classList.add('btn-delete')
  deleteButton.innerHTML = 'Delete'
  deleteBtn.appendChild(deleteButton)
  deleteButton.onclick = deleteItem
  return deleteBtn
}

function createNewItemRow(itemName, price) {
  let wrapper = document.createElement('div')
  wrapper.className = 'producto-fila'
  wrapper.appendChild(createProductName(itemName))
  wrapper.appendChild(createProductCost(price))
  wrapper.appendChild(createQuantityInput())
  wrapper.appendChild(createProductTotalCost())
  wrapper.appendChild(createDeleteButton())
  return wrapper
}

function createNewItem() {
  let input = document.querySelector('.contenedor-productos')
  input.appendChild(
    createNewItemRow(document.querySelector('#input-nombre').value, document.querySelector('#input-precio').value)
  )
}

window.onload = function() {
  let calculatePriceButton = document.getElementById('calc-prices-button')
  let createItemButton = document.getElementById('new-item-create')
  let deleteButtons = document.getElementsByClassName('btn-delete')
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem
  }

  calculatePriceButton.onclick = getTotalPrice
  createItemButton.onclick = createNewItem
}
