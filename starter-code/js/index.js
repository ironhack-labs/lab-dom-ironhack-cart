function updateSubtot(product) {
  let priceUnit = product.getElementsByClassName('pu')[0].childNodes[1].innerHTML
  let quantity = product.getElementsByClassName('qty')[0].childNodes[1].childNodes[1].value
  let priceSubTot = priceUnit * quantity;
  product.getElementsByClassName('subtot')[0].childNodes[1].innerHTML = priceSubTot
}


function calculateTotalPrice() {
  let total = 0;
  let subtots = document.getElementsByClassName('subtot');
  for (let i = 0; i < subtots.length; i++) {
    total += parseFloat(subtots[i].getElementsByTagName('span')[0].innerHTML);
  }
  let totalPrice = document.getElementsByTagName('h2')[0].getElementsByTagName('span')[0]
  totalPrice.innerHTML = total
}


function deleteProduct(e) {
  let product = e.currentTarget.parentNode.parentNode
  let tBody = e.currentTarget.parentNode.parentNode.parentNode
  tBody.removeChild(product);
  calculateTotalPrice()
}


function createObjects(productHtml) {
  let productName = document.getElementsByClassName('new')[0].childNodes[1].childNodes[1].value
  let priceUnit = document.getElementsByClassName('new')[0].childNodes[3].childNodes[1].value

  let newProduct = document.createElement('tr');
  newProduct.className = 'product'
  newProduct.innerHTML = productHtml

  newProduct.getElementsByClassName('name')[0].childNodes[1].innerHTML = productName
  newProduct.getElementsByClassName('pu')[0].childNodes[1].innerHTML = priceUnit ? parseFloat(priceUnit, 2) : null
  newProduct.getElementsByClassName('qty')[0].childNodes[1].childNodes[1].value = 0
  newProduct.getElementsByClassName('subtot')[0].childNodes[1].innerHTML = 0

  let tBody = document.getElementsByTagName('tbody')[0]
  tBody.appendChild(newProduct)

  document.getElementsByClassName('new')[0].childNodes[1].childNodes[1].value = ""
  document.getElementsByClassName('new')[0].childNodes[3].childNodes[1].value = null
  newProduct.getElementsByClassName('btn btn-delete')[0].onclick = function (e) {
    deleteProduct(e)
  }
  newProduct.getElementsByTagName('input')[0].onchange = function (e) {
    let bigParent = e.currentTarget.parentNode.parentNode.parentNode
    updateSubtot(bigParent);
  }
}

window.onload = function () {
  document.getElementById('calc').onclick = calculateTotalPrice
  let productHtml = document.getElementsByClassName('product')[0].innerHTML

  let inputs = document.getElementsByTagName('input')
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].onchange = function (e) {
      let product = e.currentTarget.parentNode.parentNode.parentNode
      updateSubtot(product);
    }
  }

  let buttons = document.getElementsByClassName('btn btn-delete')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
      deleteProduct(e)
    }
  }

  document.getElementById('create').onclick = function () {
    createObjects(productHtml)
  }
}