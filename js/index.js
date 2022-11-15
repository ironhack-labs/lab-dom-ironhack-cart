// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;

  const quantity = product.querySelector('.quantity input').value;

  let amount = price * quantity

  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = amount

  return amount
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalPrice = 0
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((product) => {
    totalPrice += updateSubtotal(product)
  })
  console.log(totalPrice)

  let totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let tableRow = target.parentNode.parentNode
  tableRow.parentNode.removeChild(tableRow)
}

// ITERATION 5

function createProduct() {
  let itemName = document.querySelector('.input-name input').value;
  let itemPrice = document.querySelector('.input-price input').value;

  let newRow = document.createElement("tr");
  newRow.setAttribute('class', 'product')

  let tdName = document.createElement('td')
  tdName.setAttribute('class', 'name')

  let spanName = document.createElement('span')
  spanName.innerHTML = itemName
  tdName.appendChild(spanName)
  newRow.appendChild(tdName)

  let spanPrice = document.createElement('span')
  spanPrice.innerHTML = itemPrice

  let tdPrice = document.createElement('td')
  tdPrice.setAttribute('class', 'price')
  tdPrice.innerHTML = '$'
  tdPrice.appendChild(spanPrice)
  newRow.appendChild(tdPrice)

  let tdQuantity = document.createElement('td')
  tdQuantity.setAttribute('class', 'quantity')

  let inputQuantity = document.createElement('input')
  inputQuantity.setAttribute('type', 'number')
  inputQuantity.setAttribute('value', '0')
  inputQuantity.setAttribute('min', '0')
  inputQuantity.setAttribute('placeholder', 'Quantity')

  tdQuantity.appendChild(inputQuantity)
  newRow.appendChild(tdQuantity)

  let tdSubtotal = document.createElement('td')
  tdSubtotal.setAttribute('class', 'subtotal')
  tdSubtotal.innerHTML = '$'

  let spanSubtotal = document.createElement('span')
  spanSubtotal.innerHTML = 0

  tdSubtotal.appendChild(spanSubtotal)
  newRow.appendChild(tdSubtotal)

  let btnRemove = document.createElement('button')
  btnRemove.setAttribute('class', 'btn')
  btnRemove.setAttribute('class', 'btn-remove')
  btnRemove.innerHTML = 'Remove'

  let tdAction = document.createElement('td')
  tdAction.setAttribute('class', 'action')

  tdAction.appendChild(btnRemove)
  newRow.appendChild(tdAction)

  let table = document.querySelector('tbody')
  table.appendChild(newRow)
  btnRemove.addEventListener('click', (e) => {
    removeProduct(e)
  })

  console.log(newRow)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

});

const btnRemove = document.querySelectorAll('.btn-remove');
btnRemove.forEach((remover) => {
  remover.addEventListener('click', (e) => {
    removeProduct(e)
  })
})

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', () => {
  createProduct()
  document.querySelector('.input-name input').value = ''
  document.querySelector('.input-price input').value = 0
})
