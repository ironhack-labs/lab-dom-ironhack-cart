// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  let subTotal = product.querySelector('.subtotal span')

  subTotal.innerHTML = price * quantity

  return price * quantity
}

function calculateAll() {
  const productsList = document.getElementsByClassName('product')
  let totalValue = document.getElementById('total-value').querySelector('span')
  let totalSum = 0

   for(let i = 0; i<productsList.length; i++){
    totalSum += updateSubtotal(productsList[i])
    totalValue.innerHTML = totalSum
  }

  return totalSum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  const temProduct = target.parentNode.parentNode

  temProduct.parentNode.removeChild(temProduct) 
  calculateAll()
}

// ITERATION 5

function createProduct() {

  const productName = document.querySelector('.create-product').cells[0].childNodes[1].value
  const unitPrice = document.querySelector('.create-product').cells[1].childNodes[1].value

  const newElement = document.getElementsByClassName('product')[0].cloneNode(true)

  newElement.querySelector('.price span').innerHTML = Number(unitPrice).toFixed(2)
  newElement.querySelector('.name span').innerHTML = productName
  newElement.querySelector('.quantity input').value = 0
  newElement.querySelector('.subtotal span').innerHTML = 0 

  document.getElementById('cart').appendChild(newElement)
  newElement.getElementsByClassName('btn btn-remove')[0].addEventListener('click', removeProduct)
  
  document.querySelector('.create-product').cells[1].childNodes[1].value = 0
  document.querySelector('.create-product').cells[0].childNodes[1].value = ''

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  const removeBtn = document.getElementsByClassName('btn btn-remove')
  for(let i =0; i<removeBtn.length; i++){
    removeBtn[i].addEventListener('click', removeProduct) 
  }

  const addElementBtn = document.getElementById('create')
  addElementBtn.addEventListener('click',createProduct)

})
