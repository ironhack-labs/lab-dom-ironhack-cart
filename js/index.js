// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value

  const subtotal = price * quantity

  product.querySelector('.subtotal span').innerText = subtotal

  return subtotal
}

function calculateAll() {

  // ITERATION 2
  
  const allProducts = document.querySelectorAll('.product')

  let totalValue = 0
  allProducts.forEach (prod => {
    subtotal = updateSubtotal(prod)
    totalValue += subtotal
  })

  // ITERATION 3
  
  document.querySelector('#total-value span').innerText = totalValue
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const removedPrice = target.parentNode.parentNode.querySelector('.subtotal span').innerText
  let totalValue = document.querySelector('#total-value span').innerText
  let newTotal = totalValue - removedPrice
  document.querySelector('#total-value span').innerText = newTotal

  target.parentNode.parentNode.remove()
}

// ITERATION 5

function createProduct() {
  const inputs = document.querySelectorAll('.create-product input')

  let product = inputs[0].value
  let price = inputs[1].value

  const newRow = document.createElement('tr')
  newRow.setAttribute('class', 'product')
  
  const nameCell = document.createElement('td')
  nameCell.setAttribute('class', 'name')
  const nameSpan = document.createElement('span')
  const prodName = document.createTextNode(product)
  
  nameSpan.appendChild(prodName)
  nameCell.appendChild(nameSpan)

  const priceCell = document.createElement('td')
  priceCell.setAttribute('class', 'price')
  
  const dollar = document.createTextNode('$')
  const priceSpan = document.createElement('span')
  const priceNum = document.createTextNode(price)

  priceSpan.appendChild(priceNum)
  priceCell.appendChild(dollar)
  priceCell.appendChild(priceSpan)

  const qtyCell = document.createElement('td')
  qtyCell.setAttribute('class', 'quantity')
  const qtyInput = document.createElement('input')
  qtyInput.setAttribute('type', 'number')
  qtyInput.setAttribute('value', '0')
  qtyInput.setAttribute('min', '0')
  qtyInput.setAttribute('placeholder', 'Quantity')
  qtyCell.appendChild(qtyInput)

  const totalCell = document.createElement('td')
  totalCell.setAttribute('class', 'subtotal')
  const totalSpan = document.createElement('span')
  const totalPrice = document.createTextNode('0')
  totalSpan.appendChild(totalPrice)
  totalCell.appendChild(dollar)
  totalCell.appendChild(totalSpan)

  const buttonCell = document.createElement('td')
  buttonCell.setAttribute('class', 'action')
  const button = document.createElement('button')
  button.setAttribute('class', 'btn')
  button.classList.add('btn-remove')
  const buttonTxt = document.createTextNode('Remove')
  button.appendChild(buttonTxt)
  buttonCell.appendChild(button)


  newRow.appendChild(nameCell)
  newRow.appendChild(priceCell)
  newRow.appendChild(qtyCell)
  newRow.appendChild(totalCell)
  newRow.appendChild(buttonCell)

  document.querySelector('tbody').appendChild(newRow)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const rmvButtons = document.querySelectorAll('.btn-remove')

  rmvButtons.forEach(btn => {
    btn.onclick = function () {
      removeProduct(event)
    }
  })

  const addButton = document.querySelector('#create')
  addButton.onclick = function() {
    createProduct()
  }
});
