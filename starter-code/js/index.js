const generalTot = document.querySelector('.general-total')
const deleteP = document.querySelectorAll('.btn-delete')
const products = document.querySelector('#productos')
calculatePriceButton = document.getElementById('calc-prices-button')

calculatePriceButton.addEventListener('click', () => {
  getPriceByProduct()
})

function deleteItem(di) {
  const deleteinv = di.target.parentElement
  products.removeChild(deleteinv)
}

function getPriceByProduct(prod) {
  let nodes = document.querySelectorAll('.price')
  let quant = document.querySelectorAll('.qty')
  let total = document.querySelectorAll('.totalprice')
  if (nodes.length <= 0) return 0
  let partial = 0
  let totalPrice = 0
  for (i = 0; i < nodes.length; i++) {
    totalPrice = parseInt(nodes[i].innerHTML.slice(1)) * parseInt(quant[i].value)
    total[i].innerText = `$${totalPrice.toFixed(2)}`
    partial += totalPrice
  }
  generalTot.innerText = `$${partial.toFixed(2)}`
}

function createNewProduct() {
  const addProduct = document.querySelector('.addproduct')
  const addPrice = document.querySelector('.addprice')
  const newElem = document.createElement('div')
  const spanProduct = document.createElement('span')
  const spanPrice = document.createElement('span')
  spanProduct.innerText = addProduct.value
  spanProduct.className = 'product'
  spanPrice.innerText = `$${parseInt(addPrice.value).toFixed(2)}`
  spanPrice.className = 'price'

  newElem.appendChild(spanProduct)
  newElem.appendChild(spanPrice)

  newElem.className = 'prod-description'
  newElem.innerHTML +=
    '<label class="quantity">QTY</label><input type="number" name="" min="0" max="100" class="qty" value="0"><span class="totalprice">$0.00</span>'

  const dltbtn = document.createElement('button')
  dltbtn.innerText = 'Delete'
  dltbtn.className = 'btn btn-delete'
  dltbtn.onclick = deleteItem

  newElem.appendChild(dltbtn)
  products.appendChild(newElem)
}

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button')
  var createItemButton = document.getElementById('new-item-create')
  var deleteButtons = document.getElementsByClassName('btn-delete')

  createItemButton.onclick = createNewProduct

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem
  }
}
