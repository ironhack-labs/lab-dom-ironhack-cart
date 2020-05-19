// ITERATION 1

function updateSubtotal (product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const subtotal = price * quantity
  const subtotalHTML = product.querySelector('.subtotal span')
  subtotalHTML.innerText = subtotal  
}

function calculateAll() {
  // ITERATION 2
  const productList = [...document.getElementsByClassName('product')]
  productList.forEach ((product) => {
    updateSubtotal(product)
  })

  // ITERATION 3
  const total = document.querySelector('#total-value span') 
  const everySubtotal = [...document.querySelectorAll('.subtotal span')]
  
  const addition = everySubtotal.reduce ((accum, subtotal ) => {
    return accum += Number(subtotal.innerText)
  }, 0)
  total.innerText = addition
}

// ITERATION 4

function removeProduct (event) {
  console.log("Hello")
  const target = event.currentTarget
  console.log('The target in remove is:', target)


  //... your code goes here
  const productTr = target.parentNode.parentNode
  const total = document.querySelector('#total-value span') 
  const subtotalTr = productTr.querySelector('.subtotal span')
  total.innerText -= subtotalTr.innerText
  console.log(productTr)
  productTr.remove()
}

// ITERATION 5

function createProduct () {
  const tBody = document.getElementsByTagName('tbody')[0]
  const createProduct = document.getElementsByClassName('create-product')[0]
  const inputs = [...createProduct.getElementsByTagName('input')]

  const newProduct = createStructure()
  const name = newProduct.querySelector('.name span')
  const price = newProduct.querySelector('.price span')
  name.innerText = inputs[0].value
  price.innerText = Number(inputs[1].value).toFixed(2)

  tBody.appendChild(newProduct)
  deleteBtn()
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  deleteBtn()

  const createBTn = document.getElementById('create')
  createBTn.addEventListener('click', createProduct)
})

function deleteBtn () {
  const deletePricesBtns = [...document.getElementsByClassName('btn-remove')]
  deletePricesBtns.forEach((deleteBtn) =>{
    deleteBtn.addEventListener('click', removeProduct)
  })
}

function createStructure () {
  const tr = document.createElement('tr')
  tr.className = 'product'

  const tdName = document.createElement('td')
  tdName.setAttribute('class', 'name') 
  const spanName = document.createElement('span')
  spanName.innerText = 0
  tdName.appendChild(spanName)
  tr.appendChild(tdName)

  const tdPrice = document.createElement('td')
  tdPrice.setAttribute('class', 'price')
  tdPrice.innerHTML = '$'
  const spanPrice = document.createElement('span')
  spanPrice.innerText = 0
  tdPrice.appendChild(spanPrice)
  tr.appendChild(tdPrice)

  const tdQuantity = document.createElement('td')
  tdQuantity.setAttribute('class', 'quantity')
  const inputQuantity = document.createElement('input')
  inputQuantity.setAttribute("type", "number")
  inputQuantity.setAttribute("value", "0")
  inputQuantity.setAttribute("min", "0")
  inputQuantity.setAttribute("placeholder", "Quantity")
  tdQuantity.appendChild(inputQuantity)
  tr.appendChild(tdQuantity)

  const tdSubtotal = document.createElement('td')
  tdSubtotal.setAttribute('class', 'subtotal')
  tdSubtotal.innerHTML = '$'
  const spanSubtotal = document.createElement('span')
  spanSubtotal.innerText = 0
  tdSubtotal.appendChild(spanSubtotal)
  tr.appendChild(tdSubtotal)

  const tdAction = document.createElement('td')
  tdAction.setAttribute('class', 'action')
  const butonAction = document.createElement('button')
  butonAction.setAttribute('class', 'btn btn-remove')
  butonAction.innerText = 'Remove'
  tdAction.appendChild(butonAction)
  tr.appendChild(tdAction)

  return tr
}