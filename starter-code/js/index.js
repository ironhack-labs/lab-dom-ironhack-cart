function updateSubtot(product) {
  let priceUnit = product.querySelector('.pu span').innerHTML
  let quantity = product.querySelector('.qty label input').value
  let priceSubTot = priceUnit * quantity;
  product.querySelector('.subtot span').innerHTML = priceSubTot
}

function calculateTotalPrice() {
  let total = 0;
  let subtots = document.querySelectorAll('.subtot');
  for (let i = 0; i < subtots.length; i++) {
    total += parseFloat(subtots[i].querySelector('span').innerHTML);
  }
  let totalPrice = document.querySelector('h2 span')
  totalPrice.innerHTML = total
}

function deleteProduct(e) {
  let product = e.currentTarget.parentNode.parentNode
  let tBody = e.currentTarget.parentNode.parentNode.parentNode
  tBody.removeChild(product);
  calculateTotalPrice()
}

function createObjects(productHtml) {
  let productName = document.querySelector('.new td input[type=text]').value
  let priceUnit = document.querySelector('.new td input[type=number]').value

  let newProduct = document.createElement('tr');
  newProduct.className = 'product'
  newProduct.innerHTML = productHtml

  newProduct.querySelector('.name span').innerHTML = productName
  newProduct.querySelector('.pu span').innerHTML = priceUnit ? parseFloat(priceUnit, 2) : null
  newProduct.querySelector('.qty label input').value = 0
  newProduct.querySelector('.subtot span').innerHTML = 0

  let tBody = document.querySelector('tbody')
  tBody.appendChild(newProduct)

  document.querySelector('.new td input[type=text]').value = ""
  document.querySelector('.new td input[type=number]').value = null

  newProduct.querySelector('.btn.btn-delete').onclick = function (e) {
    deleteProduct(e)
  }

  newProduct.querySelector('input').onchange = function (e) {
    let bigParent = e.currentTarget.parentNode.parentNode.parentNode
    updateSubtot(bigParent);
  }
}

window.onload = function () {
  document.querySelector('#calc').onclick = calculateTotalPrice
  let productHtml = document.querySelector('.product').innerHTML

  let inputs = document.querySelectorAll('.product input')
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].onchange = function (e) {
      let product = e.currentTarget.parentNode.parentNode.parentNode
      updateSubtot(product);
    }
  }

  let buttons = document.querySelectorAll('.btn.btn-delete')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
      deleteProduct(e)
    }
  }

  document.querySelector('#create').onclick = function () {
    createObjects(productHtml)
  }
}