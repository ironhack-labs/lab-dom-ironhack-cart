// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  let actualPrice = price.innerHTML
  let quantity = product.querySelector('.quantity input').value
  let subTotal = product.querySelector('.subtotal span')

  let updatedSubTotal = actualPrice * quantity
  subTotal.innerHTML = updatedSubTotal
  return updatedSubTotal
}

function calculateAll() {
  
  let products = document.getElementsByClassName('product')
  let total = document.querySelector('#total-value span')
  total.innerHTML = "0"
  for (let i = 0; i < products.length; i++){
    let totalNum = parseInt(total.innerHTML)
    total.innerHTML = totalNum + updateSubtotal(products[i])
  }

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let main = target.parentNode.parentNode
  main.remove()
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  let table = document.getElementById('cart')
  let tbody = document.getElementsByTagName('tbody')[0]
  console.log(tbody)
  let row = tbody.insertRow(table.rows.length - 2)
  row.classList.add('product')
  let prodName = document.querySelector('#prodName').value
  let prodPrice = document.querySelector('#prodPrice').value
  
  // Adding the name cell
  let cell1 = row.insertCell(0)
  cell1.classList.add('name')
  let nameSpan = document.createElement('SPAN')
  nameSpan.innerHTML = prodName
  cell1.appendChild(nameSpan)
  
  // adding the price cell
  let cell2 = row.insertCell(1)
  cell2.classList.add('price')
  cell2.innerHTML = '$'
  let priceSpan = document.createElement('SPAN')
  priceSpan.innerHTML = prodPrice
  cell2.appendChild(priceSpan)

  // adding the quantity cell
  let cell3 = row.insertCell(2)
  cell3.classList.add('quantity')
  let input = document.createElement('INPUT')
  input.type = 'number'
  input.value = 0
  input.min = 0
  input.placeHolder = 'Quantity'
  cell3.appendChild(input)

  // adding the subtotal cell
  let cell4 = row.insertCell(3)
  cell4.classList.add('subtotal')
  cell4.innerHTML = '$'
  let stSpan = document.createElement('SPAN')
  stSpan.innerHTML = '0'
  cell4.appendChild(stSpan)

  // Creating the remove button
  let cell5 = row.insertCell(4)
  cell5.classList.add('action')
  let rmvBtn = document.createElement('BUTTON')
  rmvBtn.classList.add('btn')
  rmvBtn.classList.add('btn-remove')
  rmvBtn.innerHTML = 'Remove'
  cell5.appendChild(rmvBtn)
  rmvBtn.addEventListener('click', removeProduct)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeBtnList = document.getElementsByClassName('btn-remove');
  const createBtn = document.querySelector('#create');

  calculatePricesBtn.addEventListener('click', calculateAll);
  for (let i = 0; i < removeBtnList.length; i++) {
    removeBtnList[i].addEventListener('click', removeProduct);
  }
  createBtn.addEventListener('click', createProduct)

  //... your code goes here
});
