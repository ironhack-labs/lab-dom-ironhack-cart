// ITERATION 1

function updateSubtotal(product) {
    const price = product.querySelector('.price span').innerHTML;

    let quantity = product.querySelector('.quantity input').value

    let subtotalValue = price * quantity

    const subtotal = product.querySelector('.subtotal span')
    subtotal.innerHTML = `${subtotalValue}`
}

function calculateAll() {

  // ITERATION 2
  let products = document.getElementsByClassName('product')
  products=[...products]
  products.forEach(updateSubtotal)

  // ITERATION 3
  let total = 0
  let subtotals = document.querySelectorAll('.subtotal span')
  subtotals = [...subtotals]
  subtotals.forEach(function(subtotal){total += Number(subtotal.innerHTML)})
  
  const totalDisplay = document.querySelector('#total-value span')
  totalDisplay.innerHTML=total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let pNode = target.parentNode.parentNode
  pNode.remove()
  calculateAll()
}

/*const target = event.currentTarget;
  let pNode = target.parentNode.parentNode
  pNode.querySelector('.quantity input').value = 0
  updateSubtotal(pNode)
  calculateAll()*/

// ITERATION 5

function createProduct() {
  let table = document.getElementById('cart')
  let tbody = document.getElementsByTagName('tbody')[0]
  console.log(tbody)
  let row = tbody.insertRow(table.rows.length-2)
  row.classList.add('product')

  let cell1 = row.insertCell(0)
  cell1.classList.add('name')
  let span = document.createElement('SPAN')
  span.innerHTML = document.getElementById('create-name').value
  cell1.appendChild(span)

  let cell2 = row.insertCell(1)
  cell2.classList.add('price')
  cell2.innerHTML = '$'
  let span2 = document.createElement('SPAN')
  span2.innerHTML = document.getElementById('create-price').value
  cell2.appendChild(span2)

  let cell3=row.insertCell(2)
  cell3.classList.add('quantity')
  let input = document.createElement('INPUT')
  input.type='number'
  input.value='0'
  input.min='0'
  input.placeholder='Quantity'
  cell3.appendChild(input)

  let cell4 = row.insertCell(3)
  cell4.classList.add('subtotal')
  cell4.innerHTML='$'
  let span3 = document.createElement('SPAN')
  span3.innerHTML='0'
  cell4.appendChild(span3)

  let cell5 = row.insertCell(4)
  cell5.classList.add('action')
  let btn = document.createElement('BUTTON')
  btn.classList.add('btn')
  btn.classList.add('btn-remove')
  btn.innerHTML='Remove'
  cell5.appendChild(btn)
  btn.addEventListener('click', removeProduct)
}

window.addEventListener('load', () => {
  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', createProduct)

  let removeButtons = document.getElementsByClassName('btn-remove')
  removeButtons = [...removeButtons]

  removeButtons.forEach(removeButton =>{removeButton.addEventListener('click', removeProduct)})

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

});
